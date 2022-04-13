import { ICreateIssueDTO } from '../../dtos/ICreateIssueDTO';
import { Issue } from '../../entities/Issue';
import { IIssuesRepository } from '../IIssuesRepository';

class IssuesRepository implements IIssuesRepository {
  private issues: Issue[];

  private static INSTANCE: IssuesRepository;

  private constructor() {
    this.issues = [];
  }

  public static getIntance(): IssuesRepository {
    if (!IssuesRepository.INSTANCE) {
      IssuesRepository.INSTANCE = new IssuesRepository();
    }

    return IssuesRepository.INSTANCE;
  }

  public create({ description, cordinates }: ICreateIssueDTO): void {
    const issue = new Issue();

    // const cordinateExists = this.issues.some(
    //   issue =>
    //     issue.latitude === cordinates.latitude &&
    //     issue.longitude === cordinates.longitude,
    // );

    // if (!cordinateExists) {
    //   throw new AppError('Cordinates already exists', 400);
    // }

    Object.assign(issue, {
      description,
      cordinates,
    });

    this.issues.push(issue);
  }

  public list(): Issue[] {
    return this.issues;
  }
}

export { IssuesRepository };
