const getLocation = () => new Promise(resolve => {
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(resolve)
    : resolve('not available');
});
export default getLocation;
