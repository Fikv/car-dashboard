import {io} from "socket.io-client"

let webSocket:any = undefined

export default function getWebsocket(){

    if(webSocket){
        return webSocket;
    }

    webSocket = io("http://35.185.80.147:4000");
        
    webSocket.on('connect', () => {
          console.log('Connected to server!');
        });
        
    webSocket.on('newLog', (data:any) => {
            console.log('Received data:', data);
    });
        
    webSocket.on('disconnect', () => {
          console.log('Disconnected from server!');
      });

      return webSocket;
}
