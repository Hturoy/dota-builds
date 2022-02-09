module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eae18222f3c9a809e552eb2d943e9914'),
  },
});
