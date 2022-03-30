interface ICreateIssueDTO {
  id?: string;

  description: string;

  latitude: number;

  longitude: number;

  created_at?: Date;
}

export { ICreateIssueDTO };
