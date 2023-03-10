import { IonAvatar, IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import React from "react";
import './Chats.scss'

export const Chats = () => {
  return (
    <IonItem className=" ion-no-padding single-chat">
      <IonGrid>
        <IonRow className='ion-align-items-center'>
          <IonCol size='3'>
            <IonAvatar>
              <img alt="Silhouette of a person's head" src='https://ionicframework.com/docs/img/demos/avatar.svg' />
            </IonAvatar>
          </IonCol>
          <IonCol size='9'>
            <span>Jane</span>
            <p>Helloi Hi!!!</p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

