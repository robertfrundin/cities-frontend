import Cookies from "js-cookie";
import getUserData from "../token-service/service";
const { GetGameInfoRequest } = require("./game_info_provider_pb");
const {
  GameInfoProviderServiceClient,
} = require("./game_info_provider_grpc_web_pb");
let client = new GameInfoProviderServiceClient(
  "http://0.0.0.0:8080",
  null,
  null
);
function connectToGameStream(gameId) {
  let token = Cookies.get("authToken");

  let request = new GetGameInfoRequest();
  request.setAuthToken(token);

  request.setRoomId(gameId);
  let stream = client.getGameInfo(request, {});

  return stream;
}
export default connectToGameStream;
