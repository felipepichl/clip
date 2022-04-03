import { Router } from 'express';

import { IssuesRepository } from '../repositories/IssuesRepository';
import { CreateIssueServices } from '../services/CreateIssueServices';

const issuesRoutes = Router();

issuesRoutes.post('', (request, response) => {
  const { description, latitude, longitude } = request.body;

  const services = new CreateIssueServices(new IssuesRepository());

  const cordinates = {
    latitude,
    longitude,
  };

  services.execute({ description, cordinates });

  return response.status(201).send();
});

issuesRoutes.get('', (request, response) => {
  // const issues = repository.list();

  return response.json({ message: 'ToDo' });
});

export { issuesRoutes };
