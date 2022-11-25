import Cookies from "js-cookie";
const { RoomListProviderService } = require("./room_list_provider_grpc_web_pb");
const { GetRoomListRequest } = require("./room_list_provider_pb");
const {
  RoomListProviderServiceClient,
} = require("./room_list_provider_grpc_web_pb");
let client = new RoomListProviderServiceClient(
  "http://0.0.0.0:9090",
  null,
  null
);

async function getRoomList() {
  const request = new GetRoomListRequest();
  const token = Cookies.get("authToken");
  request.setAuthToken(token);
  const getListFromServer = new Promise(async (resolve, reject) =>
    client.getRoomList(request, {}, function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const listFromServer = res.getRoomsList();
        const mappedList = listFromServer.map((x) => {
          return {
            id: x.getRoomId(),
            limit: x.getSlotsLimit(),
            taken: x.getTakenSlots(),
          };
        });
        resolve(mappedList);
      }
    })
  );
  const dataFromServer = await getListFromServer;
  return dataFromServer;
}

export default getRoomList;
