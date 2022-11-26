import Cookies from "js-cookie";
import { envoyIp } from "../../common/config";
const { GetNameRequest } = require("./user_name_provider_pb");
const {
  UserNameProviderServiceClient,
} = require("./user_name_provider_grpc_web_pb");

let client = new UserNameProviderServiceClient(envoyIp, null, null);

async function getNickName() {
  const getDataFromServer = new Promise((resolve, reject) => {
    const token = Cookies.get("authToken");

    const request = new GetNameRequest();
    request.setAuthToken(token);
    client.getName(request, {}, (err, res) => {
      if (res == null) {
        console.log(err);
        reject(err);
      } else {
        const nick = res.getUserName();
        console.log(nick);
        resolve(nick);
      }
    });
  });
  const data = await getDataFromServer;

  return data;
}
export default getNickName;
