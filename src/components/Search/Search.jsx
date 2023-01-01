import { IonSearchbar } from "@ionic/react";
import React from "react";
import './Search.scss'

export const Search = () => {
  return (
    <div>
      <IonSearchbar className='ion-no-padding ion-no-margin custom'></IonSearchbar>
    </div>
  );
};
