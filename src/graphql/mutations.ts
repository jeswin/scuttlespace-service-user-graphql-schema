export default {
  createOrRenameUser: {
    params: [["input", "CreateOrRenameUserArgs"]],
    returnType: "CreateOrRenameUserResult!"
  },
  destroyUser: {
    params: [["input", "ChangeUserStatusArgs"]],
    returnType: "ChangeUserStatusResult!"
  },
  disableUser: {
    params: [["input", "ChangeUserStatusArgs"]],
    returnType: "ChangeUserStatusResult!"
  },
  enableUser: {
    params: [["input", "ChangeUserStatusArgs"]],
    returnType: "ChangeUserStatusResult!"
  }
};
