import request from 'request-promise-native';

export default (opts) => {
  return request({
    url: 'http://api.open-notify.org/astros.json',
    json: true
  });
};
