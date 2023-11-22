import { useState } from 'react';
import { Player, getPlayersByIdTeam } from '../data/players';
import { Team, getTeam } from '../data/teams';
import useFetch from "../fetch/useFetch";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import './ViewMessage.css';
import PlayerListItem from '../components/PlayerListItem';

function Players() {
  const [team, setTeam] = useState<Team>();
  // const [players, setPlayers] = useState<Player[]>([]);
  const [title, setTitle] = useState<string>('');

  const params = useParams<{ id: string }>();

  // useIonViewWillEnter(() => {
  //   const pls = getPlayersByIdTeam(parseInt(params.id, 10));
  //   setPlayers(pls);
  // });

  useIonViewWillEnter(() => {
    const ts = getTeam(parseInt(params.id, 10));
    setTeam(ts);
  });

  const { data, loading, error, refetch } = useFetch('http://localhost:8001/players');
  const allplayers: Player[] = data || [];
  const players = allplayers.filter(player => player.idequipe === parseInt(params.id, 10)); 

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={`${title} player list`} defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {players ? (
          <>
            <IonList>
              {players.map(p => <PlayerListItem player={p} />)}
            </IonList>
          </>
        ) : (
          <div>Players not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default Players;
