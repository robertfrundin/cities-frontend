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
  stream.on("data", (response) => {
    const players = [];

    response.getPlayersInfoList().forEach((player) =>
      players.push({
        name: player.getUserName(),
        score: player.getUserScore(),
      })
    );
    setPlayers(players);
    const city = response.getCurrentCity();
    const lastLetter = response.getRequiredLetter();
    const round = response.getRound();
    setRound(round);
    setCity({ value: city, lastLetter });
  });
  stream.on("status", (status) => {
    console.log(status.code + " status code");
  });
  stream.on("end", (end) => {
    console.log("end");
  });
}
export default connectToGameStream;
