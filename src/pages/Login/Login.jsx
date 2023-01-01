import { IonAvatar, IonButton, IonCard, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonText } from '@ionic/react';
import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <IonPage className='login-page-container ion-justify-content-center ion-align-items-center'>
      <IonCard className='formWrapper ion-align-items-center ion-justify-content-center'>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src='./assets/images/talkinggif.gif' />
        </IonAvatar>
        <span className='logo'>Baatein</span>
        <span className='title'>Login</span>
        <form action='' className=''>
          <IonItem>
            <IonLabel position='floating'>Enter Your Email</IonLabel>
            <IonInput type='email' clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Enter Password</IonLabel>
            <IonInput type='password' clearInput={true}></IonInput>
          </IonItem>
          <IonButton type='submit'>Sign In</IonButton>
        </form>
        <IonText>You don't have an account? Register</IonText>
      </IonCard>
    </IonPage>
  );
};

export default Login;
