import { POST, PUT, GET, DELETE } from "./";
import { USER_ROUTE } from "../constants/constants";

const apiUserEnv = {
  post: (data) => POST(`${USER_ROUTE}/envmode`, data),
};

export { apiUserEnv };