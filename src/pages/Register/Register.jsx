import { IonAvatar, IonButton, IonCard, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonText } from '@ionic/react';
import React, { useState } from 'react';
import './Register.scss';
import { imageOutline } from 'ionicons/icons';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[2].value;
    const password = e.target[4].value;
    const file = e.target[6].files[0];

    try {
      // User Creation/Registration with Firebase
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response, 'this is a response');

      //Storing image file in firebase
      const fileName = new Date() + name;

      const storageRef = ref(storage, `profile-images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        // 'state_changed',
        // (snapshot) => {
        //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log('Upload is ' + progress + '% done');
        //   switch (snapshot.state) {
        //     case 'paused':
        //       console.log('Upload is paused');
        //       break;
        //     case 'running':
        //       console.log('Upload is running');
        //       break;
        //     default:
        //       break;
        //   }
        // },
        (error) => {
          window.alert(error);
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Updating response after email registration with the image link and username
            await updateProfile(response.user, {
              displayName: name,
              photoURL: downloadURL,
            });

            // Storing registered user data in Firestore Database
            await setDoc(doc(db, 'users', response.user.uid), {
              id: response.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });
// Storing all userChats corresponding to a particular user
            await setDoc(doc(db, 'userChats', response.user.uid), {});
          });
        }
      );
    } catch (err) {
      window.alert(err);
      setError(err);
    }
  };

  return (
    <IonPage className='ion-justify-content-center ion-align-items-center register-page-container'>
      <IonCard className='formWrapper ion-align-items-center ion-justify-content-center'>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src='./assets/images/talkinggif.gif' />
        </IonAvatar>
        <span className='logo'>Baatein</span>
        <span className='title'>Register</span>
        <form action='' className='' onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position='floating'>Enter Your Name</IonLabel>
            <IonInput type='text' clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Enter Your Email</IonLabel>
            <IonInput type='email' clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Enter Password</IonLabel>
            <IonInput type='password' clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <label htmlFor='file'>
              <IonIcon icon={imageOutline}></IonIcon>
              <span>Add an Avatar</span>
            </label>
            <input style={{ display: 'none' }} type='file' id='file' />
          </IonItem>

          <IonButton type='submit'>Sign Up</IonButton>
        </form>
        <IonText>You do have an account? Login</IonText>
      </IonCard>
    </IonPage>
  );
};

export default Register;
