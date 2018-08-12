const cfg = {
  prod: {
    adminApi: '',
  },
  dev: {
    adminApi: '',
  },
  local: {
    adminApi: '',
  },
  offline: {
    adminApi: '',
  },
};
console.log(process.env.REACT_APP_STAGE);
const config = cfg[process.env.REACT_APP_STAGE];
export default config;
