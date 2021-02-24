import { ChallengesProvider } from '../contents/ChallengesContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
