// const url =
//   typeof window === 'undefined'
//     ? 'http://127.0.0.1:3000'
//     : 'http://124.50.73.52:3000';
const url = (() => {
  if (process.env.NODE_ENV === 'production') return 'https://cy3589.com';
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';
  if (typeof window === 'undefined') return 'http://127.0.0.1:3000';
  return 'http://124.50.73.52:3000';
})();
const axiosConfig = { url };

export default axiosConfig;
