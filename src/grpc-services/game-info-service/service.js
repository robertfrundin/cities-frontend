import Cookies from "js-cookie";
import { envoyIp } from "../../common/config";
import getUserData from "../token-service/service";
const { GetGameInfoRequest } = require("./game_info_provider_pb");
const {
  GameInfoProviderServiceClient,
} = require("./game_info_provider_grpc_web_pb");
let client = new GameInfoProviderServiceClient(envoyIp, null, null);
function connectToGameStream(gameId) {
  let token = Cookies.get("authToken");

  let request = new GetGameInfoRequest();
  request.setAuthToken(token);

  request.setRoomId(gameId);
  let stream = client.getGameInfo(request, {});

  return stream;
}
export default connectToGameStream;
