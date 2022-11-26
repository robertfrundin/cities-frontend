import Cookies from "js-cookie";
import { envoyIp } from "../../common/config";
const { UserGeneratorServiceClient } = require("./user_generator_grpc_web_pb");
const { GenerateUserRequest } = require("./user_generator_pb");
let client = new UserGeneratorServiceClient(envoyIp, null, null);

async function getAuthToken() {
  const getDataFromServer = new Promise((resolve, reject) => {
    const request = new GenerateUserRequest();
    client.generateUser(request, {}, (err, res) => {
      if (res == null) {
        console.log(err);
      } else {
        switch (res.getAuthTokenCheckerCase()) {
          case 0: {
            console.log("no auth token");
            reject();
            break;
          }
          default: {
            const authToken = res.getAuthToken();
            console.log(authToken + " token");
            Cookies.set("authToken", authToken);
          }
        }

        switch (res.getUserNameCheckerCase()) {
          case 0: {
            console.log("no auth token");
            reject();
            break;
          }
          case 2: {
            const userName = res.getUserName();
            Cookies.set("userName", userName);
            resolve(userName);
          }
        }
      }
    });
  });
  const data = await getDataFromServer;

  return data;
}

export default getAuthToken;
