export interface IAgent {
  id?: number;
  firstName?: string;
  lastName?: string;
  workId?: number;
}

export class Agent implements IAgent {
  constructor(public id?: number, public firstName?: string, public lastName?: string, public workId?: number) {}
}
