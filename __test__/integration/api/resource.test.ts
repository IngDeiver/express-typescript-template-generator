/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import supertest from 'supertest';
import expres from 'express';
import server from '../../../src/app';

let app: expres.Application;
let request: supertest.SuperTest<supertest.Test>;
beforeAll(() => {
  app = server.app;
  request = supertest(app);
});

describe('Api', () => {
  it('should get list of resources', async () => {
    const response = await request.get('/api/example');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should save resource', async () => {
    const property = 'resource saved with unit tes';
    const response = await request.post('/api/example')
      .send({ property })
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body.property).toBeDefined();
    expect(response.body.property).toEqual(property);
  });

  it('should fail save without <property(s)>', async () => {
    const response = await request.post('/api/example')
      .set('Accept', 'application/json');
    expect(response.status).toBe(500);
    expect(response.body.title).toBeUndefined();
  });
});
