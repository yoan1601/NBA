export interface Player {
    nom: string;
    prenom: string;
    numero: string;
    idequipe: number;
    idjoueur: number;
    M: number;
    MJ: number;
    PPM: number;
    RPM: number;
    PDPM: number;
    MPM: number;
    EFF: number;
    FG: number;
    troisP: number;
    LF: number;
  }
  
  const players: Player[] = [
    {
        nom: 'Curry',
        prenom: 'Stephen',
        numero: '30',
        idequipe: 1,
        idjoueur: 0,
        M: 1,
        MJ: 1,
        PPM: 1,
        RPM: 1,
        PDPM: 1,
        MPM: 1,
        EFF: 1,
        FG: 1,
        troisP: 1,
        LF: 1
    },
    {
        nom: 'Thompson',
        prenom: 'Klay',
        numero: '11',
        idequipe: 1,
        idjoueur: 1,
        M: 1,
        MJ: 1,
        PPM: 1,
        RPM: 1,
        PDPM: 1,
        MPM: 1,
        EFF: 1,
        FG: 1,
        troisP: 1,
        LF: 1
    },
    {
        nom: 'Andrew',
        prenom: 'Wiggins',
        numero: '22',
        idequipe: 1,
        idjoueur: 2,
        M: 1,
        MJ: 1,
        PPM: 1,
        RPM: 1,
        PDPM: 1,
        MPM: 1,
        EFF: 1,
        FG: 1,
        troisP: 1,
        LF: 1
  
    },
    {
        nom: 'Chris',
        prenom: 'Paul',
        numero: '3',
        idequipe: 1,
        idjoueur: 3,
        M: 1,
        MJ: 1,
        PPM: 1,
        RPM: 1,
        PDPM: 1,
        MPM: 1,
        EFF: 1,
        FG: 1,
        troisP: 1,
        LF: 1
    },
    {
        nom: 'Johnatan',
        prenom: 'Kuminga',
        numero: '00',
        idequipe: 1,
        idjoueur: 4,
        M: 1,
        MJ: 1,
        PPM: 1,
        RPM: 1,
        PDPM: 1,
        MPM: 1,
        EFF: 1,
        FG: 1,
        troisP: 1,
        LF: 1
    },
    {
        nom: 'Jason',
        prenom: 'Tatum',
        numero: '0',
        idequipe: 2,
        idjoueur: 5,
        M: 1,
        MJ: 1,
        PPM: 1,
        RPM: 1,
        PDPM: 1,
        MPM: 1,
        EFF: 1,
        FG: 1,
        troisP: 1,
        LF: 1
    }
  ];
  
  export const getPlayers = () => players;
  
  export const getPlayer = (idjoueur: number) => players.find(t => t.idjoueur === idjoueur);

  export const getPlayersByIdTeam = (teamid: number) => players.filter(player => player.idequipe === teamid);

  