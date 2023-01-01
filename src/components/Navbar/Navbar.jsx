import { IonAvatar, IonButton, IonCol, IonGrid, IonHeader, IonRow, IonText, IonToolbar } from '@ionic/react';
import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <IonHeader>
      <IonToolbar className='chat-list-header'>
        <IonGrid className='ion-no-padding'>
          <IonRow>
            <IonCol size='4' className='ion-justify-content-center ion-align-items-start brand-logo'>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src='./assets/images/talkinggif.gif' />
              </IonAvatar>
              <IonText>Baatein</IonText>
            </IonCol>
            <IonCol size='8' className='user-info ion-align-items-center ion-padding-horizontal'>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src='https://ionicframework.com/docs/img/demos/avatar.svg' />
              </IonAvatar>
              John
              <IonButton>Logout</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};
