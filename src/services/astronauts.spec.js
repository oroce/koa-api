import proxyquire from 'proxyquire';
/* eslint-env mocha */
describe('astronauts', () => {
  it('should', () => {
    const astro = proxyquire('./astronauts', {
      'request-promise-native': (opts) => {
        Object.keys(opts).should.eql(['url', 'json'], 'opts should not be else than url and json');
        opts.url.should.eql('http://api.open-notify.org/astros.json');
        opts.json.should.eql(true);
      }
    }).default;
    astro();
  });
});
