export default `
  type ScuttlespaceUserDTO {
    about: String
    domain: String
    enabled: Boolean!
    externalId: String!
    pub: String!
    rowid: ID!
    username: String!
    permissions: [PermissionDTO]
  }

  type PermissionDTO {
    rowid: ID!
    assigner: ScuttlespaceUserDTO!
    assignee: ScuttlespaceUserDTO!
    permissions: String
  }

  enum UserStatusEnum {
    AVAILABLE,
    TAKEN,
    OWN
  }

  extend type Query {
    user(domain: String, externalId: String, username: String): ScuttlespaceUserDTO
  }

  input CreateOrRenameUserArgs {
    externalId: String!
    pub: String!
    username: String!
  }

  input ChangeUserStatusArgs {
    externalId: String!
  }

  type ChangeUserStatusResult {
    username: String!
  }
  
  extend type Mutation {
    createOrRenameUser(input: CreateOrRenameUserArgs): String!
    enableUser(input: ChangeUserStatusArgs): ChangeUserStatusResult!
    disableUser(input: ChangeUserStatusArgs): ChangeUserStatusResult!
    destroyUser(input: ChangeUserStatusArgs): ChangeUserStatusResult!
  }
`;
