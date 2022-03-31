import { Router } from 'express';

import { IssuesRepository } from '../repositories/IssuesRepository';

const issuesRoutes = Router();

const repository = new IssuesRepository();

issuesRoutes.post('', (request, response) => {
  const { description, latitude, longitude } = request.body;

  repository.create({
    description,
    latitude,
    longitude,
  });

  return response.status(201).send();
});

issuesRoutes.get('', (request, response) => {
  const issues = repository.list();

  return response.json(issues);
});

export { issuesRoutes };
