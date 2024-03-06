import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((_val) => {
      const { _body } = _val[0];
      const { _firstName } = _val[1];
      const { _lastName } = _val[1];
      console.log(`${_body} ${_firstName} ${_lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
