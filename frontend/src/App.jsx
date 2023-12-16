import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header/Header"
import Header2 from "./components/Header/Header2"
import Header3 from "./components/Header/Header3"
import { Box, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Hero from "./components/Hero/Hero";
import Main from"./components/main/Main"
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    
      <ColorModeContext.Provider 
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider 
      // @ts-ignore
      theme={theme}>
        <CssBaseline />
     <Header/>
     <Header2/>
     <Header3/>
<Box bgcolor={theme.
// @ts-ignore
palette.bg.main}>

<Hero />
<Main />
<Footer />
<ScrollToTop/>
</Box>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
