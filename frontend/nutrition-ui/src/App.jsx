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
            <Box sx={{
                minWidth: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)'
            }}>
                <Layout></Layout>
            </Box>
        </ThemeProvider>
    );
}

export default App
