export interface IScuttlespaceUserDTO {
  about: string | null;
  domain: string | null;
  enabled: boolean;
  externalId: string;
  pub: string;
  rowid: string;
  username: string;
  permissions?: Array<IPermissionDTO> | null;
}

export interface IPermissionDTO {
  rowid: string;
  assigner: IScuttlespaceUserDTO;
  assignee: IScuttlespaceUserDTO;
  permissions: string | null;
}

export interface ICreateOrRenameUserArgs {
  externalId: string;
  pub: string;
  username: string;
}
