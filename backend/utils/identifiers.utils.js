const crypto = require('crypto');

function generateTokenRaw() {
  // 32 bytes => 64 hex chars (256 bits)
  return crypto.randomBytes(32).toString('hex');
}

function hashToken(tokenRaw) {
  return crypto.createHash('sha256').update(tokenRaw).digest('hex');
}

module.exports = { generateTokenRaw, hashToken };