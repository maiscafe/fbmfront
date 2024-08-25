"use client";

import React from 'react';
import useListPlayersLogic from './listPlayersLogic'; // Importe o hook com a lógica
import styles from "./page.module.css";
import headerStyle from "../../styles/header.module.css"
import Header from '../../components/Header'
export default function Home() {
  const {
    players,
    handleEdit,
    handleDelete,
  } = useListPlayersLogic();



  return (
    <div>
    <Header/>
      <main className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Time</th>
              <th>Ações</th>
              <th>Ultima atualização</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.team.name}</td>
                <td>
                  <button onClick={() => handleEdit(player.id)} className={styles.editButton}>Editar</button>
                  <button onClick={() => handleDelete(player.id)} className={styles.deleteButton}>Excluir</button>
                </td>
                <td>{new Date(player.updated_at).toLocaleDateString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
