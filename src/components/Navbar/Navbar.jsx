import { IonAvatar, IonButton, IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from "@ionic/react";
import React from "react";
import './Navbar.scss'

export const Navbar = () => {
  return (
    <IonHeader>
      <IonToolbar color='secondary'>
        <IonGrid className='ion-no-padding'>
          <IonRow className='ion-align-items-center'>
            <IonCol size='6'>Baatein</IonCol>
            <IonCol size='6'>
              <IonRow className='ion-align-items-center'>
                <IonCol size='3'>
                  <IonAvatar>
                    <img
                      alt="Silhouette of a person's head"
                      src='https://ionicframework.com/docs/img/demos/avatar.svg'
                      className='ion-margin-vertical'
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol size='3'>John</IonCol>
                <IonCol size='6'>
                  <IonButton>Logout</IonButton>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};
