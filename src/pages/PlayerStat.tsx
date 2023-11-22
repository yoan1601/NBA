import { useState } from 'react';
import { Player, getPlayer } from '../data/players';
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import useFetch from '../fetch/useFetch';

function ViewMessage() {
  // const [player, setPlayer] = useState<Player>();
  const params = useParams<{ id: string }>();

  // useIonViewWillEnter(() => {
  //   const p = getPlayer(parseInt(params.id, 10));
  //   setPlayer(p);
  // });

  const { data, loading, error, refetch } = useFetch('http://localhost:8001/players');
  const allplayers: Player[] = data || [];
  const player = allplayers.find(player => player.idequipe === parseInt(params.id, 10)); 

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Player statistics" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {player ? (
          <>
            <IonItem>
              <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {player.prenom} {player.nom}
                </h2>
                <h3>
                  Numero: <IonNote>{player.numero}</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>Statistics</h1>
              <IonGrid>
              <IonRow>
                <IonCol>M</IonCol>
                <IonCol>{player.M}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>MJ</IonCol>
                <IonCol>{player.MJ}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>PPM</IonCol>
                <IonCol>{player.PPM}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>RPM</IonCol>
                <IonCol>{player.RPM}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>PDPM</IonCol>
                <IonCol>{player.PDPM}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>MPM</IonCol>
                <IonCol>{player.MPM}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>EFF</IonCol>
                <IonCol>{player.EFF}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>FG</IonCol>
                <IonCol>{player.FG}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>troisP</IonCol>
                <IonCol>{player.troisP}</IonCol>
              </IonRow>
              </IonGrid>
              <IonGrid>
              <IonRow>
                <IonCol>LF</IonCol>
                <IonCol>{player.LF}</IonCol>
              </IonRow>
              </IonGrid>
            </div>
          </>
        ) : (
          <div>Player not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
