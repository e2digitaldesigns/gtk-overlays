import io from "socket.io-client";
import {
  ChatMessgeReturn,
  ChatRanker,
  ChatRelayData,
  ChatVoteData,
  IEmojiReturn,
  IVotes,
  SocketServicesData
} from "../types";

const socket = io(process.env.REACT_APP_PUSH_SERVICE || "");

enum SocketServicesEvents {
  GTK_APPLICATION_ACTION = "gtkApplicationAction",
  GTK_CHAT_DISPLAY = "gtkChatDisplay",
  GTK_CHAT_RELAY = "gtkChatRelay",
  GTK_CHAT_VOTE = "gtkChatVote",
  GTK_OVERLAY_ACTION = "gtkOverlayAction",
  GTK_OVERLAY_CHAT_RANKS = "gtkOverlayChatRanks",
  GTK_OVERLAY_EMOJIS = "gtkOverlayEmojis",
  GTK_OVERLAY_VIDEO_PLAYER = "gtkOverlayVideoPlayer",
  GTK_VOTING = "gtkVoting"
}

const socketServices = {
  subscribeApplicationActions(cb: (err: unknown, data: SocketServicesData) => void) {
    socket?.on(SocketServicesEvents.GTK_APPLICATION_ACTION, (data: SocketServicesData) =>
      cb(null, data)
    );
  },

  unSubscribeApplicationActions() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_APPLICATION_ACTION);
  },

  subscribeOverlayActions(cb: (err: unknown, data: SocketServicesData) => void) {
    socket?.on(SocketServicesEvents.GTK_OVERLAY_ACTION, (data: SocketServicesData) =>
      cb(null, data)
    );
  },

  unSubscribeOverlayActions() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_OVERLAY_ACTION);
  },

  subscribeHostVoting(cb: (err: unknown, data: IVotes) => void) {
    socket?.on(SocketServicesEvents.GTK_VOTING, (data: IVotes) => cb(null, data));
  },

  unSubscribeHostVoting() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_VOTING);
  },

  subscribeChatDisplay(cb: (err: unknown, data: ChatMessgeReturn) => void) {
    socket?.on(SocketServicesEvents.GTK_CHAT_DISPLAY, (data: ChatMessgeReturn) => cb(null, data));
  },

  unSubscribeChatDisplay() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_CHAT_DISPLAY);
  },

  subscribeChatVote(cb: (err: unknown, data: ChatVoteData) => void) {
    socket?.on(SocketServicesEvents.GTK_CHAT_VOTE, (data: ChatVoteData) => cb(null, data));
  },

  unSubscribeChatVote() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_CHAT_VOTE);
  },

  subscribeOverlaysEmojis(cb: (err: unknown, data: IEmojiReturn) => void) {
    socket?.on(SocketServicesEvents.GTK_OVERLAY_EMOJIS, (data: IEmojiReturn) => cb(null, data));
  },

  unSubscribeOverlaysEmojis() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_OVERLAY_EMOJIS);
  },

  subscribeOverlaysChatRanks(cb: (err: unknown, data: ChatRanker) => void) {
    socket?.on(SocketServicesEvents.GTK_OVERLAY_CHAT_RANKS, (data: ChatRanker) => cb(null, data));
  },

  unSubscribeOverlaysChatRanks() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_OVERLAY_CHAT_RANKS);
  },

  subscribeOverlaysVideoPlayer(cb: (err: unknown, data: SocketServicesData) => void) {
    socket?.on(SocketServicesEvents.GTK_OVERLAY_VIDEO_PLAYER, (data: SocketServicesData) =>
      cb(null, data)
    );
  },

  unSubscribeOverlaysVideoPlayer() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_OVERLAY_VIDEO_PLAYER);
  },

  subscribeChatRelay(cb: (err: unknown, data: ChatRelayData) => void) {
    socket?.on(SocketServicesEvents.GTK_CHAT_RELAY, (data: ChatRelayData) => cb(null, data));
  },

  unSubscribeChatRelay() {
    socket?.removeAllListeners(SocketServicesEvents.GTK_CHAT_RELAY);
  }
};

export default socketServices;
