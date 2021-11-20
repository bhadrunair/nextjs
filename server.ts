const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:3000' : 'http://yourwebsite.com';

export default server;