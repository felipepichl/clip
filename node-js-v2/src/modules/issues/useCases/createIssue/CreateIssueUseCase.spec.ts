import { IssuesRepositoryInMemory } from '../../repositories/in-memory/IssuesRepositoryInMemory';
import { CreateIssueUseCase } from './CreateIssueUseCase';

let issuesRepositoryInMemory: IssuesRepositoryInMemory;
let createIssueUseCase: CreateIssueUseCase;

describe('Create Issues', () => {
  beforeEach(() => {
    issuesRepositoryInMemory = new IssuesRepositoryInMemory();
    createIssueUseCase = new CreateIssueUseCase(issuesRepositoryInMemory);
  });

  it('should be able to create a new issue', async () => {
    const issue = {
      description: 'A new issue',
      cordinates: {
        latitude: 0.03,
        longitude: 0.04,
      },
    };

    await createIssueUseCase.execute(issue);
  });
});
