import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Color = new Schema(
    {
        primary: {
            type: String,
            required: true,
        },
        secondary: {
            type: String,
            required: true,
        },
        dark: {
            type: String,
            required: true,
        },
        paragraph: {
            type: String,
            required: true,
        },
        black: {
            type: String,
            required: true,
        },
        success: {
            type: String,
            required: true,
        },
        danger: {
            type: String,
            required: true,
        },
        other: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const ColorModel = mongoose.model('Color', Color);

export default ColorModel;