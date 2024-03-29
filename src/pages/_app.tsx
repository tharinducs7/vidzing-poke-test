import type { AppProps } from "next/app";
import store from "../store/store";
import { Provider } from "react-redux";
import "@/styles/main.scss";
import { ToastContainer } from 'react-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer delay={3000} position={'top-right'}/>
    </Provider>
  );
}
