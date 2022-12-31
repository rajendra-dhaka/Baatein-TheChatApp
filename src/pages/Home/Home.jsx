import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {ChatWindow, Sidebar} from '../../components/index'
import './Home.scss';

const Home = () => {
  return (
    <IonPage className='home ion-justify-content-center ion-align-items-center'>
      <IonCard className='container'>
        <Sidebar />
        <ChatWindow />
      </IonCard>
    </IonPage>
  );
};

export default Home;
