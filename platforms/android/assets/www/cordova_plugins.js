cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.ZendriveCordovaPlugin",
    "file": "plugins/cordova-plugin-device/www/zendrive.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "Zendrive"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.3-dev"
};
// BOTTOM OF METADATA
});