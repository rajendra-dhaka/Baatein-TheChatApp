import { IonAvatar, IonButton, IonCard, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonText } from "@ionic/react";
import React from "react";
import './Register.scss';
import {imageOutline} from 'ionicons/icons'

const Register = () => {
  return (
    <IonPage className='ion-justify-content-center ion-align-items-center register-page-container'>
      <IonCard className='formWrapper ion-align-items-center ion-justify-content-center'>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src='./assets/images/talkinggif.gif' />
        </IonAvatar>
        <span className='logo'>Baatein</span>
        <span className='title'>Register</span>
        <form action='' className=''>
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
              {' '}
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
