import Cookies from "js-cookie";
const { JoinRoomRequest } = require("./room_joiner_pb");
const { RoomJoinerServiceClient } = require("./room_joiner_grpc_web_pb");

const client = new RoomJoinerServiceClient(
  "http://172.21.132.121:9090",
  null,
  null
);
async function joinRoomByLink(link) {
  const request = new JoinRoomRequest();
  const token = Cookies.get("authToken");
  request.setAuthToken(token);
  request.setRoomId(link);
  const tryToJoin = new Promise((resolve, reject) => {
    client.joinRoom(request, {}, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.getJoinStatus());
      }
    });
  });
  const status = await tryToJoin;

  return status;
}

export default joinRoomByLink;
