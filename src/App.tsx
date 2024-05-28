import { Route, Routes } from "react-router-dom"

import { GlobalStyle } from "./Global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { DefaultLayout } from "./layout/defaultLayout"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { OrderConfirmed } from "./pages/OrderConfirmed"
import { OrderContextProvider } from "./contexts/OrderContext"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<OrderConfirmed />} />
          </Route>
        </Routes>
      </OrderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
