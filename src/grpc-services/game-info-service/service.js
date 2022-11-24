import Cookies from "js-cookie";

const { GetGameInfoRequest } = require("./game_info_provider_pb");
const { getGameInfo } = require("./game_info_provider_pb");
const {
  GameInfoProviderServiceClient,
} = require("./game_info_provider_grpc_web_pb");
let client = new GameInfoProviderServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);
function connectToGameStream(gameId, setPlayers, setCity, setRound) {
  let request = new GetGameInfoRequest();
  let token = Cookies.get("authToken");
  request.setAuthToken(token);
  request.setRoomId(gameId);
  let stream = client.getGameInfo(request, {});

  return stream;
}
export default connectToGameStream;
