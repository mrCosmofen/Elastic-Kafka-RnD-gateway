import { Moment } from 'moment';

export interface IInstance {
  id?: number;
  type?: string;
  title?: string;
  language?: string;
  publicationDate?: Moment;
  workId?: number;
}

export class Instance implements IInstance {
  constructor(
    public id?: number,
    public type?: string,
    public title?: string,
    public language?: string,
    public publicationDate?: Moment,
    public workId?: number
  ) {}
}
