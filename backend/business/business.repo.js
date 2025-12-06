// business.repo.js
const pool = require("../db");
const mapPgError = require("../utils/pgErrorMapper");

/**
 * Insert a new business row into the database.
 */
async function insertBusiness(business) {
  const query = `
    INSERT INTO business (
      name,
      email,
      phone,
      opening_time,
      closing_time,
      appointment_duration,
      working_days
    )
    VALUES ($1,$2,$3,$4::time,$5::time,$6::interval,$7)
    RETURNING *
  `;

  const values = [
    business.name,
    business.email,
    business.phone,
    business.opening_time,
    business.closing_time,
    business.appointment_duration,
    business.working_days,
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    const mappedError = mapPgError(error);
    throw mappedError instanceof Error ? mappedError : new Error("Database Error");
  }
}

/**
 * Update booking_link for a business, but only if it exists and is email-verified.
 */
async function updateBookingLinkIfVerified(bookingLink, business) {
  const updateQuery = "UPDATE business SET booking_link = $1 WHERE id = $2";
  const updateValues = [bookingLink, business.id];

  const verifyQuery = "SELECT email_verified FROM business WHERE id = $1";
  const verifyValues = [business.id];

  try {
    // 1) Check if business exists & is verified
    const result = await pool.query(verifyQuery, verifyValues);

    if (result.rows.length === 0) {
      return { ok: false, reason: "not_found" };
    }

    if (result.rows[0].email_verified !== true) {
      return { ok: false, reason: "not_verified" };
    }

    // 2) Update booking link in DB
    await pool.query(updateQuery, updateValues);

    // 3) Return success
    return {
      ok: true,
      bookingLink,
    };
  } catch (error) {
    const mappedError = mapPgError(error);
    throw mappedError instanceof Error ? mappedError : new Error("Database Error");
  }
}

/**
 * Get a business row by id.
 */
async function findBusinessById(businessId) {
  const query = "SELECT * FROM business WHERE id = $1";
  const values = [businessId];

  try {
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return { ok: false, reason: "business_not_found" };
    }

    return { ok: true, data: result.rows[0] };
  } catch (error) {
    const mappedError = mapPgError(error);
    throw mappedError instanceof Error ? mappedError : new Error("Database Error");
  }
}

module.exports = {
  insertBusiness,
  updateBookingLinkIfVerified,
  findBusinessById,
};
