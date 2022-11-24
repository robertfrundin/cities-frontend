import Cookies from "js-cookie";
const { RoomListProviderService } = require('./room_list_provider_grpc_web_pb')
const { GetRoomListRequest} = require ('./room_list_provider_pb');
const {
    RoomListProviderServiceClient,
  } = require("./room_list_provider_grpc_web_pb");
  let client = new RoomListProviderServiceClient(
    "http://172.21.132.121:9090",
    null,
    null
  );

  async function getRoomList(){
    const request = new GetRoomListRequest();
    const token = Cookies.get('authToken');
    let roomList;
    request.setAuthToken(token);
    const getListFromServer = new Promise(async (resolve, reject) =>
        client.GetRoomList(request, {}, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            switch (res.RoomInfo()){
                case 0:
                    console.log("failed to load rooms list");
                    reject();
                    break;
                case 1:
                    const list = res.getRoomsList();
                    resolve(list)
            }
        }
    })
    ).then((x) => (roomList = x));
    const myList = await getListFromServer;
    console.log(myList);
    return myList;
  }
  
  export default getRoomList;