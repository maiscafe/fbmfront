// components/Header.tsx

import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

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

  return (
    <header className={styles.header}>
      <h1 className={styles.titleHome} onClick={handleHome}>
        Football Manager
      </h1>
      <div>
        <button className={styles.menuButton} onClick={handlePlayerList}>
          Listar jogadores
        </button>
        <button className={styles.menuButton} onClick={handleTeamList}>
          Listar Times
        </button>
        <button className={styles.menuButton} onClick={handleNewPlayer}>
          Novo Jogador
        </button>
        <button className={styles.menuButton} onClick={handleNewTeam}>
          Novo Time
        </button>
      </div>
    </header>
  );
};

export default Header
