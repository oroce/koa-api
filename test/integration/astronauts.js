/* eslint-env mocha */
import app from '../../app';
import supertest from 'supertest';

const request = supertest.agent(app.listen());

describe('astronauts integration test', () => {
  it('should return the astronauts', (done) => {
    request
      .get('/astronauts')
      .expect(200)
      .end((err, res) => {
        res.body.people.should.be.an.Array();
        done(err);
      });
  });
});
