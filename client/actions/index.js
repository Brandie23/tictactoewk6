import request from "superagent";

export const showMessage = message => {
  return {
    type: "SHOW_MESSAGE",
    message: message
  };
};
