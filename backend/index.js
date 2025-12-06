require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

const frontendDistPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDistPath));

app.get((req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
