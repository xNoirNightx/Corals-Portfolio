import '../styles/globals.css';

// add componets here 
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />;
  </Layout>
  );
}

export default MyApp;
