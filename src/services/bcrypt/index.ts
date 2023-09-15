import bcrypt from 'bcrypt';

class Bcrypt
{
    static async bcryptHash ( password: string )
    {
        const salt = await bcrypt.genSalt(10);

        return  await bcrypt.hash( password , salt)
;
    }

    static async bcryptComapre ( password: string, hashedPassword: string )
    {
        return await bcrypt.compare(password, hashedPassword);
    }
}

export { Bcrypt }