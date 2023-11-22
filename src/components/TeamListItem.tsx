import {
    IonItem,
    IonLabel
    } from '@ionic/react';
  import { Team } from '../data/teams';
  import './MessageListItem.css';

  interface TeamListItemProps {
    team: Team;
  }

  const TeamListItem: React.FC<TeamListItemProps> = ({ team }) => {
    return (
      <IonItem routerLink={`/teams/${team.idequipe}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {team.nom}
            <span className="date">
            </span>
          </h2>
          <h3>{team.acronyme}</h3>
          <p>
            Liste des joueurs
          </p>
        </IonLabel>
      </IonItem>
    );
  };
  
  export default TeamListItem;
  