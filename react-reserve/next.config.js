// must restart server whenever you make changes in next.config
console.log("Testando Github!");
module.exports = {
  env: {
    MONGO_SRV: "<insert-mongo-srv>",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
