import { useContext } from 'react';

import { Sidebar } from '../components/Sidebar';
import { ThemeSelectorContext } from '../contents/ThemeSelectorContext';
import { ThemeSelector } from '../components/ThemeSelector';

import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  const { theme } = useContext(ThemeSelectorContext);

  console.log(theme);

  return (
    <div className={theme}>
      <ThemeSelector />
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
