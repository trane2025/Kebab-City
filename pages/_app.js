import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../store/store';
import '../styles/main.scss';
import '../styles/animate.scss';
import 'swiper/swiper.scss';
import NextNprogress from 'nextjs-progressbar';

const GlobalStyle = createGlobalStyle`

  
`



export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <NextNprogress
        color="#6d83ab"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ easing: 'ease', speed: 500 }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}
