import { uploadPhoto, createUser } from './utils.js'; 

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((data) => {
      const body = data.body;
      return createUser().then((user) => {
        const firstName = user.firstName;
        const lastName = user.lastName;
        console.log(`${body} ${firstName} ${lastName}`);
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
