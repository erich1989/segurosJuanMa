import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, CardContent, Button, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Icono de WhatsApp

import { useTheme } from '@mui/material/styles'; // Para utilizar el tema y las media queries

function Detail() {
    const location = useLocation();
    const section = location.state; // Obtiene los datos de la sección seleccionada

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // Verifica si la pantalla es "md" o más grande

    // URL de WhatsApp con un mensaje personalizado
    const whatsappLink = "https://wa.me/573012100844?text=Hola%2C%20estoy%20interesado%20en%20contratar%20el%20servicio"

    return (
        <>
            {/* <Header /> */}
            <Box
                sx={{
                    minHeight: '100vh', // Altura mínima de la pantalla completa
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'linear-gradient(to right, #016d38, #02d46f)', // Fondo con degradado
                    color: '#fff',
                    padding: { xs: '10px', sm: '20px' }, // Padding responsivo
                    transition: 'all 0.5s ease-in-out', // Transición suave
                }}
            >
                {/* Barra de navegación fija */}

                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente para el contenido
                        padding: { xs: '20px', sm: '40px' }, // Padding responsivo
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Sombra para el contenido
                        width: { xs: '100%', sm: '90%', md: '80%' }, // Ajustar ancho para ser más responsivo
                        maxWidth: '1200px',
                        transition: 'all 0.5s ease-in-out', // Transición suave en el contenido
                        mt: { xs: 7, md: 0 }
                    }}
                >
                    {/* Título */}
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: { xs: '10px', sm: '20px' }, // Margen responsivo
                            textTransform: 'uppercase',
                            fontSize: { xs: '1.8rem', sm: '2.5rem' }, // Tamaño del texto responsivo
                        }}
                    >
                        {section.title}
                    </Typography>

                    {/* Resumen */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.2rem' }, // Texto responsivo
                            marginBottom: { xs: '20px', sm: '30px' }, // Margen responsivo
                        }}
                    >
                        {section.summary}
                    </Typography>

                    {/* Contenedor de tarjetas */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: isLargeScreen ? 'row' : 'column', // Cambia entre row (horizontal) y column (vertical)
                            overflowX: isLargeScreen ? 'auto' : 'visible', // Scroll horizontal para pantallas grandes
                            overflowY: !isLargeScreen ? 'auto' : 'visible', // Scroll vertical para pantallas pequeñas
                            gap: 2, // Espacio entre tarjetas
                            paddingBottom: '20px', // Añadir un espacio en la parte inferior del scroll
                            scrollbarWidth: 'thin', // Scrollbar estilizado
                            scrollbarColor: '#ffdc5d #016d38', // Colores de la barra de desplazamiento
                            '&::-webkit-scrollbar': {
                                height: isLargeScreen ? '8px' : '0px', // Scroll visible solo en pantallas grandes
                                width: !isLargeScreen ? '8px' : '0px', // Scroll vertical visible solo en pantallas pequeñas
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: '#016d38', // Color de fondo de la barra
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#ffdc5d', // Color del scroll
                                borderRadius: '10px',
                            },
                        }}
                    >
                        {section.services.map((service, index) => (
                            <Paper
                                key={index}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#016d38',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minWidth: { xs: '85%', sm: '90%', md: '300px' }, // Ancho mínimo de cada tarjeta responsivo
                                    maxWidth: { xs: '100%', sm: '100%', md: '300px' }, // Para pantallas pequeñas, ocupa todo el ancho
                                    padding: { xs: '15px', sm: '20px' }, // Padding responsivo
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra fija sin hover
                                    transition: 'all 0.2s ease-in-out', // Transición suave sin hover
                                    height: { xs: '290px', md: '300px' }, // Altura fija de las tarjetas en pantallas pequeñas y grandes
                                    overflow: 'hidden', // Si el contenido es mayor, no se mostrará fuera de la tarjeta
                                }}
                                elevation={3}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            marginBottom: { xs: '5px', sm: '10px' }, // Margen responsivo
                                            color: '#ffdc5d',
                                        }}
                                    >
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {service.fullDescription}
                                    </Typography>
                                </CardContent>
                            </Paper>
                        ))}
                    </Box>

                    {/* Botón de WhatsApp para contratar el servicio */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ffdc5d',
                            color: '#016d38',
                            fontWeight: 'bold',
                            marginTop: '30px',
                            padding: { xs: '8px 16px', sm: '10px 20px' }, // Padding responsivo
                            '&:hover': {
                                backgroundColor: '#ffb700', // Color en hover
                            },
                        }}
                        startIcon={<WhatsAppIcon />}
                        href={whatsappLink} // Enlace a WhatsApp
                        target="_blank" // Abrir en una nueva pestaña
                    >
                        Contratar servicio
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default Detail;
