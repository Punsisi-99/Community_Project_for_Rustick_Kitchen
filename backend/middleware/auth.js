import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  // Check for the Authorization header
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Authorization header missing" });
  }

  // Extract token from 'Bearer <token>' format
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Token missing in Authorization header" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id; // Attach user ID to request body
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({ success: false, message: "Invalid or malformed token" });
  }
};

export default authUser;
