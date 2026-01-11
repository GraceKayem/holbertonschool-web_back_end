import { uploadPhoto, createUser } from './utils.js'; 

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  return uploadPhoto()
    .then((data) => {
      body = data.body;
      return createUser();
    })
    .then((user) => {
      firstName = user.firstName;
      lastName = user.lastName;
      console.log(`${body}, ${firstName}, ${lastName}`);
      return { body, firstName, lastName };
    })
    .catch(() => {
      throw new Error('Signup system offline');
    });
}
