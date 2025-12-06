// booking.service.js
const emailUtils = require('../utils/email.utils');
const bookingRepo = require('./booking.repo');

async function createBooking(bookingDetails) {
  try {
    // 1. Insert booking into DB
    const result = await bookingRepo.createBooking(bookingDetails);

    // 2. Prepare mail payload
    const mailPayload = {
      ...bookingDetails,
      start_at: result.data.start_at,
      end_at: result.data.end_at
    };

    // 3. Send confirmation mail
    await emailUtils.sendBookingDetailsMail(mailPayload);

    return {
      ok: true,
      message: 'Booking request received'
    };

  } catch (error) {
    console.error('Booking service error:', error);
    return {
      ok: false,
      message: 'Something went wrong'
    };
  }
}

module.exports = {
  createBooking
};
