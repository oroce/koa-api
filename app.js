import Koa from 'koa';
import { get } from 'koa-route';
import astronauts from './src/routes/astronauts';
import config from './config';

const app = new Koa();
app.use(get('/astronauts', astronauts));

if (!module.parent) {
  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('App is running on port %s', config.port);
  });
}
export default app;
