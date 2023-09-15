import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Service = new Schema(
    {
        serviceSubTitle: {
            type: String,
            required: true,
        },
        serviceTitle: {
            type: String,
            required: true
        },
        serviceDescription: {
            type: String,
            required: true
        },
        serviceBtnText: {
            type: String,
            required: true
        },
        serviceItems: [
            {
                title: {
                    type: String,
                    required: true,
                },
                btnText: {
                    type: String,
                    required: true
                },
                link: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

const ServiceModel = mongoose.model('Service', Service);

export default ServiceModel;