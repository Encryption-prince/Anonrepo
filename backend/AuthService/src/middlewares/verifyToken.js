const admin = require('../config/firebaseAdmin');  // Import


const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const idToken = authHeader.split(' ')[1];  // Extract the token from "Bearer token"

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
        const uid = decodedToken.uid
    });
        // Token is valid, continue with authentication;  
        // Verify the token
    req.user = decodedToken;  // Attach the decoded token to the request
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};

module.exports = verifyToken;
