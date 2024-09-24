const admin = require('firebase-admin');
const serviceAccount = require('./mentorconnect.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "mentorconnect-ee885",
  databaseURL: 'https://mentorconnect-ee885.firebaseio.com'
});

module.exports = admin;
