import { UserItem } from './user-item.model';

export class Users {
  public total_count: number;
  public items: UserItem[];

  constructor(total_count: number, items: UserItem[]) {
    this.total_count = total_count;
    this.items = items;
  }
}