import TeamListItem from '../components/TeamListItem';
import { useState } from 'react';
import { Team, getTeams } from '../data/teams';
import useFetch from "../fetch/useFetch";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  // const [teams, setTeams] = useState<Team[]>([]);
  // // setTeams(data);

  // useIonViewWillEnter(() => {
  //   const ts = getTeams();
  //   setTeams(ts);
  // });

  const { data, loading, error, refetch } = useFetch('http://localhost:8000/teams');
  const teams: Team[] = data || [];

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>NBA stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              NBA stats
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {teams.map(t => <TeamListItem key={t.idequipe} team={t} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
