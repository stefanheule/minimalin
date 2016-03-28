Pebble.addEventListener('showConfiguration', function() {
  var toQueryString = function(obj){
    var parts = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i) && obj[i] !== null) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
      }
    }
    return parts.join('&');
  };

  var getSavedColor = function(attr){
    var color = localStorage.getItem(attr + '_color');
    return color ? '#' + color.toString(16) : null;
  };
  var getSavedBool = function(attr){
    var savedValue = localStorage.getItem(attr + '_bool');
    if(savedValue){
      return savedValue.toLowerCase();
    }
    return null;
  };
  var getSavedInt = function(attr){
    return localStorage.getItem(attr + '_int');
  };
  var getSaved = function(attr){
    return localStorage.getItem(attr);
  }

  var url = 'https://cdn.rawgit.com/groyoh/minimalin/e05c510bbda7a15b0ddee7ab0807e7d7e57ab514/config/index.html?';
  var params = {
    minute_hand_color: getSavedColor('MinuteHand'),
    hour_hand_color: getSavedColor('HourHand'),
    date_displayed: getSavedBool('DateDisplayed'),
    bluetooth_icon: getSavedInt('BluetoothIcon'),
    rainbow_mode: getSavedBool('RainbowMode'),
    background_color: getSavedColor('Background'),
    date_color: getSavedColor('Date'),
    time_color: getSavedColor('Time'),
    info_color: getSavedColor('Info'),
    location: getSaved('Location'),
    platform: Pebble.getActiveWatchInfo().platform
  };
  url += toQueryString(params);
  console.log('Showing configuration page: ' + url);
  Pebble.openURL(url);
});

Pebble.addEventListener('webviewclosed', function(e) {
  var saveColor = function(dict, attr, color){
    color = color.replace('#', '').replace('0x','');
    localStorage.setItem(attr + '_color', color);
    dict['AppKey' + attr + 'Color'] = parseInt(color, 16);
  };
  var saveBool = function(dict, attr, bool){
    localStorage.setItem(attr + '_bool', bool);
    dict['AppKey' + attr] = bool;
  };
  var saveInt = function(dict, attr, int){
    localStorage.setItem(attr + '_int', int);
    dict['AppKey' + attr] = int;
  };
  var configData = JSON.parse(decodeURIComponent(e.response));
  console.log('Configuration page returned: ' + JSON.stringify(configData));
  var dict = {};
  saveColor(dict, 'MinuteHand', configData.minute_hand_color);
  saveColor(dict, 'HourHand', configData.hour_hand_color);
  saveColor(dict, 'Background', configData.background_color);
  saveColor(dict, 'Date', configData.date_color);
  saveColor(dict, 'Time', configData.time_color);
  saveColor(dict, 'Info', configData.info_color);
  saveBool(dict, 'DateDisplayed', configData.date_displayed);
  saveInt(dict, 'BluetoothIcon', configData.bluetooth_icon);
  saveBool(dict, 'RainbowMode', configData.rainbow_mode);
  localStorage.setItem("Location", configData.location);
  Pebble.sendAppMessage(dict, function() {
    console.log('Send successful: ' + JSON.stringify(dict));
  }, function() {
    console.log('Send failed!');
  });
});
