import Cookies from "js-cookie";
const { UserGeneratorServiceClient } = require("./user_generator_grpc_web_pb");
const { GenerateUserRequest } = require("./user_generator_pb");

let client = new UserGeneratorServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);

function getUserData() {
  const request = new GenerateUserRequest();
  client.generateUser(request, {}, (err, res) => {
    if (res == null) {
      console.log(err);
    } else {
      console.log(res);
      switch (res.getAuthTokenCheckerCase()) {
        case 0: {
          console.log("no auth token");
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
          break;
        }
        case 2: {
          const userName = res.getUserName();
          Cookies.set("userName", userName);
          console.log(document.cookie);
        }
      }
    }
  });
}

export default getUserData;
