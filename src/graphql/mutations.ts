export default [
  {
    name: "createOrRenameUser",
    params: [["input", "CreateOrRenameUserArgs"]],
    returnType: "CreateOrRenameUserResult!"
  },
  {
    name: "destroyUser",
    params: [["input", "ChangeUserStatusArgs"]],
    returnType: "ChangeUserStatusResult!"
  },
  {
    name: "disableUser",
    params: [["input", "ChangeUserStatusArgs"]],
    returnType: "ChangeUserStatusResult!"
  },
  {
    name: "enableUser",
    params: [["input", "ChangeUserStatusArgs"]],
    returnType: "ChangeUserStatusResult!"
  }
];
