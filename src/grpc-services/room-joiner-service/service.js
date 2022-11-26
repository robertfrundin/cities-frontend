import Cookies from "js-cookie";
import { envoyIp } from "../../common/config";
const { JoinRoomRequest } = require("./room_joiner_pb");
const { RoomJoinerServiceClient } = require("./room_joiner_grpc_web_pb");

const client = new RoomJoinerServiceClient(envoyIp, null, null);
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
        const status = res.getJoinStatus();
        if (status === 0 || status === 4) {
          resolve(status);
        } else {
          reject(status);
        }
      }
    });
  });
  const status = await tryToJoin;

  return status;
}

export default joinRoomByLink;
