import { AsyncStorage } from 'react-native';

const mobile = {
  setItem(key, payload) {
    return AsyncStorage.setItem(key, JSON.stringify(payload));
  },
  getItem(key) {
    return AsyncStorage.getItem(key).then(JSON.parse);
  },
};

const web = {
  setItem(key) {
    console.log('WEB', key);
    return new Promise(resolve => resolve(null));
  },
  getItem(key) {
    console.log('WEB', key);
    return new Promise(resolve => resolve(null));
  },
};

const getAdapter = () => {
  let Adapter = {};
  if (!process.env.WEB) {
    Adapter = mobile;
  }
  else {
    Adapter = web;
  }
  return Adapter;
};

const log = ({ type, args }) => {
  console.log(`STORAGE::${type}`, args);
};

class Storage {
  constructor(params) {
    this.adapter = getAdapter();
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
