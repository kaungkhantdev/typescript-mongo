import development from "./development";
import statging from "./statging";
import production from "./production";

interface configInterface {
    port: string | undefined,
    mongo_url: string | undefined,
    app_url: string | undefined,
    jwt_expired: string | undefined,
    jwt_secret_key: string | undefined,
    jwt_hash_arm: string | undefined
}

let config: configInterface;

let env = process.env.APP_MODE!.toLowerCase()

if (env === 'production') 
{
    config = production
} 
else if (env === 'staging') 
{
    config = statging
} 
else if (env === 'development') 
{
    config = development
} 
else 
{
    throw new Error('No configurable APP_MODE detected, no config loaded')
}

export default config;