import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

type Team = {
  id: number;
  name: string;
  updated_at: string;
};

export default function useListLogic() {
  const [teams, setTeams] = useState<Team[]>([]);
  const router = useRouter();

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

  const handleEdit = (id: number) => {
    router.push(`/team/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: "Esta ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete('http://localhost:3000/team/delete-team', {
          data: { id }
        });
        setTeams(teams.filter(team => team.id !== id));
        Swal.fire(
          'Excluído!',
          'O time foi excluído com sucesso.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting team:', error);
        Swal.fire(
          'Erro!',
          'Ocorreu um erro ao tentar excluir o time.',
          'error'
        );
      }
    }
  };

  return { teams, handleEdit, handleDelete };
}
