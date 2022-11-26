import Cookies from "js-cookie";
import { envoyIp } from "../../common/config";
const { UpdateCityRequest } = require("./city_updater_pb");

const { CityUpdaterServiceClient } = require("./city_updater_grpc_web_pb");

const uploadCity = (city, roomId, round) => {
  let client = new CityUpdaterServiceClient(envoyIp, null, null);
  const request = new UpdateCityRequest();
  request.setCityName(city.toLowerCase());
  request.setRoomId(roomId);
  request.setTokenRound(round);
  request.setAuthToken(Cookies.get("authToken"));
  console.log(request);

  client.updateCity(request, {}, (err, res) => {
    if (res == null) {
      console.log(err);
    } else {
      console.log(res.getStatusCheckerCase() + " word update status");
    }
  });
};
export default uploadCity;
