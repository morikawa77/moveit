import { useContext } from 'react';
import { ChallengesContext } from '../contents/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" className={styles.twitterShare} onClick={() => {}}>
          Compartilhar no twitter
          <img src="/icons/twitter.svg" alt="Compartilhar no twitter"/>
        </button>

        <button type="button" className={styles.close} onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  );
}