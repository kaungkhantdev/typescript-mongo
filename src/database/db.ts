import mongoose from "mongoose";

const connection = async ( mongo_url: string ) : Promise<void> => {

    try
    {

        await mongoose.connect(mongo_url)
              .then(() => console.log('Database connection is successfully connected.'))
              .catch(err => console.log('Database connection error',err))

        mongoose.connection.on('connected', function () {
          console.log(`Mongoose connection is successfully connected`);
        });

        /** If the connection throws an error */
        mongoose.connection.on('error',function (err) {
          console.log('Mongoose default connection error: ' + err);
        });

        /** When the connection is disconnected */
        mongoose.connection.on('disconnected', function () {
          console.log('Mongoose default connection disconnected');
        });

    }
    catch (error)
    {
        console.log('Mongodb connection error', error)
    }

}

export default connection
