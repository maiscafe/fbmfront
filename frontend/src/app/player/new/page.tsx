'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import useNewPlayer from './newPlayerLogic';
import styles from './newPlayer.module.css';
import headerStyle from '../../styles/header.module.css'
import Header from '../../components/Header'

export default function NewPlayerPage() {
  const router = useRouter();
  const {
    name,
    setName,
    age,
    setAge,
    teamId,
    setTeamId,
    teams,
    handleSubmit,
  } = useNewPlayer();


  const handleCancelClick = () => {
    router.push('/');
  };
  
  return (
    <div className={headerStyle.container}>
      <Header/>
      <main className={styles.main}>
        <div className={styles.form}>
          <h2>Adicionar Novo Jogador</h2>
          <form onSubmit={handleSubmit}>
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
                min="1"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="team">Time</label>
              <select
                id="team"
                value={teamId}
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
              <button type="submit">Salvar</button>
              <button type="button" onClick={handleCancelClick}>Cancelar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
