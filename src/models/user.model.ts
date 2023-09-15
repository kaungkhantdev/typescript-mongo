import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        address: {
            type: String,
            required: false,
        },
        phoneNumber: {
            type: String,
            required: false
        },
        socialMedia: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model('User', User);

export default UserModel;