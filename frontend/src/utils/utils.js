import { PERMISSION_LEVEL } from "./enum";

export const memberRole = (_permissionLevel) => {
  const permissionLevel = _permissionLevel;
  switch (permissionLevel) {
    case PERMISSION_LEVEL.SUPER_ADMIN:
      return "Forum's manager";
    case PERMISSION_LEVEL.ADMIN:
      return "Admin";
    default:
      return "Member";
  }
};
