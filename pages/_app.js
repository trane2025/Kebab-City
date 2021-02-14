import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../store/store';
import '../styles/main.scss';
import '../styles/animate.scss';
import 'swiper/swiper.scss';

const GlobalStyle = createGlobalStyle`

  
`



export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}
