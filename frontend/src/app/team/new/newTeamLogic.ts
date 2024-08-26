import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function useNewTeam() {
  const [teamName, setTeamName] = useState('');
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/team/new-team', { name: teamName });
      
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'O time foi criado com sucesso.',
        confirmButtonText: 'OK'
      }).then(() => {
        router.push('/team/list')
      });

    } catch (error) {
      console.error('Error adding team:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Ocorreu um erro ao criar o time. Tente novamente.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleCancel = () => {
    router.push('/team/list');
  };

  const handleNewPlayer = () => {
    router.push('/player/new');
  };
  
  const handleNewTeam = () => {
    router.push('/team/new');
  };

  const handleHome = () => {
    router.push('/');
  };

  const handleTeamList = () => {
    router.push('/team/list');
  };

  const handlePlayerList = () => {
    router.push('/player/list');
  };

  return {
    teamName,
    setTeamName,
    handleSubmit,
    handleCancel,
    handleTeamList,
    handleHome,
    handleNewTeam,
    handleNewPlayer,
    handlePlayerList
  };
}
