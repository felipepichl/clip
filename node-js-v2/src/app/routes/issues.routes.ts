import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const issuesRoutes = Router();

const issues = [];

issuesRoutes.post('', (request, response) => {
  const { description, latitude, longitude } = request.body;

  const issue = {
    id: uuid(),
    description,
    latitude,
    longitude,
  };

  issues.push(issue);

  return response.status(201).send();
});

export { issuesRoutes };
