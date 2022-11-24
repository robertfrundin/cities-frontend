import Cookies from "js-cookie";
import { UpdateCityRequest } from "./city_updater_pb";
import { CityUpdaterServiceClient } from "./city_updater_grpc_web_pb";
const client = new CityUpdaterServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);
export const uploadCity = (city, roomId, round) => {
  const request = new UpdateCityRequest();
  request.setCityName(city);
  request.setRoomId(roomId);
  request.setTokenRound(round);
  request.setAuthToken(Cookies.get("authToken"));
  console.log(request);
  client.updateCity(request, {}, (err, res) => {
    console.log("inside callback");
    console.log(res);
    console.log(err);
  });
};
uploadCity();
