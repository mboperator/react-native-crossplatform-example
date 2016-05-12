import user from './user';

export default function* root() {
  yield [
    user(),
  ];
}
