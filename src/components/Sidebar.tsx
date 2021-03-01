import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  const router = useRouter()

  let homeLinkClass = "";
  let leaderboardLinkClass = "";

  if (router.pathname === '/') {
    homeLinkClass = `${styles.home} ${styles.active}`;
    leaderboardLinkClass = `${styles.leaderboard}`;
  } else if (router.pathname === 'leaderboard') {
    homeLinkClass = `${styles.home}`;
    leaderboardLinkClass = `${styles.leaderboard}  ${styles.active}`;
  }

  return (
    <div className={styles.container}>

      <img src="/favicon.png" alt="Logo move.it"/>

      <Link href="/">
        <a className={`${homeLinkClass}`}></a>
      </Link>

      <Link href="/leaderboard">
        <a className={`${leaderboardLinkClass}`}></a>
      </Link>

    </div>
  );
}