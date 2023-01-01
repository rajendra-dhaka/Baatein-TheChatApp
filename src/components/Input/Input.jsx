import { IonIcon, IonInput, IonItem } from "@ionic/react";
import React from "react";
import './Input.scss';
import {imageOutline, sendOutline} from 'ionicons/icons';

export const Input = () => {
  return (
    <div className='input'>
      <IonItem>
        <IonInput placeholder='Enter Your Message here'></IonInput>
      </IonItem>
      <div className="cta">
        <input type="file" name="" id="addimage" style={{display:'none'}} />
        <label htmlFor="addimage">
        <IonIcon icon={imageOutline}></IonIcon>
        </label>
        <IonIcon icon={sendOutline}></IonIcon>
      </div>
    </div>
  );
};
