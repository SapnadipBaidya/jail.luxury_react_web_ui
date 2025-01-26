import React, { useState } from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Container, TextField, Button, Box, Typography, Paper, Grid, Checkbox, FormControlLabel, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lightTheme, darkTheme } from '../globalStyles/theme';

// Styled Components
const RootBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2, 4),
    borderRadius: 8,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 4),
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));

const UserContactPage = () => {
    const [themeMode, setThemeMode] = useState('light');
    const theme = themeMode === 'light' ? lightTheme : darkTheme;
    const [selectedAddressType, setSelectedAddressType] = useState('home');
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={theme}>
            <RootBox>
                <Container maxWidth="sm">
                    <StyledPaper elevation={3}>
                        <Typography variant="h6" align="center" gutterBottom>Contact Details</Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Second Name" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Mobile Number" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                        </Grid>

                        <Typography variant="h6" align="center" gutterBottom sx={{ mt: 3 }}>Address</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Pin Code" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Address (House No., Building, Street, Area)" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Locality/Town" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="City/District" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="State" variant="filled" size="small" InputProps={{ disableUnderline: true }} />
                            </Grid>
                        </Grid>

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <FormControlLabel control={<Checkbox />} label="Make this my default address" />
                        </Box>

                        <Typography variant="body1" sx={{ mt: 2 }}>Save address as</Typography>
                        <ToggleButtonGroup
                            value={selectedAddressType}
                            exclusive
                            onChange={(event, newValue) => {
                                if (newValue !== null) setSelectedAddressType(newValue);
                            }}
                            sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}
                        >
                            <ToggleButton value="home">Home</ToggleButton>
                            <ToggleButton value="work">Work</ToggleButton>
                        </ToggleButtonGroup>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <StyledButton variant="contained">SAVE DETAILS</StyledButton>
                        </Box>

                        <StyledAccordion expanded={expanded} onChange={handleAccordionChange}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Saved Addresses</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControlLabel control={<Checkbox />} label="123, Street Name, City, State - 123456" />
                                <FormControlLabel control={<Checkbox />} label="456, Another Street, City, State - 654321" />
                            </AccordionDetails>
                        </StyledAccordion>
                    </StyledPaper>
                </Container>
            </RootBox>
        </ThemeProvider>
    );
};

export default UserContactPage;