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
    user(domain: String, username: String): ScuttlespaceUserDTO
    getUsernameAvailability(username: String!): 
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
    enableUser(input: EnableUserArgs): ChangeUserStatusResult!
    disableUser(input: EnableUserArgs): ChangeUserStatusResult!
    destroyUser(input: EnableUserArgs): ChangeUserStatusResult!
  }
`;
