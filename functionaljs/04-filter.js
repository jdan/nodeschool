module.exports = function (messages) {
  return messages.map(function (item) {
    return item.message;
  }).filter(function (message) {
    return message.length < 50;
  });
};
