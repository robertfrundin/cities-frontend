import Cookies from "js-cookie";
const { CityUpdaterServiceClient } = require("./city_updater_grpc_web_pb");

const { UpdateCityRequest } = require("./city_updater_pb");
let client = new CityUpdaterServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);

function uploadCity(city, roomId, round, setCity) {
  const request = new UpdateCityRequest();
  request.setCityName(city);
  request.setRoomId(roomId);
  request.setTokenRound(round);
  request.setAuthToken(Cookies.get("authToken"));
  client.updateCity(request, {}, (err, res) => {
    console.log(res);
    console.log(err);
  });
}
export default uploadCity;
uploadCity();
