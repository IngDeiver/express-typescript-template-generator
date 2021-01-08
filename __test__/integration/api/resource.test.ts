/* eslint-disable no-underscore-dangle */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import supertest from 'supertest';
import expres from 'express';
import server from '../../../src/app';

let app: expres.Application;
let request: supertest.SuperTest<supertest.Test>;
const baseUri = '/api/example';
beforeAll(() => {
  app = server.app;
  request = supertest(app);
});

// list
it('should get list resources', async () => {
  const response = await request.get(baseUri);
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});

// save
describe('should save resource', () => {
  it('should save with 200 status', async () => {
    const property = 'resource saved with unit tes';
    const response = await request.post(baseUri)
      .send({ property })
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body.property).toBeDefined();
    expect(response.body.property).toEqual(property);

    // remove a resource saved
    const responseRemove = await request.delete(`${baseUri}/${response.body._id}`);
    expect(responseRemove.status).toBe(200);
    expect(responseRemove.body.property).toBeDefined();
  });

  it('should fail save without property property with 400 status', async () => {
    const response = await request.post(baseUri)
      .set('Accept', 'application/json');
    expect(response.status).toBe(400);
    expect(response.body.title).toBeUndefined();
  });
});

// get by id
describe('should get resource by id', () => {
  it('should response with 200 status', async () => {
    const id = '5fe02e62e1cb2a6d2ed260f4';
    const response = await request.get(`${baseUri}/${id}`);
    expect(response.status).toBe(200);
  });

  it('should response with 404 status', async () => {
    const id = '5fe0287346956c638f701222';
    const response = await request.get(`${baseUri}/${id}`);
    expect(response.status).toBe(404);
    expect(response.body.property).toBeUndefined();
  });
});

// update
describe('should update a resource', () => {
  it('should update with 200 status', async () => {
    const id: string = '5fe03005b39766715b4ed1a1';
    const resource = { property: 'resource update with test' };
    const response = await request.put(`${baseUri}/${id}`)
      .send(resource);
    expect(response.status).toBe(200);
    expect(response.body.property).toEqual(resource.property);
  });

  it('should fail with 404 status', async () => {
    const id = '5fe0287346956c638f701bd2';
    const response = await request.put(`${baseUri}/${id}`)
      .send({ property: 'resource update with test' });
    expect(response.status).toBe(404);
    expect(response.body.property).toBeUndefined();
  });
});

// remove
describe('should remove a resource', () => {
  it('should fail with 404 status', async () => {
    const id = '5fe0287346956c638f701bd2';
    const response = await request.delete(`${baseUri}/${id}`);
    expect(response.status).toBe(404);
    expect(response.body.property).toBeUndefined();
  });
});
