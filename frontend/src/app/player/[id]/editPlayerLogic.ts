import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Player = {
  id: number;
  name: string;
  age: number;
  team_id: number;
};

type Team = {
  id: number;
  name: string;
};

export function useEditPlayerLogic(playerId: string) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [team_id, setTeamId] = useState<number | ''>('');
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPlayer = async () => {
        try {
            const response = await axios.post('http://localhost:3000/player/list-players', {
              id: parseInt(playerId) // Pass ID in the request body
            }, {
              headers: {
                'Content-Type': 'application/json' // Ensure the content type is JSON
              }
            });

        if (Array.isArray(response.data) && response.data.length > 0) {
          const playerData = response.data[0];
          setPlayer(playerData);
          setName(playerData.name);
          setAge(playerData.age);
          setTeamId(playerData.team_id);
        } else {
          console.error('No player data found.');
        }
      } catch (error) {
        console.error('Error fetching player:', error);
      }
    };

    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3000/team/list-teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    if (playerId) {
      fetchPlayer();
    }
    fetchTeams();
  }, [playerId]);

  const validateInputs = () => {
    if (!name || /\d/.test(name)) {
      setError('Nome não pode estar vazio e não deve conter números.');
      return false;
    }
    if (age === '' || age <= 0) {
      setError('Idade deve ser um número válido e maior que zero.');
      return false;
    }
    if (team_id === '' || team_id <= 0) {
      setError('Selecione um time');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSave = async () => {
    if (validateInputs()) {
      try {
        await axios.put('http://localhost:3000/player/update-player', {
          id: player?.id,
          name,
          age,
          team_id
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        router.push('/player/list');
      } catch (error) {
        console.error('Error updating player:', error);
      }
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  const handleHome = () => {
    router.push('/');
  }

  return {
    player,
    name,
    setName,
    age,
    setAge,
    team_id,
    setTeamId,
    teams,
    error,
    handleSave,
    handleCancel,
    handleHome
  };
}
