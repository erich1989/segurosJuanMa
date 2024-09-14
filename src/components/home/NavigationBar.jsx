import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Button, Typography, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Icono de menú hamburguesa
import { useNavigate, useLocation } from 'react-router-dom'; // Importamos useLocation para obtener la ruta actual
import { sectionsData } from '../../constants/constants'; // Importar los datos de las secciones

function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation(); // Obtenemos la ruta actual
    const [selectedPage, setSelectedPage] = useState(null); // Estado para la página seleccionada
    const [openDialog, setOpenDialog] = useState(false); // Estado para abrir el diálogo en pantallas pequeñas

    // Función que maneja la selección de la página y la navegación
    const handleNavigate = (section) => {
        setSelectedPage(section.id); // Marca el link como seleccionado por id
        navigate(`/section-details/${section.id}`, { state: section }); // Navega a la ruta dinámica
        handleCloseDialog(); // Cierra el diálogo si está en una pantalla pequeña
    };

    // Efecto que cambia el estado seleccionado basado en la ruta actual
    useEffect(() => {
        const currentPath = location.pathname.split('/section-details/')[1]; // Extrae el id de la ruta
        if (currentPath) {
            setSelectedPage(Number(currentPath)); // Ajusta el id seleccionado según la ruta
        }
    }, [location.pathname]); // Cambia el estado cada vez que la ruta cambia

    // Funciones para abrir y cerrar el diálogo en pantallas pequeñas
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <AppBar position="fixed" sx={{ background: '#016d38', display: { xs: 'none', md: 'block' } }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Sección del logotipo */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', flexGrow: 1 }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                mb: 0, // Remover margen inferior
                                lineHeight: '0.7', // Ajustar la altura de la línea para que no haya espacio extra
                            }}
                        >
                            medCo
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.0rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                mt: 0, // Remover margen superior
                                lineHeight: '1', // Ajustar la altura de la línea
                            }}
                        >
                            seguros
                        </Typography>
                    </Box>

                    {/* Menú hamburguesa para pantallas pequeñas */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="open menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenDialog}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Sección de botones de navegación para pantallas grandes */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {sectionsData.map((section) => (
                            <Button
                                key={section.id}
                                onClick={() => handleNavigate(section)} // Navegación a la ruta dinámica
                                sx={{
                                    my: 2,
                                    color: selectedPage === section.id ? 'yellow' : 'white', // Cambia el color si está seleccionado
                                    display: 'block',
                                    mx: 1, // Añadir margen horizontal para separar los botones
                                }}
                            >
                                {section.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;