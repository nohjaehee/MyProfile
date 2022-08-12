import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './main';
import Profile from './profile';
import NotFound from './notFound';
import "../css/main.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
      const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
        sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        }}
    >
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item className='header'>
            <Tab className="home" label="Home" component={Link} to="/"></Tab>
            <Tab className="profile" label="Profile" component={Link} to="/profile"></Tab>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? '🌑' : '🌕'}
            </IconButton>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/profile/*" element={<Profile />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
            </Grid>
         </Grid>
    </Box>
  );
}


function HeaderContents(){
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
    return(

        <header>
        
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
            <MyApp />
            </ThemeProvider>
         </ColorModeContext.Provider>
 

        </header>

    );
}


export default function BaseLayout() {

   return (
    <HeaderContents/>

   )
}