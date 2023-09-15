import { Response } from 'express';

class BaseResponse
{
    /** For success response */

    static susRes  ( res: Response, 
                     data: any, 
                     msg: string = "Data get by these api.", 
                     statusCode: number = 200
                    )  {

                            return res.status(statusCode).json({
                                success: true,
                                msg: msg,
                                data: data
                            });
                        }


    /** For error response */

    static errRes ( res: Response, 
                    data: any, 
                    msg: string = 'Sorry, Error get by these api.', 
                    statusCode: number = 400
                  )  {

                        return res.status( statusCode ).json({
                            error: true,
                            msg: msg,
                            data: data
                        });
                    }

}

export { BaseResponse }

