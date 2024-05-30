import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
