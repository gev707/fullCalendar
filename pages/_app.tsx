import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import '../src/assets/style/main.scss'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import {Provider} from "react-redux";
import {store} from "../src/store";
import { ChakraProvider } from '@chakra-ui/react'
type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const MyApp: ({
                Component,
                pageProps
              }: { Component: any; pageProps: any }) => ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<ReactNode> | React.ReactPortal | boolean | null | undefined = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  return (
      <Provider store={store}>
          <ChakraProvider>
              {getLayout(<Component {...pageProps} />)}
          </ChakraProvider>
      </Provider>

  )
}
export default MyApp