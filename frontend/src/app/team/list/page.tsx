'use client';

import React from 'react';
import useListLogic from './listLogic';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import headerStyle from '../../styles/header.module.css'
import Header from '../../components/Header'

export default function ListTeamsPage() {
  const { teams,
          handleEdit,
          handleDelete } = useListLogic();

  const router = useRouter();
  
  return (
    <div className={headerStyle.container}>
    <Header/>
      <main className={styles.main}>
        <h2 className={styles.titleHome}>Lista de Times</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
              <th>Ultima atualização</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(team.id)}
                  >
                    Excluir
                  </button>
                </td>
                <td>{team.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
