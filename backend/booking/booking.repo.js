// booking.repo.js
const pool = require("../db");
const mapPgError = require("../utils/pgErrorMapper");

/**
 * Insert a new booking into the DB for a given business.
 * Automatically calculates end_at from business.appointment_duration.
 */
async function createBooking(bookingDetails) {
  const query = `
    INSERT INTO booking (
      business_id,
      customer_name,
      customer_email,
      customer_phone,
      booked_date,
      start_at,
      end_at
    )
    SELECT
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $6::TIME + business.appointment_duration
    FROM business
    WHERE business.id = $1
    RETURNING *
  `;

  const values = [
    bookingDetails.id,
    bookingDetails.customer_name,
    bookingDetails.customer_email,
    bookingDetails.customer_phone,
    bookingDetails.booked_date,
    bookingDetails.booked_time
  ];

  try {
    const result = await pool.query(query, values);

    return {
      ok: true,
      data: result.rows[0]
    };
  } catch (error) {
    const mappedError = mapPgError(error);
    throw mappedError instanceof Error ? mappedError : new Error("Database Error");
  }
}

module.exports = {
  createBooking
};
