import Cookies from "js-cookie";
import { envoyIp } from "../../common/config";
const { UpdateCityRequest } = require("./city_updater_pb");

const { CityUpdaterServiceClient } = require("./city_updater_grpc_web_pb");

const uploadCity = async (city, roomId, round) => {
  let client = new CityUpdaterServiceClient(envoyIp, null, null);
  const request = new UpdateCityRequest();
  request.setCityName(city.toLowerCase());
  request.setRoomId(roomId);
  request.setTokenRound(round);
  request.setAuthToken(Cookies.get("authToken"));
  console.log(request);
  const sendToServer = new Promise((resolve, reject) => {
    client.updateCity(request, {}, (err, res) => {
      if (res == null) {
        console.log(err);
        reject(err);
      } else {
        const statusFromServer = res.getStatusCheckerCase();
        console.log(statusFromServer + " word update status");
        resolve(statusFromServer);
      }
    });
  });
  const serverResult = await sendToServer;
  return sendToServer;
};
export default uploadCity;
