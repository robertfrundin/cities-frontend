const { UserGeneratorServiceClient } = require("./user_generator_grpc_web_pb");
const { GenerateUserRequest } = require("./user_generator_pb");

let client = new UserGeneratorServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);

function getUserData() {
  document.cookie = "userName=;authToken=;";
  const request = new GenerateUserRequest();
  client.generateUser(request, {}, (err, res) => {
    if (res == null) {
      console.log(err);
      console.log(null);
    } else {
      console.log(res);
      switch (res.getAuthTokenCheckerCase()) {
        case 0: {
          console.log("no auth token");
          break;
        }
        case 1: {
          const authToken = res.getAuthToken();
          document.cookie += `authToken:${authToken};`;

          this.authToken = res.getAuthToken();
        }
      }

      switch (res.getUserNameCheckerCase()) {
        case 0: {
          console.log("no auth token");
          break;
        }
        case 2: {
          const userName = res.getUserName();
          document.cookie += `userName:${userName};`;
          console.log(document.cookie);
          this.userName = res.getUserName();
        }
      }
    }
  });
}

export default getUserData;
