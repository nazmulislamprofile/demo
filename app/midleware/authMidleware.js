import { TokenDecode } from "../utility/tokenUtility.js"

export default (req, res, next) => {

    let token=req.headers['token']

    let decoded=TokenDecode(token)

    if (decoded===null){
        res.status(401).send({status:"fail",message:"Unauthorized"})
    }

    else {
        // email,user_id pick from decoded token
        let NIDNumber=decoded.NIDNumber;
        let password=decoded.password;
     
        // email,user_id add with request header
      
        req.headers.NIDNumber=NIDNumber;
        req.headers.password=password;


        next()
    }
}