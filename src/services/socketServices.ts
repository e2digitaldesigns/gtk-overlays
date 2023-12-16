import io from "socket.io-client";
import {
  ChatMessgeReturn,
  ChatRanker,
  IEmojiReturn,
  SocketServicesData,
  IVotes
} from "../types";
const socket = io(process.env.REACT_APP_PUSH_SERVICE || "");

const socketServices = {
  subscribeApplicationActions(
    cb: (err: unknown, data: SocketServicesData) => void
  ) {
    socket.on("gtkApplicationAction", (data: SocketServicesData) =>
      cb(null, data)
    );
  },

  unSubscribeApplicationActions() {
    socket.removeAllListeners("gtkApplicationAction");
  },

  subscribeOverlayActions(
    cb: (err: unknown, data: SocketServicesData) => void
  ) {
    socket.on("gtkOverlayAction", (data: SocketServicesData) => cb(null, data));
  },

  unSubscribeOverlayActions() {
    socket.removeAllListeners("gtkOverlayAction");
  },

  subscribeHostVoting(cb: (err: unknown, data: IVotes) => void) {
    socket.on("gtkVoting", (data: IVotes) => cb(null, data));
  },

  unSubscribeHostVoting() {
    socket.removeAllListeners("gtkVoting");
  },

  subscribeChatDisplay(cb: (err: unknown, data: ChatMessgeReturn) => void) {
    socket.on("gtkChatDisplay", (data: ChatMessgeReturn) => cb(null, data));
  },

  unSubscribeChatDisplay() {
    socket.removeAllListeners("gtkChatDisplay");
  },

  subscribeOverlaysEmojis(cb: (err: unknown, data: IEmojiReturn) => void) {
    socket.on("gtkOverlayEmojis", (data: IEmojiReturn) => cb(null, data));
  },

  unSubscribeOverlaysEmojis() {
    socket.removeAllListeners("gtkOverlayEmojis");
  },

  subscribeOverlaysChatRanks(cb: (err: unknown, data: ChatRanker) => void) {
    socket.on("gtkOverlayChatRanks", (data: ChatRanker) => cb(null, data));
  },

  unSubscribeOverlaysChatRanks() {
    socket.removeAllListeners("gtkOverlayChatRanks");
  },

  subscribeOverlaysVideoPlayer(
    cb: (err: unknown, data: SocketServicesData) => void
  ) {
    socket.on("gtkOverlayVideoPlayer", (data: SocketServicesData) =>
      cb(null, data)
    );
  },

  unSubscribeOverlaysVideoPlayer() {
    socket.removeAllListeners("gtkOverlayVideoPlayer");
  }
};

export default socketServices;
