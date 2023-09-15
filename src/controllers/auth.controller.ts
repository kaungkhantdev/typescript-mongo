import { Request, Response } from 'express';
import { AuthAdapter } from '../adapter/index.adapter';

class AuthController extends AuthAdapter
{
    constructor() {super()}

    public async login (req: Request, res: Response )
    {

        const { email, password } = req.body;

        let data = await super.loginAdapter(res, email, password);

        return data;
    }

}

export { AuthController }
