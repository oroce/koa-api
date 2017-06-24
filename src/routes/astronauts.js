import astronauts from '../services/astronauts';

export default async (ctx) => {
  ctx.body = await astronauts();
};
