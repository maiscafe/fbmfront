'use client';

import React from 'react';

import useNewTeam from './newTeamLogic';
import styles from './newTeam.module.css';
import Header from '../../components/Header'

export default function NewTeamPage() {

  const {
    teamName,
    setTeamName,
    handleSubmit,
    handleCancel
  } = useNewTeam();


  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <div className={styles.form}>
          <h2>Adicionar Novo Time</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="teamName">Nome do Time</label>
              <input
                type="text"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit">Salvar</button>
              <button type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
