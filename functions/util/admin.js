//this file imports the firebase admin package and initializes the firestore database object and exports it so the other modules can use it
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };