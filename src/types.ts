export interface IScuttlespaceUserDTO {
  about?: string | null;
  domain?: string | null;
  enabled: boolean;
  externalId: string;
  pub: string;
  rowid: string;
  username: string;
  permissions?: [IPermissionDTO | null] | null;
}

export interface IPermissionDTO {
  rowid: string;
  assigner: IScuttlespaceUserDTO;
  assignee: IScuttlespaceUserDTO;
  permissions?: string | null;
}

export enum UserStatusEnum {
  AVAILABLE,
  TAKEN,
  OWN
}

export interface ICreateOrRenameUserArgs {
  externalId: string;
  pub: string;
  username: string;
}

export interface ICreateOrRenameUserResult {
  status: string;
}

export interface IChangeUserStatusArgs {
  externalId: string;
}

export interface IChangeUserStatusResult {
  username: string;
}
