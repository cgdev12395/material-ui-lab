
import { Typography, Box } from '@mui/material';

import Header from "../components/fixed/Header";
import NavBar from '../components/fixed/NavBar';
import MainPage from '../components/containers/MainPage';

const Homepage = () => {
    return <>
        <Header />
        <NavBar />
        
        <Box sx={{ display: 'flex', width: '98vw'}}>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <MainPage />
            </Box>
        </Box>
    </>
}

export default Homepage;