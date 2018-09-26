export enum CreateOrRenameUserStatus {
  Created = "Created",
  Own = "Own",
  Renamed = "Renamed",
  Taken = "Taken"
}

export interface IScuttlespaceUser {
  about: string | null;
  domain: string | null;
  enabled: boolean;
  externalId: string;
  pub: string;
  rowid: string;
  username: string;
  permissions: (IPermission | null)[] | null;
}

export interface IPermission {
  rowid: string;
  assigner: IScuttlespaceUser;
  assignee: IScuttlespaceUser;
  permissions: string | null;
}

export interface ICreateOrRenameUserArgs {
  externalId: string;
  pub: string;
  username: string;
}

export interface ICreateOrRenameUserResult {
  externalId: string;
  status: CreateOrRenameUserStatus;
}

export interface IChangeUserStatusArgs {
  externalId: string;
}

export interface IChangeUserStatusResult {
  username: string;
}
