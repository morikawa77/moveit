import { useContext } from 'react';

import { ThemeSelectorContext } from '../contents/ThemeSelectorContext';
import { Sidebar } from '../components/Sidebar';
import { ThemeSelector } from '../components/ThemeSelector';

import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  const { theme } = useContext(ThemeSelectorContext);

  console.log(theme);

  return (
    // <div className={theme}>
    <div className={'light'}>
      <ThemeSelector />
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

