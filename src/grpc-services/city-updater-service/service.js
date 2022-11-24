import Cookies from "js-cookie";
const { UpdateCityRequest } = require("./city_updater_pb");

const { CityUpdaterServiceClient } = require("./city_updater_grpc_web_pb");

const uploadCity = (city, roomId, round) => {
  let client = new CityUpdaterServiceClient(
    "http://172.21.132.121:9090",
    null,
    null
  );
  const request = new UpdateCityRequest();
  request.setCityName(city);
  request.setRoomId(roomId);
  request.setTokenRound(round);
  request.setAuthToken(Cookies.get("authToken"));
  console.log("до коллбэка");

  client.updateCity(request, {}, (err, res) => {
    console.log("inside callback");
    console.log(res);
    console.log(err);
  });
};
export default uploadCity;
