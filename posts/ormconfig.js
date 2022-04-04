module.exports={
    type:"postgres",
    database: process.env.POSTGRES_DB,
    synchronize:true,
    username:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    entities: ["**/*.entity.ts"]
}