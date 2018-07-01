export class UserItem {
  public avatar_url: string;
  public id: number;
  public login: string;
  public url: string;

  constructor(avatar_url: string, id: number, login: string, url: string) {
    this.avatar_url = avatar_url;
    this.id = id;
    this.login = login;
    this.url = url;
  }
}