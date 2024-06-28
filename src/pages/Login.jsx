import { Typography, Box } from '@mui/material';
import LoginForm from "../components/containers/LoginForm";

const Login = () => {
    return <>
    <Box sx={{ display: 'flex', width: '98vw'}}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <LoginForm />
        </Box>
    </Box>
    </>
}

export default Login;