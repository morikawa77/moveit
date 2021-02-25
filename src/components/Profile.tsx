import { useContext } from 'react';
import { ChallengesContext } from '../contents/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/morikawa77.png" alt="Reginaldo Morikawa"/>
      <div>
        <strong>Reginaldo Morikawa</strong>
        
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}