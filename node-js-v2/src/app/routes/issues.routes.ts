import { Router } from 'express';

import { Issue } from '../entities/Issue';

const issuesRoutes = Router();

const issues: Issue[] = [];

issuesRoutes.post('', (request, response) => {
  const { description, latitude, longitude } = request.body;

  const issue = new Issue();

  Object.assign(issue, {
    description,
    latitude,
    longitude,
    created_at: new Date(),
  });

  issues.push(issue);

  return response.status(201).send({ issue });
});

export { issuesRoutes };
