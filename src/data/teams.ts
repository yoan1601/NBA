export interface Team {
  nom: string;
  acronyme: string;
  idequipe: number;
}

const teams: Team[] = [
  {
    nom: 'Rockets',
    acronyme: 'RKT',
    idequipe: 0
  },
  {
    nom: 'Golden State Warriors',
    acronyme: 'GSW',
    idequipe: 1
  },
  {
    nom: 'Boston Cletics',
    acronyme: 'CELT',
    idequipe: 2

  },
  {
    nom: 'Phoenix Suns',
    acronyme: 'PHOE',
    idequipe: 3
  },
  {
    nom: 'Sacramento Kings',
    acronyme: 'SAC',
    idequipe: 4
  }
];

export const getTeams = () => teams;

export const getTeam = (id: number) => teams.find(t => t.idequipe === id);
