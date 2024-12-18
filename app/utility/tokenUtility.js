import jwt from "jsonwebtoken";
import{JWT_SECRET,JWT_EXPIRATION_TIME} from "../config/config.js"

export const TokenEncode=(NIDNumber,password)=>{
    const KEY=JWT_SECRET
    const EXPIRE={expiresIn: JWT_EXPIRATION_TIME}
    const PAYLOAD={NIDNumber:NIDNumber,password:password}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const TokenDecode=(token)=>{
    try {
        return jwt.verify(token,JWT_SECRET)
    }catch (e) {
        return null
    }
}