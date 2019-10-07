const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const dotenvPath = path.join(__dirname, '..', 'server', '.env.local');
const dotenv = require('dotenv').config({ path: dotenvPath });
const app = express();
const mongoose = require('./config/database');

app.use('/', routes);

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});