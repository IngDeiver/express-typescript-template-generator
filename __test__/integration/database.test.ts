import { Connection } from 'mongoose';
import { Database } from '../../src/config';

let db: Connection;
beforeAll(async () => {
  db = await Database.connect();
});

afterAll(() => {
  db.close();
});

describe('Database', () => {
  it('should is connected', () => {
    expect(db.readyState).toEqual(1);
  });
});
