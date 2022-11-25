import Cookies from "js-cookie";
const { UserGeneratorServiceClient } = require("./user_generator_grpc_web_pb");
const { GenerateUserRequest } = require("./user_generator_pb");

let client = new UserGeneratorServiceClient(
  "http://0.0.0.0:9090",
  null,
  null
);

async function getUserData() {
  const getDataFromServer = new Promise((resolve, reject) => {
    const token = Cookies.get("authToken");
    if (token != undefined) {
      resolve(token);
    } else {
      const request = new GenerateUserRequest();
      client.generateUser(request, {}, (err, res) => {
        if (res == null) {
          console.log(err);
        } else {
          console.log(res);
          switch (res.getAuthTokenCheckerCase()) {
            case 0: {
              console.log("no auth token");
              reject();
              break;
            }
            case 1: {
              const authToken = res.getAuthToken();
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
    }
  });
  const data = await getDataFromServer;
  console.log(data);
  return data;
}

export default getUserData;
