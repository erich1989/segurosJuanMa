import { POST, PUT, GET, DELETE } from "./";
import { USER_ROUTE } from "../constants/constants";

const apiUser = {
    get: (data) => GET(`${USER_ROUTE}/login/${data}`),
    getMint: (data) => GET(`${USER_ROUTE}/mintnft/${data}`),
    // get: (data) => GET(`${USER_ROUTE}`),
    // get: (data) => GET(`http://localhost:3001/api/v1/user/${data}`),
    // add: (data) => POST(`${USERS_ROUTER}/add`, data),
    // update: (data) => POST(`${USERS_ROUTER}/update`, data),
    // delete: (data) => DELETE(`${USERS_ROUTER}/delete`, data),
};

export { apiUser };