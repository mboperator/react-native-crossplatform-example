import location from './location';

export default function* root() {
  yield [
    location(),
  ];
}
