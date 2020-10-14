module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT,
  admin: {
    auth: {
      secret: env("JWT", "b1e49cc85b0c26249fdfcedb42220ed3"),
    },
  },
});
