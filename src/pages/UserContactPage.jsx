import React, { useState } from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import {
    Container, TextField, Button, Box, Typography, Paper, Grid, Checkbox,
    FormControlLabel, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, AccordionDetails, IconButton, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
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
    position: 'relative',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 4),
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));

const EditIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
}));

const UserContactPage = () => {
    const [themeMode, setThemeMode] = useState('light');
    const theme = themeMode === 'light' ? lightTheme : darkTheme;
    const [selectedAddressType, setSelectedAddressType] = useState('home');
    const [customAddressName, setCustomAddressName] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    // Initial Form Data
    const initialFormData = {
        firstName: '',
        secondName: '',
        mobileNumber: '',
        email: '',
        pinCode: '',
        address: '',
        locality: '',
        city: '',
        state: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    // Handle Form Input Changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Accordion Toggle
    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    // Toggle Edit Mode
    const toggleEdit = () => {
        if (isEditing) {
            // Reset form data when closing edit mode
            setFormData(initialFormData);
        }
        setIsEditing(!isEditing);
    };

    // Open Dialog for Custom Address Name
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    // Close Dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Save Custom Address Name
    const handleSaveCustomAddress = () => {
        if (customAddressName.trim() !== '') {
            setSelectedAddressType(customAddressName);
        }
        setCustomAddressName(''); // Clear input field
        setOpenDialog(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <RootBox>
                <Container maxWidth="sm">
                    <StyledPaper elevation={3}>
                        {/* Edit / Close Button */}
                        <EditIconButton onClick={toggleEdit}>
                            {isEditing ? <CloseIcon /> : <EditIcon />}
                        </EditIconButton>

                        <Typography variant="h6" align="center" gutterBottom>
                            Contact Details
                        </Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" variant="filled" size="small"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Second Name" variant="filled" size="small"
                                    name="secondName"
                                    value={formData.secondName}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Mobile Number" variant="filled" size="small"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email" variant="filled" size="small"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                        </Grid>

                        <Typography variant="h6" align="center" gutterBottom sx={{ mt: 3 }}>
                            Address
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Pin Code" variant="filled" size="small"
                                    name="pinCode"
                                    value={formData.pinCode}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Address" variant="filled" size="small"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Locality" variant="filled" size="small"
                                    name="locality"
                                    value={formData.locality}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="City" variant="filled" size="small"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="State" variant="filled" size="small"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    InputProps={{ disableUnderline: true, readOnly: !isEditing }} />
                            </Grid>
                        </Grid>

                        <Typography variant="body1" sx={{ mt: 2 }}>Save address as</Typography>
                        <ToggleButtonGroup
                            value={selectedAddressType}
                            exclusive
                            onChange={(event, newValue) => {
                                if (newValue !== null) setSelectedAddressType(newValue);
                            }}
                            sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}
                            disabled={!isEditing}
                        >
                            <ToggleButton value="home">Home</ToggleButton>
                            <ToggleButton value="work">Work</ToggleButton>
                            <ToggleButton onClick={handleOpenDialog}>+ Custom</ToggleButton>
                        </ToggleButtonGroup>

                        {isEditing && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <StyledButton variant="contained" onClick={toggleEdit}>
                                    SAVE DETAILS
                                </StyledButton>
                            </Box>
                        )}

                        {isEditing && (
                            <StyledAccordion expanded={expanded} onChange={handleAccordionChange}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Saved Addresses</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControlLabel control={<Checkbox />} label="123, Street Name, City, State - 123456" />
                                    <FormControlLabel control={<Checkbox />} label="456, Another Street, City, State - 654321" />
                                </AccordionDetails>
                            </StyledAccordion>
                        )}
                    </StyledPaper>
                </Container>
                {/* Custom Address Dialog */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Custom Address Name</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            fullWidth
                            label="Address Name"
                            variant="outlined"
                            value={customAddressName}
                            onChange={(e) => setCustomAddressName(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button variant="contained" onClick={handleSaveCustomAddress}>Save</Button>
                    </DialogActions>
                </Dialog>
            </RootBox>
        </ThemeProvider>
    );
};

export default UserContactPage;
