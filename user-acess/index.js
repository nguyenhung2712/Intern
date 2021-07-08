import hasPermission from "./permissions";
import {actions,roles} from "./constants";

function hasAccess(entity, action) {
  return hasPermission(entity, action);
}

export default hasAccess;
export { hasPermission,actions,roles };
