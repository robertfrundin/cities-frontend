import Cookies from "js-cookie";
const { RandomJoinerService } = require("./random_joiner_grpc_web_pb");
const { JoinRandomRoomRequest } = require("./random_joiner_pb");
const {
  RandomRoomJoinerServiceClient,
} = require("./random_joiner_grpc_web_pb");
let client = new RandomRoomJoinerServiceClient(
  "http://0.0.0.0:9090",
  null,
  null
);

async function getRandomRoom() {
  const request = new JoinRandomRoomRequest();
  const token = Cookies.get("authToken");
  let roomId;
  request.setAuthToken(token);
  const getIdFromServer = new Promise(async (resolve, reject) =>
    client.joinRandomRoom(request, {}, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        switch (res.getRoomIdCheckerCase()) {
          case 0:
            console.log("failed to join random room");
            reject();
            break;
          case 1:
            const id = res.getRoomId();
            resolve(id);
        }
      }
    })
  ).then((x) => (roomId = x));
  const myId = await getIdFromServer;
  console.log(myId);
  return myId;
}

export default getRandomRoom;
