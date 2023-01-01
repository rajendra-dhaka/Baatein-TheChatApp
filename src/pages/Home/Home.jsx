import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {ChatWindow, Sidebar} from '../../components/index'
import './Home.scss';

const Home = () => {
  return (
    <IonPage className='home ion-justify-content-center ion-align-items-center'>
      <IonContent>
        <IonGrid className='ion-no-margin ion-no-padding'>
          <IonRow>
            <IonCol size='4'>
              <Sidebar />
            </IonCol>
            <IonCol size='8'>
              <ChatWindow />
            </IonCol>
          </IonRow>
        </IonGrid>          
      </IonContent>
    </IonPage>
  );
};

export default Home;
