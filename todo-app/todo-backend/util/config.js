
// const MONGO_URL = process.env.MONGO_URL || "mongodb://root:password@mongo:27017/the_database"
const MONGO_URL = process.env.MONGO_URL || "mongodb://root:password@127.0.0.1:3001/the_database"
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:3002"

module.exports = {
  MONGO_URL,
  REDIS_URL
}