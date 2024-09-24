const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),  // Make sure you have the service account key file in your environment
});

module.exports = admin;
