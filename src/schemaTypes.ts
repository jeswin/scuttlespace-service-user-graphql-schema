export interface IQuery {
  user: IScuttlespaceUserDTO;
}

export interface IUserOnQueryArguments {
  domain?: string;
  username?: string;
}

export interface IScuttlespaceUserDTO {
  about: string;
  domain: string;
  enabled: boolean;
  externalId: string;
  pub: string;
  rowid: string;
  username: string;
  permissions: Array<IPermissionDTO>;
}

export interface IPermissionDTO {
  rowid: string;
  assigner: IScuttlespaceUserDTO;
  assignee: IScuttlespaceUserDTO;
  permissions: string;
}

export interface IMutation {
  createOrRenameUser: string;
}

export interface ICreateOrRenameUserOnMutationArguments {
  input?: ICreateOrRenameUserArgs;
}

export interface ICreateOrRenameUserArgs {
  externalId: string;
  pub: string;
  username: string;
}
