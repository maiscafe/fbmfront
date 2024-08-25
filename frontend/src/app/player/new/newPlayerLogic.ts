import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

type Team = {
  id: number;
  name: string;
};

export default function useNewPlayer() {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [teamId, setTeamId] = useState<number | ''>('');
  const [teams, setTeams] = useState<Team[]>([]);

  // Função para buscar os times
  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await axios.get('http://localhost:3000/team/list-teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
    fetchTeams();
  }, []);

  // Função para enviar os dados do jogador
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/player/new-player', {
        name,
        age,
        team_id: teamId,
      });

      await Swal.fire({
        title: 'Sucesso!',
        text: 'Jogador salvo com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      router.push('/player/list');
    } catch (error) {
      console.error('Error saving player:', error);
      await Swal.fire({
        title: 'Erro!',
        text: 'Não foi possível cadastrar o jogador.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  function handleCancel() {
    router.push('/');
  }

  return {
    name,
    setName,
    age,
    setAge,
    teamId,
    setTeamId,
    teams,
    handleSubmit,
    handleCancel,
  };
}
