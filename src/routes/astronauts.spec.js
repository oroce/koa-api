import proxyquire from 'proxyquire';
/* eslint-env mocha */
describe('astronauts', () => {
  it('should', async () => {
    const astro = proxyquire('./astronauts', {
      '../services/astronauts': {
        default: () => {
          return Promise.resolve('For the watch!');
        }
      }
    }).default;
    const ctx = {};
    await astro(ctx);
    ctx.body.should.eql('For the watch!', 'Body should equal with the data returned from the service');
  });
});
