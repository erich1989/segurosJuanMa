import { POST, PUT, GET, DELETE } from "./";
import { NFT_ROUTE } from "../constants/constants";

const apiNft = {
    get: (data) => GET(`${NFT_ROUTE}/${data}`),
    // get: (data) => GET(`${USER_ROUTE}`),
    // get: (data) => GET(`http://localhost:3001/api/v1/user/${data}`),
    // add: (data) => POST(`${USERS_ROUTER}/add`, data),
    // update: (data) => POST(`${USERS_ROUTER}/update`, data),
    // delete: (data) => DELETE(`${USERS_ROUTER}/delete`, data),
    //   validToken: (data) => POST(`/api/user/validtoken`, data),
};

export { apiNft };