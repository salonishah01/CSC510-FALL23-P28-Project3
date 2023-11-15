import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

function LogOut() {
    const handleLogout = () => {
        // Clear the user's token from localStorage (replace 'your_token_key' with your actual token key)
        localStorage.removeItem('your_token_key');

        // Optionally clear other user data from localStorage
        // localStorage.removeItem('user_data_key');

        // Redirect the user to the login page (replace '/login' with the actual login page URL)
        window.location.href = '/login'; // This will reload the entire app

        // In a real application, you might want to make an API call to the server to invalidate the token there and handle the redirection more gracefully.
    };

    return (
        <IconButton aria-label="delete">
            <LogoutIcon onClick={handleLogout} color="inherit" style={{ color: 'white' }}/>
        </IconButton>
    );
}

export default LogOut;
