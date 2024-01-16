import { textCountHandler } from "../handlers/textCountHandler.js";
import { gotoNearWagle } from "../handlers/nearWagleHandler.js";
import { likePostHandler } from "../handlers/likePostHandler.js";
import { uploadCardHandler, tagSelectHandler, imgSelectHandler } from "../handlers/uploadCardHandler.js";
import { closeDialog } from "../handlers/modalHandler.ts";

const clickHandlerMap = {
  "js-onUpload": uploadCardHandler,
  "js-textCount": textCountHandler,
  "js-onTagSelect": tagSelectHandler,
  "js-onImgSelect": imgSelectHandler,
  "js-nearWagle": gotoNearWagle,
  "js-likePost": likePostHandler,
  "js-onCloseModal": closeDialog,
};

export const onClick = (event) => {
  const { target } = event;
  const executeHandler = clickHandlerMap[target.classList[0]];
  if (executeHandler) {
    executeHandler(target);
  }
};

export const onModalClick = (event) => {
  const { target } = event;

  const executeHandler = clickHandlerMap[target.classList[0]];
  if (executeHandler) {
    executeHandler(target);
  }
};