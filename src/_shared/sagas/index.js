import users from './users';

export default function* root() {
  yield [
    users(),
  ];
}
