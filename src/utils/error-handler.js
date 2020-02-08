import { Message } from 'element-ui';

import { getErrorAlias } from '../config/error-alias';

const logMethods = {
  info: console.info,
  error: console.error,
  warning: console.warn,
  success: console.log
};

/**
 * 信息提示
 * @param {*} message
 * @param {String} [type] info/error/warning/success
 * @param {Boolean} [showBox]
 */
export function messageBox(message, type = 'info', showBox = false) {
  // 打印出完整错误信息
  logMethods[type] && logMethods[type](`[${type}]:`, message);

  if (showBox) {
    // 格式化进行展示
    message = formatterMessage(message);

    // 显示错误信息
    Message({
      message,
      type,
      duration: 6000,
      showClose: true
    });
  }
}

// 提示信息
export const infoMessage = messageBox;

// 成功信息
export function successMessage(message, showBox) {
  messageBox(message, 'success', showBox);
}

// 错误信息
export function errorMessage(message, showBox) {
  messageBox(message, 'error', showBox);
}

// 警告信息
export function warnMessage(message, showBox) {
  messageBox(message, 'warning', showBox);
}

/**
 * 格式化错误信息（限制 80 字）
 * @param {*} msg
 * @return {string}
 */
function formatterMessage(msg) {
  if (msg) {
    if (msg.error) {
      msg = msg.error;
    }
    if (msg.message) {
      msg = msg.message;
    }
  }
  if (msg instanceof Object && !(msg instanceof Error)) {
    msg = JSON.stringify(msg);
  } else {
    msg = String(msg);
  }
  msg = getErrorAlias(msg) || msg;
  msg = msg.length > 80 ? msg.slice(0, 80) + '...' : msg;

  return msg;
}
