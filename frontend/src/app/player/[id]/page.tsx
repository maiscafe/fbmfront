"use client"

import styles from './player.module.css'
import { useParams, useRouter } from 'next/navigation';
import { useEditPlayerLogic } from './editPlayerLogic';
import Header from '../../components/Header'

const EditPlayerPage = () => {
  const { id } = useParams();
  const playerId = id as string;
  const router = useRouter();
  const {
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
  } = useEditPlayerLogic(playerId);

  const handleNewPlayer = () => {
    router.push('/player/new');
  };
  
  const handleNewTeam = () => {
    router.push('/team/new');
  };

  const handleTeamList = () => {
    router.push('/team/list');
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.form}>
          <h2>Editar Jogador</h2>
          <form>
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="age">Idade</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="team_id">Time</label>
              <select
                id="team_id"
                value={team_id}
                onChange={(e) => setTeamId(Number(e.target.value))}
                required
              >
                <option value="">Selecione um time</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.buttonGroup}>
              <button type="button" onClick={handleSave}>Salvar</button>
              <button type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditPlayerPage;