import { Router } from 'express';

import { IssuesRepository } from '../repositories/IssuesRepository';

const issuesRoutes = Router();

issuesRoutes.post('', (request, response) => {
  const { description, latitude, longitude } = request.body;

  const repository = new IssuesRepository();

  const issue = repository.create({
    description,
    latitude,
    longitude,
  });

  return response.status(201).send({ issue });
});

export { issuesRoutes };
