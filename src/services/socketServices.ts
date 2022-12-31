import io from "socket.io-client";
const socket = io(process.env.REACT_APP_PUSH_SERVICE || "");

const socketServices = {
  subscribeOverlayActions(cb: any) {
    socket.on("mgOverlayActions", (data: any) => cb(null, data));
  },

  unSubscribeOverlayActions() {
    socket.removeAllListeners("mgOverlayActions");
  },

  sendOverlayActions(data: any) {
    socket.emit("mgOverlayActions", data);
  },

  subscribeHostVoting(cb: any) {
    socket.on("mgVoting", (data: any) => cb(null, data));
  },

  unSubscribeHostVoting() {
    socket.removeAllListeners("mgVoting");
  },

  sendVotingData(data: any) {
    socket.emit("mgVoting", data);
  }
};

export default socketServices;
