// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}