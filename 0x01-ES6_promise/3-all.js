import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((_val) => {
      const { body } = _val[0];
      const { firstName } = _val[1];
      const { lastName } = _val[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
