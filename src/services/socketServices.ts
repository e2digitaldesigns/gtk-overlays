import io from "socket.io-client";
const socket = io(process.env.REACT_APP_PUSH_SERVICE || "");

const socketServices = {
  subscribeApplicationActions(cb: any) {
    socket.on("gtkApplicationAction", (data: any) => cb(null, data));
  },

  unSubscribeApplicationActions() {
    socket.removeAllListeners("gtkApplicationAction");
  },

  subscribeOverlayActions(cb: any) {
    socket.on("gtkOverlayAction", (data: any) => cb(null, data));
  },

  unSubscribeOverlayActions() {
    socket.removeAllListeners("gtkOverlayAction");
  },

  sendOverlayActions(data: any) {
    socket.emit("gtkOverlayAction", data);
  },

  subscribeHostVoting(cb: any) {
    socket.on("gtkVoting", (data: any) => cb(null, data));
  },

  unSubscribeHostVoting() {
    socket.removeAllListeners("gtkVoting");
  },

  subscribeChatDisplay(cb: any) {
    socket.on("gtkChatDisplay", (data: any) => cb(null, data));
  },

  unSubscribeChatDisplay() {
    socket.removeAllListeners("gtkChatDisplay");
  },

  subscribeOverlaysEmojis(cb: any) {
    socket.on("gtkOverlayEmojis", (data: any) => cb(null, data));
  },

  unSubscribeOverlaysEmojis() {
    socket.removeAllListeners("gtkOverlayEmojis");
  },

  subscribeOverlaysChatRanks(cb: any) {
    socket.on("gtkOverlayChatRanks", (data: any) => cb(null, data));
  },

  unSubscribeOverlaysChatRanks() {
    socket.removeAllListeners("gtkOverlayChatRanks");
  },

  subscribeOverlaysVideoPlayer(cb: any) {
    socket.on("gtkOverlayVideoPlayer", (data: any) => cb(null, data));
  },

  unSubscribeOverlaysVideoPlayer() {
    socket.removeAllListeners("gtkOverlayVideoPlayer");
  }
};

export default socketServices;
