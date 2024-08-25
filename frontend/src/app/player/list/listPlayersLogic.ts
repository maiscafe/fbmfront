// listPlayersLogic.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

type Team = {
  id: number;
  name: string;
}

type Player = {
  id: number;
  name: string;
  team_id: number;
  age: number,
  team: Team;
  updated_at: string;
};

export default function useListPlayersLogic() {
  const [players, setPlayers] = useState<Player[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.post('http://localhost:3000/player/list-players')
      .then(response => setPlayers(response.data))
      .catch(error => console.error('Erro ao buscar jogadores:', error));
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/player/${id}`);
  };

  const handleNewPlayer = () => {
    router.push('/player/new');
  };

  const handleNewTeam = () => {
    router.push('/team/new');
  };

  const handleTeamList = () => {
    router.push('/team/list');
  };

  const handleHome = () => {
    router.push('/');
  };

  const handlePlayerList = () => {
    router.push('/player/list');
  };


  const handleDelete = async (id: number) => {
    // Exibir o Sweet Alert para confirmação
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: 'Essa ação é irreversível!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete('http://localhost:3000/player/delete-player', {
          data: { id: id }
        });
        // Atualize a lista de jogadores após a exclusão
        setPlayers(players.filter(player => player.id !== id));
        Swal.fire(
          'Excluído!',
          'O jogador foi excluído.',
          'success'
        );
      } catch (error) {
        console.error('Erro ao excluir jogador:', error);
        Swal.fire(
          'Erro!',
          'Ocorreu um erro ao excluir o jogador.',
          'error'
        );
      }
    }
  };

  return {
    players,
    handleEdit,
    handleDelete
  };
}
