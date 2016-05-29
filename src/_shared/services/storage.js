import { AsyncStorage } from 'react-native';
import platformSpecific from '../utils/platformSpecific';

const mobile = {
  setItem(key, payload) {
    return AsyncStorage.setItem(key, JSON.stringify(payload));
  },
  getItem(key) {
    return AsyncStorage.getItem(key).then(JSON.parse);
  },
};

const web = {
  setItem(key, payload) {
    localStorage.setItem(key, JSON.stringify(payload));
    return new Promise(resolve => resolve({ key, payload }));
  },
  getItem(key) {
    const item = localStorage.getItem(key);
    return new Promise(resolve => resolve(JSON.parse(item)));
  },
};

const log = ({ type, args }) => {
  console.log(`STORAGE::${type}`, args);
};

class Storage {
  constructor() {
    this.adapter = platformSpecific({ web, mobile });
  }

  set(key, payload) {
    log({ type: 'set', args: { key, payload } });
    return this.adapter.setItem(key, payload);
  }

  get(key) {
    log({ type: 'get', args: { key } });
    return this.adapter.getItem(key);
  }
}


export default new Storage();
