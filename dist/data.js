"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNearestAnnouncement = addNearestAnnouncement;
exports.dataHouse = void 0;
var _utils = require("./utils.js");
var _constants = require("./constants.js");
function addNearestAnnouncement() {
  var locationAdress = {
    x: (0, _utils.getRandomIFractionalNumber)(35.65000, 35.70000),
    y: (0, _utils.getRandomIFractionalNumber)(139.70000, 139.80000)
  };
  return {
    author: {
      avatar: "img/avatars/user0".concat((0, _utils.getRandomIntegerNumber)(1, 8), ".png")
    },
    offer: {
      title: _constants.announcementInfo.titleArray[(0, _utils.getRandomIntegerNumber)(0, _constants.announcementInfo.titleArray.length - 1)],
      adress: "".concat(locationAdress.x, ", ").concat(locationAdress.y),
      price: (0, _utils.getRandomIntegerNumber)(_constants.ANNOUNCMENT_VALUES.minPrice, _constants.ANNOUNCMENT_VALUES.maxPrice),
      type: _constants.announcementInfo.typeArray[(0, _utils.getRandomIntegerNumber)(0, _constants.announcementInfo.typeArray.length)],
      rooms: (0, _utils.getRandomIntegerNumber)(_constants.ANNOUNCMENT_VALUES.minRoomsCount, _constants.ANNOUNCMENT_VALUES.maxRoomsCount),
      guests: (0, _utils.getRandomIntegerNumber)(_constants.ANNOUNCMENT_VALUES.minGuestsCount, _constants.ANNOUNCMENT_VALUES.maxGuestsCount),
      checkin: _constants.announcementInfo.checkinArray[(0, _utils.getRandomIntegerNumber)(0, _constants.announcementInfo.checkinArray.length - 1)],
      checkout: _constants.announcementInfo.checkoutArray[(0, _utils.getRandomIntegerNumber)(0, _constants.announcementInfo.checkoutArray.length - 1)],
      features: (0, _utils.shuffle)(_constants.announcementInfo.featuresArray).slice(0, (0, _utils.getRandomIntegerNumber)(1, _constants.announcementInfo.featuresArray.length)),
      description: _constants.announcementInfo.descriptionArray[(0, _utils.getRandomIntegerNumber)(1, _constants.announcementInfo.descriptionArray.length - 1)],
      photos: (0, _utils.shuffle)(_constants.announcementInfo.photosArray).slice(0, (0, _utils.getRandomIntegerNumber)(1, _constants.announcementInfo.photosArray.length + 1))
    },
    location: {
      x: locationAdress.x,
      y: locationAdress.y
    }
  };
}
var dataHouse = new Array(_constants.announcementCount).fill(null).map(function () {
  return addNearestAnnouncement();
});
exports.dataHouse = dataHouse;