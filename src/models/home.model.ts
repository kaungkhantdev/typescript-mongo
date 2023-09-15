import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Home = new Schema(
    {
        heroTitle: {
            type: String,
            required: true
        },
        heroDescription: {
            type: String,
            required: true,
        },
        heroBtnText: {
            type: String,
            required: true,
        },
        heroPhoto: {
            type: String,
            default: true
        },
        heroCv: {
            type: String,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const HomeModel = mongoose.model('Home', Home);

export default HomeModel;