// src/config/config.ts

interface Config {
    mongoUri: string;
    jwtSecret: string;
    port: number;
}

const config: Config = {
    mongoUri: process.env.MONGO_URI || 'your-default-mongo-uri',
    jwtSecret: process.env.JWT_SECRET || 'your-default-secret',
    port: parseInt(process.env.PORT || '5000', 10),
};

export default config;
