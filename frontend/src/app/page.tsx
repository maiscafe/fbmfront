"use client";
import React from 'react';
import styles from './page.module.css';
import Header from './components/Header'


export default function Home() {
  return (
    <div>
    <Header />
      <main className={styles.main}>
        <div className={styles.welcomeMessage}>
          <h2>Bem-vindo ao Football Manager!</h2>
          <p>
            O Football Manager é um projeto de estudo desenvolvido totalmente do zero, abrangendo desde o banco de dados até o front-end.
          </p>
          <p>
            Este projeto tem como objetivo fornecer uma experiência completa de gerenciamento de jogadores e times, permitindo a adição, edição e exclusão de informações, bem como a visualização e gerenciamento de dados de forma eficiente.
          </p>
          <p>
            Abaixo estão algumas das funcionalidades principais:
          </p>
          <ul>
            <li>Gerenciamento de Jogadores: Adicione, edite e exclua jogadores.</li>
            <li>Gerenciamento de Times: Adicione, edite e exclua times.</li>
            <li>Visualização: Consulte listas de jogadores e times com informações detalhadas.</li>
            <li>Interface Intuitiva: Navegue facilmente através de uma interface amigável e responsiva.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
