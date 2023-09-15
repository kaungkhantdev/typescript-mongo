import jwt from 'jsonwebtoken';
import config from '../../config/config';

class JWTWebToken
{
    static jwtSign ( data: Object )
    {
        return jwt.sign( data, config.jwt_secret_key ?? 'password' , { algorithm: 'HS512', expiresIn: config.jwt_expired ?? '1h' });
    }

    static jwtVerify ( token: string )
    {

        return  jwt.verify( token, config.jwt_secret_key ?? 'password', (err, decoded) => {

                    if(err) return { data: null, success: false };
                    
                    return { data: decoded, success: true }
                })
    }
}

export { JWTWebToken }