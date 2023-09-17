import User from '../models/user.model';
import { Bcrypt } from '../services/bcrypt';


export default async (): Promise<void> => {

    const hasAdmin = await User.findOne({ email: 'kaungkhantzaw.dev@gmail.com'});

    if(hasAdmin)
    {
        console.log('Admin have already created. '+ hasAdmin)
        return;
    }
    else
    {
        const hashedPassword = Bcrypt.bcryptHash('password');

        const newUser = new User({
            name: "kaungkhantzaw",
            email: "kaungkhantzaw.dev@gmail.com",
            password: hashedPassword,
            isAdmin: true
        })

        await newUser.save();

        console.log("Successfully created.");

        return;
    }
}
