import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link rel="apple-touch-icon" sizes="57x57" href="/icons/pwa/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/pwa/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/pwa/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/pwa/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/pwa/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/pwa/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/pwa/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/pwa/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/pwa/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/icons/pwa/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/pwa/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/pwa/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/pwa/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#5965E0" />
          <meta name="msapplication-TileImage" content="/icons/pwa/ms-icon-144x144.png" />
          <meta name="theme-color" content="#5965E0"></meta>

          <link rel="apple-touch-icon" href="/icons/pwa/favicon-96x96.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#5965E0" />

          <link href="/icons/pwa/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/icons/pwa/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}