module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ab7089aa8ba4f7957430e817ba4a8303'),
  },
});
