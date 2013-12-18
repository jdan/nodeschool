module.exports = function (words) {
  return words.reduce(function (countMap, word) {
    countMap[word] = (countMap[word] || 0) + 1;
    return countMap;
  }, {});
};
