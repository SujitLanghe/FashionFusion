import jwt from 'jsonwebtoken'

const authUser = async (req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
<<<<<<< HEAD
        if (token_decode.role === 'admin' || !token_decode.id) {
            return res.json({success:false,message:"Not Authorized Login again"})
        }
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log("JWT Error in authUser:", error.message)
        res.json({success:false,message:"Not Authorized Login again"})
=======
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
>>>>>>> 754679072f59d8d2513e25411c13736702c42ff9
    }
}
export default authUser