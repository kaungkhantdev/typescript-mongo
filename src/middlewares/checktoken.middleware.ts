import { Request, Response, NextFunction } from "express";
import { JWTWebToken } from "../services/jsonwebtoken";
import { BaseResponse } from "../services/response";

// class CheckToken
// {
//     constructor()
//     {
//         this.checkToken();
//     }

//     private checkToken(req: Request, res: Response, next: NextFunction)
//     {
//         try{

//             const { authorization } = req.headers;

//             if(!authorization) return BaseResponse.errRes(res, null, 'unauthorized', 401);

//             const access_token = authorization.split(' ')[1];

//             let tokenData = JWTWebToken.jwtVerify(access_token);

//             return BaseResponse.susRes(res, tokenData)
            
//         }
//         catch (error)
//         {

//         }
//     } 
// }

const CheckToken = (req: Request, res: Response, next: NextFunction) => {
    
        try{

            const { authorization } = req.headers;

            if(!authorization) return BaseResponse.errRes(res, null, 'unauthorized', 401);

            const access_token = authorization.split(' ')[1];

            let tokenData = JWTWebToken.jwtVerify(access_token);

            return BaseResponse.susRes(res, tokenData)
            
        }
        catch (error)
        {

        }
    } 


export { CheckToken }

