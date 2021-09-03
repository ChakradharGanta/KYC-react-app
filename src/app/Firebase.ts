import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth as auth } from 'app/utils/getFirebase';

export const createUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password).then((mdg) => console.log(mdg));
};
