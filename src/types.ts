export enum CreateOrRenameUserStatus {
  Created,
  Own,
  Renamed,
  Taken
}

export interface IScuttlespaceUser {
  about: string | undefined;
  domain: string | undefined;
  enabled: boolean;
  externalId: string;
  pub: string;
  rowid: string;
  username: string;
  permissions: [IPermission | undefined] | undefined;
}

export interface IPermission {
  rowid: string;
  assigner: IScuttlespaceUser;
  assignee: IScuttlespaceUser;
  permissions: string | undefined;
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
