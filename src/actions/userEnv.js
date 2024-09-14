import { apiUserEnv } from "./../apis/apiUserEnv";

const actionUserEnv = {
  postUserEnv: (data) => apiUserEnv.post(data).then((response) => response),
  // getUser: (data) => apiUser.get(data).then((response) => response),
  // getUserMint: (data) => apiUser.getMint(data).then((response) => response),
  // addUser: (data) => apiUser.add(data).then((response) => response),
  // updateUser: (data) => apiUser.update(data).then((response) => response),
  // deleteUser: (data) => apiUser.delete(data).then((response) => response),
}

export default actionUserEnv;