module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('JWT', 'b1e49cc85b0c26249fdfcedb42220ed3'),
    },
  },
});
