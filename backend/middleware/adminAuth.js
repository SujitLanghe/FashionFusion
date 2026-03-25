import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
<<<<<<< HEAD
    if (token_decode.role !== 'admin' || token_decode.email !== process.env.ADMIN_EMAIL) {
=======
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
>>>>>>> 754679072f59d8d2513e25411c13736702c42ff9
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    next();
  } catch (error) {
<<<<<<< HEAD
    console.log("JWT Error in adminAuth:", error.message);
    res.json({ success: false, message: "Not Authorized Login Again" });
=======
    console.log(error);
    res.json({ success: false, message: error.message });
>>>>>>> 754679072f59d8d2513e25411c13736702c42ff9
  }
};

export default adminAuth;
