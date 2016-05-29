const getAdapter = () => {
  let env = {};
  if (!process.env.WEB) {
    env = 'mobile';
  } else {
    env = 'web';
  }
  return env;
};

const platformSpecific = imported => imported[getAdapter()];

export default platformSpecific;
