import React from 'react-native';
const Platform = React.Platform;
import { AsyncStorage } from 'react-native';

const log = ({ type, args }) => {
  console.log(`STORAGE::${type}`, args);
};

class Storage {
  constructor(params) {
    console.log('Platform', Platform, Platform.OS);
  }

  set(key, payload) {
    log({ type: 'set', args: { key, payload } });
    return AsyncStorage.setItem(key, JSON.stringify(payload));
  }

  get(key) {
    log({ type: 'get', args: { key } });
    return AsyncStorage.getItem(key).then(JSON.parse);
  }
}


export default new Storage();
