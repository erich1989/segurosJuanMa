import { apiNft } from "./../apis/nft";

const actionNft = {
    getNft: (data) => apiNft.get(data).then((response) => response),
    // addUser: (data) => apiUser.add(data).then((response) => response),
    // updateUser: (data) => apiUser.update(data).then((response) => response),
    // deleteUser: (data) => apiUser.delete(data).then((response) => response),
}

export default actionNft;