import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Leaderboard.module.css';

// interface LeaderboardProps {
//   level: number;
//   currentExperience: number;
//   challengesCompleted: number;
// }

// export default function Leaderboard(props: LeaderboardProps) {
export function Leaderboard() {
  <div className={styles.container}>
    <Head>
      <title>Leaderboard | move.it</title>
    </Head>
    <h1>Leaderboard </h1>
  </div>
}

// export const getServerSideProps: GetServerSideProps = async(ctx) => {
//   return 
// }