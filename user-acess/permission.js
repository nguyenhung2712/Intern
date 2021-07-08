import { actions, roles } from "./constants.js";

const mappings = new Map();

mappings.set(actions.ADD_ROOM, [roles.ADMIN]);
mappings.set(actions.DELETE_ROOM, [roles.ADMIN]);
mappings.set(actions.EDIT_ROOM, [roles.ADMIN]);
mappings.set(actions.ACTIVE_USER, [roles.ADMIN]);
mappings.set(actions.INACTIVE_USER,[roles.ADMIN]);
mappings.set(actions.DELETE_PLAN, [roles.ADMIN, roles.USER]);
mappings.set(actions.EDIT_PLAN, [roles.ADMIN, roles.USER]);
mappings.set(actions.ADD_PLAN, [roles.ADMIN, roles.USER]);


function hasPermission(file, action) {
  if (!file?.accessLevel) {
    return false;
  }

  if (mappings.has(action)) {
    return mappings.get(action).includes(file.accessLevel);
  }

  return false;
}

export default hasPermission;
