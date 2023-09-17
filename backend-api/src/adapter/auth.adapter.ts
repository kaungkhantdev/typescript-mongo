import { Response } from "express";
import { UserRepository } from "../repositories/index.repository";
import { isValidEmail, required } from "../services/validations";
import { BaseResponse } from "../services/response";
import { JWTWebToken } from "../services/jsonwebtoken";
import { Bcrypt } from "../services/bcrypt";

class AuthAdapter extends UserRepository
{

    constructor(){ super() }

    public async loginAdapter ( res: Response, email: string, password: string ) 
    {
        /** validation */

        if(!required(email) || !required(password)) 
        {
            return BaseResponse.errRes(res, null, 'Sorry, email and password are required.');
        }

        let validateEmail = isValidEmail(email);

        if(!validateEmail) return BaseResponse.errRes(res, null, 'Sorry, your email is invalid.');

        let user = await super.getByOneWithSelect({ email: email }, ['password']);

        if(!user)
        {
            return BaseResponse.errRes(res, null,'Sorry, your email or password is invalid.');
        }
        else
        {
            
            /** check password */
            let checkPassword = await Bcrypt.bcryptComapre(password, user.password);
            if( !checkPassword ) return BaseResponse.errRes(res, null, 'Sorry, your email or password is invalid.');


            let userData = await super.getById(user._id);
            return BaseResponse.susRes(res, {
                access_token: JWTWebToken.jwtSign({id : user._id}),
                user: userData,
            });
        }
    }
}

export { AuthAdapter }