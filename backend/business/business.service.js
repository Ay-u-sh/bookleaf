// business.service.js
const businessFormatter = require("./business.formatter");
const businessRepo = require("./business.repo");
const emailUtils = require("../utils/email.utils");
const { generateTokenRaw, hashToken } = require("../utils/identifiers.utils");
const businessTokenRepo = require("../business_tokens/business_tokens.repo");

async function registerBusiness(rawBusiness) {
  const formattedBusiness = businessFormatter.normalizeBusiness(rawBusiness);
  const createdBusiness = await businessRepo.insertBusiness(formattedBusiness);
  return createdBusiness;
}

async function createBookingLinkForBusiness(business) {
  const BOOKING_BASE_URL = process.env.BOOKING_BASE_URL;
  const bookingLink = `${BOOKING_BASE_URL}${business.id}`;

  const linkResult = await businessRepo.updateBookingLinkIfVerified(bookingLink, business);

  if (!linkResult.ok) {
    if (linkResult.reason === "not_verified") {
      return { ok: false, message: "Verify your email first", status: 400 };
    }
    if (linkResult.reason === "not_found") {
      return { status: 404, ok: false, message: "Business not found" };
    }
  }

  return { ok: true, bookingLink };
}

async function getBusinessDetails(businessId) {
    const result = await businessRepo.findBusinessById(businessId);
  if (result.ok) {
    return { ok: true, data: result.data };
  } else {
    return { ok: false, message: result.reason };
  }
}

async function sendBusinessVerificationEmail(business) {
  const expiryHours = 24;
  const rawToken = generateTokenRaw();
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(
    Date.now() + expiryHours * 60 * 60 * 1000
  ).toISOString();

  const tokenId = await tokenRepo.storeToken(tokenHash, business.id, expiresAt);

  const base = process.env.PUBLIC_BASE_URL;
  const verificationLink = `${base.replace(
    /\/$/,
    ""
  )}/verify?token=${rawToken}`;

  const mailData = {
    ...business,
    expiryHours,
    verificationLink,
  };

  const result = await emailUtils.sendBusinessVerificationMail(mailData);
  return result;
}

async function verifyBusinessFromToken(rawToken) {
  if (!rawToken) return "missing token";

  const tokenHash = hashToken(rawToken);
  return await tokenRepo.verifyToken(tokenHash);
}

module.exports = {
  registerBusiness,
  getBusinessDetails,
  createBookingLinkForBusiness,
  sendBusinessVerificationEmail,
  verifyBusinessFromToken,
};
