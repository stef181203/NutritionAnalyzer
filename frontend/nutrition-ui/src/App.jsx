import './App.css'
import Layout from "./ui/components/layout/Layout.jsx";
import {Box, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `'Montserrat', sans-serif`,
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout></Layout>
        </ThemeProvider>
    );
}

export default App
