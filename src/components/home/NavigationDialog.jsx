import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import { Box, ListItem } from '@mui/material';

import { sectionsData } from '../../constants/constants';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavigationDialog() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [selectedPage, setSelectedPage] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    React.useEffect(() => {
        const currentPath = location.pathname.split('/section-details/')[1]; // Extrae el id de la ruta
        if (currentPath) {
            setSelectedPage(Number(currentPath)); // Ajusta el id seleccionado según la ruta
        }
    }, [location.pathname]);

    const handleNavigate = (section) => {
        setSelectedPage(section.id); // Marca el link como seleccionado por id
        navigate(`/section-details/${section.id}`, { state: section }); // Navega a la ruta dinámica
        handleCloseNavMenu(); // Cierra el menú si está en una pantalla pequeña
    };

    const handleNavigateHome = () => {
        navigate(`/`); // Navega a la ruta dinámica
        handleCloseNavMenu(); // Cierra el menú si está en una pantalla pequeña
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ background: '#016d38', display: { xs: 'Block', md: 'none' }, position: 'fixed' }}>
                    <Toolbar>
                        <Typography variant="body1"
                            sx={{ mr: 'auto', color: 'white', fontFamily: 'monospace', fontSize: { xs: '1.5rem' }, textDecoration: 'none' }}
                            component="a"
                            href="/"
                        >
                            medco
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            // sx={{ mr: 2, }}
                            onClick={handleClickOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', background: '#016d38', }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <List>
                    <ListItem
                        button
                        onClick={handleNavigateHome}

                    >
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <Divider />{/* Divider vertical entre los ítems */}

                    {sectionsData.map((section) => (
                        <React.Fragment key={section.id}>
                            <ListItem
                                button
                                onClick={() => handleNavigate(section)} // Navegación a la ruta dinámica

                            >
                                <ListItemText primary={section.title} />
                            </ListItem>
                            <Divider />{/* Divider vertical entre los ítems */}
                        </React.Fragment>
                    ))}
                </List>
            </Dialog>
        </>
    );
}
