import {
  IonIcon,
    IonItem,
    IonLabel
    } from '@ionic/react';
  import { Player } from '../data/players';
  import './MessageListItem.css';
  import { personCircle } from 'ionicons/icons';
  interface PlayerListItemProps {
    player: Player;
  }

  const PlayerListItem: React.FC<PlayerListItemProps> = ({ player }) => {
    return (
      <>
      <IonItem routerLink={`/players/${player.idjoueur}`} detail={false}>
      <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {player.prenom} {player.nom}
            <span className="date">
            </span>
          </h2>
          <h3>Numero : {player.numero}</h3>
        </IonLabel>
      </IonItem>
      </>
    );
  };
  
  export default PlayerListItem;
  