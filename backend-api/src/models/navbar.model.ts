import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Navbar = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const NavbarModel = mongoose.model('Navbar', Navbar);

export default NavbarModel;