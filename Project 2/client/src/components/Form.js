import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import slashImage from "../header/Slash1.png";
import { Navigate } from "react-router-dom";
import {
    Container,
    Grid,
    Box,
    TextField,
    Button,
    Paper,
    Typography,
} from "@mui/material";

const customStyles = {
    backgroundColor: '#83604B',
    color: "white", // Text color
};

const Form = (props) => {
    const { values, errors, handleChange, handleSubmit } = useForm(
        login,
        validate
    );
    const [loggedIn, setLoggedIn] = useState(false);

    const imageStyle = {
        width: '300px', // Adjust the width to your desired size
        // Maintain the aspect ratio
        position: 'absolute', // Position the border element absolutely within the container
        top: '155px',
        left: '620px',
        right: '10px',
        bottom: 0,
        border: '2px', // Customize the border style as needed
        boxSizing: 'border-box',
    };

    function login() {
        setLoggedIn(true);
        props.parentCallback(true);
        return <Navigate to="/Menu" />;
    }

    return (
        <Container
            maxWidth="sm"
            style={{ display: "flex", alignItems: "center", height: "100vh" }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={9}>
                    <Paper elevation={3} style={{ padding: "20px" }}>
                        <img src={slashImage} alt="SLASH!!" style={imageStyle} />
                        <Typography variant="h4" align="center">
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit} noValidate>
                            <Box mt={3}>
                                <TextField
                                    autoComplete="off"
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={values.email || ""}
                                    required
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                />
                            </Box>
                            <Box mt={3}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={values.password || ""}
                                    required
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                />
                            </Box>
                            <Box mt={3}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    style={customStyles}
                                    fullWidth
                                >
                                    Login
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            {loggedIn && <Navigate to="/Menu" />}
        </Container>
    );
};

export default Form;
