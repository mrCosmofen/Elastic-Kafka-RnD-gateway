import { IAgent } from 'app/shared/model/agent.model';
import { IInstance } from 'app/shared/model/instance.model';

export interface IWork {
  id?: number;
  type?: string;
  genre?: string;
  title?: string;
  agents?: IAgent[];
  instances?: IInstance[];
}

export class Work implements IWork {
  constructor(
    public id?: number,
    public type?: string,
    public genre?: string,
    public title?: string,
    public agents?: IAgent[],
    public instances?: IInstance[]
  ) {}
}
