import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './ChatWindow.scss';
import { Messages, Input } from '../index';
import { ellipsisHorizontalOutline, personAddOutline, videocamOutline } from 'ionicons/icons';

export const ChatWindow = () => {
  return (
    <div className='chat-window'>
      <IonHeader>
        <IonToolbar className='chat-section-header'>
          <IonGrid className='ion-no-padding ion-no-margin'>
            <IonRow>
              <IonCol size='4'>Akshay Kumar</IonCol>
              <IonCol size='8' className='cta ion-align-items-center ion-padding-horizontal'>
                <IonIcon icon={videocamOutline}></IonIcon>
                <IonIcon icon={personAddOutline}></IonIcon>
                <IonIcon icon={ellipsisHorizontalOutline}></IonIcon>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent className='chat-section'>
        <Messages />
      </IonContent>
      <Input />
    </div>
  );
};
