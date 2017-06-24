require('dotenv-safe').load({
  allowEmpty: true
});
export default {
  port: process.env.PORT
};
