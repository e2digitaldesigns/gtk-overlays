import { fn } from "@storybook/test";

interface MockSocket {
  on: (event: string, callback: Listener) => MockSocket;
  off: (event: string) => MockSocket;
  removeAllListeners: () => MockSocket;
  emit: (event: string, ...args: any[]) => MockSocket;
  connect: () => MockSocket;
  disconnect: () => MockSocket;
  triggerEvent: (event: string, ...args: any[]) => void;
}

type Listener = (...args: any[]) => void;

const eventListeners: { [event: string]: Listener[] } = {};

const mockSocket: MockSocket = {
  on: fn((event: string, callback: Listener) => {
    console.log(`socket.on called with event: ${event}`);
    if (!eventListeners[event]) {
      eventListeners[event] = [];
    }
    eventListeners[event].push(callback);
    return mockSocket;
  }),

  off: fn((event: string) => {
    console.log(`socket.off called with event: ${event}`);
    delete eventListeners[event];
    return mockSocket;
  }),

  removeAllListeners: fn(() => {
    console.log("socket.removeAllListeners called");
    Object.keys(eventListeners).forEach(event => delete eventListeners[event]);
    return mockSocket;
  }),

  emit: fn((event: string, ...args: any[]) => {
    console.log(`socket.emit called with event: ${event} and args:`, args);
    if (eventListeners[event]) {
      eventListeners[event].forEach(callback => callback(...args));
    }
    return mockSocket;
  }),

  connect: fn(() => {
    console.log("socket.connect called");
    return mockSocket;
  }),

  disconnect: fn(() => {
    console.log("socket.disconnect called");
    return mockSocket;
  }),

  triggerEvent: (event: string, ...args: any[]) => {
    console.log(
      `socket.triggerEvent called with event: ${event} and args:`,
      args
    );
    if (eventListeners[event]) {
      eventListeners[event].forEach(callback => callback(...args));
    }
  }
};

export default fn(() => mockSocket);
