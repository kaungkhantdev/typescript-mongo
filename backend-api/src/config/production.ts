export default  
{
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URI,
    app_url: process.env.APP_URL,
    jwt_expired: process.env.JWT_EXPIRE,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    jwt_hash_arm: process.env.JWT_HASH_ARM
}