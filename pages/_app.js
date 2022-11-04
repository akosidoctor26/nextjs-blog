//To load global CSS files, create a file called pages/_app.js with the following content:
// This is the top level component. This component keep state when navigating between pages.
// server has to be restarted when adding _app.js

import '../styles/global.css';

export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
