require('dotenv').config();
// backend/index.js
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cookieParser());

// 1) Your API routes first
app.use('/', routes);

// 2) Serve the React build (frontend/dist)
const frontendDistPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDistPath));

// 3) Catch-all to serve index.html for any non-API route (React Router etc.)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
