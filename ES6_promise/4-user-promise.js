export default function signUpUser(firstName, lastName) {
  const returnPromise = new Promise(
    (resolve) => {
      resolve({ firstName, lastName });
    },
  );
  return returnPromise;
}
