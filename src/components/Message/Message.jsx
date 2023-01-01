import { IonAvatar } from "@ionic/react";
import React from "react";
import './Message.scss';

export const Message = () => {
  return (
    <div className='message ion-margin owner'>
      <div className='message-info'>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src='https://ionicframework.com/docs/img/demos/avatar.svg' />
        </IonAvatar>
        <span>just now</span>
      </div>
      <div className='message-content'>
        <p>Hello</p>
        <img src='https://ionicframework.com/docs/img/demos/avatar.svg' alt='' />
      </div>
    </div>
  );
};
