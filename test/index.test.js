const request = require('supertest');
const app = require('../src/app');

const agent = request.agent(app);

describe('GET /', () => {
  test('It should successfully running', done => {
    agent
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.statusCode).toBe(200)
        done();
      });
  });
});

