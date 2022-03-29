import { Router } from 'express';

const issuesRoutes = Router();

const issues = [];

issuesRoutes.post('', (request, response) => {
  const { description, latitude, longitude } = request.body;

  issues.push({
    description,
    latitude,
    longitude,
  });

  return response.status(201);
});

export { issuesRoutes };
