module.exports = {
  reactStrictMode: true,
  // we can environments values to production
  env: {
    customKey: 'customValue',
  },
  // location of the project
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hey',
        destination: '/hello',
        permanent: true,
      },
    ];
  },
};
