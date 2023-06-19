import request from 'supertest';

import { app } from '@shared/infra/http/start/app';

describe('[E2E] = Create User', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Jonh Due',
      cpf: '111.222.333-44',
      whatsapp: '5555999999999',
    });

    expect(response.status).toBe(201);
  });
});
