import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Common = new Schema(
    {
        logo: {
            type: String,
            required: true,
        },
        error: {
            type: String,
            required: true,
        },
        version: {
            type: String,
            required: true,
        },
        descripiton:  {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const CommonModel = mongoose.model('Common', Common);

export default CommonModel;