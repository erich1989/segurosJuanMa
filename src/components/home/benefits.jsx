import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab'; // Para el botón flotante
import { Box, Typography, Button, Grid, Card, CardMedia,CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

import { sectionsData } from '../../constants/constants'; // Importar los datos de las secciones

const Section = ({ title, content, imageUrl, backgroundColor, sectionId }) => {
    const navigate = useNavigate();
    const isGreenBackground = backgroundColor === '#016d38'; // Fondo verde

    const handleNavigate = (id) => {
        const selectedSection = sectionsData.find(section => section.id === id);

        navigate(`/section-details/${id}`, { state: selectedSection });
    };

    return (
        <Box
            sx={{
                height: '100vh', // Altura completa de la pantalla
                scrollSnapAlign: 'start',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor,
                padding: 4,
                color: isGreenBackground ? '#fff' : '#555', // Texto blanco si el fondo es verde, gris si no lo es
            }}
        >
            {/* Tarjeta en el centro */}
            <Card
                sx={{
                    width: { xs: '90%', md: '60%' }, // Ancho responsivo de la tarjeta
                    backgroundColor: isGreenBackground ? '#fff' : '#016d38', // Fondo blanco si el fondo es verde, verde si el fondo es blanco
                    color: isGreenBackground ? '#016d38' : '#fff', // Texto verde si el fondo es blanco, blanco si el fondo es verde
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Disposición columna en móviles, fila en escritorio
                    alignItems: 'center',
                }}
            >
                {/* Imagen dentro de la tarjeta */}
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={title}
                    sx={{
                        width: { xs: '100%', md: '40%' }, // Ancho de la imagen responsivo
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />

                <CardContent
                    sx={{
                        padding: { xs: '20px', md: '40px' }, // Padding responsivo
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    {/* Título */}
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: 2,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Tamaño responsivo del título
                        }}
                    >
                        {title}
                    </Typography>

                    {/* Texto resumido */}
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: 3,
                            maxWidth: '600px',
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }, // Texto resumido responsivo
                        }}
                    >
                        {content}
                    </Typography>

                    {/* Botón */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ffdc5d',
                            color: '#016d38',
                            fontWeight: 'bold',
                            padding: { xs: '8px 16px', md: '10px 20px' }, // Padding responsivo
                            '&:hover': {
                                backgroundColor: '#ffb700',
                            },
                        }}
                        onClick={() => handleNavigate(sectionId)}
                    >
                        Saber más
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

// Componente Footer
const Footer = () => (
    <Box
        sx={{
            height: '100vh', // Altura completa para mantener el scroll-snap
            scrollSnapAlign: 'start',
            backgroundColor: '#016d38', // Fondo verde
            color: '#fff', // Texto blanco
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 4,
        }}
    >
        {/* Título del footer */}
        <Typography variant="h4" gutterBottom>
            Contáctanos
        </Typography>
        {/* Redes Sociales */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 4 }}>
            <IconButton sx={{ color: '#fff' }} aria-label="Facebook">
                <Facebook />
            </IconButton>
            <IconButton sx={{ color: '#fff' }} aria-label="Twitter">
                <Twitter />
            </IconButton>
            <IconButton sx={{ color: '#fff' }} aria-label="Instagram">
                <Instagram />
            </IconButton>
            <IconButton sx={{ color: '#fff' }} aria-label="LinkedIn">
                <LinkedIn />
            </IconButton>
        </Box>
        {/* Información adicional */}
        <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '600px', marginBottom: 4 }}>
            Síguenos en nuestras redes sociales o contáctanos para más información sobre nuestros productos y servicios.
        </Typography>
        {/* Copyright */}
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
            © 2024 Nombre de la Compañía. Todos los derechos reservados.
        </Typography>
    </Box>
);

function ResponsiveAppBar() {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    return (
        <>
            {/* <Header /> */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <Fab
                    color="success"
                    aria-label="whatsapp"
                    href="https://wa.me/573012100844?text=Hola%2C%20estoy%20interesado%20en%20contratar%20el%20servicio"
                    // Cambia el número de WhatsApp
                    target="_blank" // Abre el link en una nueva pestaña
                >
                    <WhatsAppIcon />
                </Fab>
            </Box>

            {/* Contenido de la página */}
            <Box
                sx={{
                    height: '100vh',
                    overflowY: 'scroll', // Habilitar scroll
                    scrollSnapType: 'y mandatory', // Efecto scroll snap
                }}
            >
                {/* Primera Sección con Texto Llamativo */}
                <Box
                    sx={{
                        height: '100vh',
                        scrollSnapAlign: 'start',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                        padding: 4,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Logo */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        {/* "medco" más grande y más grueso */}
                        <Typography
                            variant="h1"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 'bold',
                                letterSpacing: '.01rem',
                                color: '#016d38',
                                textDecoration: 'none',
                                mb: 0,
                                lineHeight: '0.9',
                                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, // Responsivo
                            }}
                        >
                            medco
                        </Typography>

                        {/* "seguros" más pequeño y con otro color */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.05rem',
                                color: '#ffdc5d',
                                textDecoration: 'none',
                                mt: -1,
                                lineHeight: '1',
                                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' }, // Responsivo
                            }}
                        >
                            seguros
                        </Typography>
                    </Box>

                    {/* Mensaje de bienvenida */}
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#016d38',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 4,
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' }, // Responsivo
                        }}
                    >
                        ¡Bienvenido a nuestra Plataforma de Seguros!
                    </Typography>

                    {/* Descripción */}
                    <Typography
                        variant="h5"
                        sx={{
                            marginTop: 2,
                            color: '#555',
                            textAlign: 'center',
                            maxWidth: '600px',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsivo
                        }}
                    >
                        Encuentra las mejores coberturas y planes para proteger lo que más valoras.
                    </Typography>

                    {/* Botón de llamada a la acción */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ffdc5d',
                            color: '#016d38',
                            fontWeight: 'bold',
                            marginTop: 4,
                            padding: { xs: '8px 16px', md: '10px 20px' },
                            '&:hover': {
                                backgroundColor: '#ffb700',
                            },
                        }}
                        href="https://wa.me/3012100844?text=Hola,%20estoy%20interesado%20en%20sus%20servicios"
                        target="_blank"
                    >
                        ¡Comienza Ahora!
                    </Button>

                    {/* Sección de iconos representando servicios */}
                    <Grid container spacing={4} sx={{ marginTop: 6, display: { xs: 'none', md: 'flex' } }}>
                        <Grid item xs={4} sm={6} md={4} textAlign="center">
                            <CheckCircleIcon sx={{ fontSize: { xs: 40, md: 50 }, color: '#016d38' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                                Cobertura Total
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#555', maxWidth: '250px', margin: 'auto' }}>
                                Seguros que cubren desde accidentes personales hasta tu hogar.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} textAlign="center">
                            <CheckCircleIcon sx={{ fontSize: { xs: 40, md: 50 }, color: '#016d38' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                                Planes Personalizados
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#555', maxWidth: '250px', margin: 'auto' }}>
                                Adaptamos los seguros según tus necesidades.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} textAlign="center">
                            <CheckCircleIcon sx={{ fontSize: { xs: 40, md: 50 }, color: '#016d38' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                                Asistencia 24/7
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#555', maxWidth: '250px', margin: 'auto' }}>
                                Estamos disponibles para ti en todo momento.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Otras secciones */}
                {sectionsData.map((section) => (
                    <Section
                        key={section.id}
                        title={section.title}
                        content={section.summary}
                        imageUrl={section.imageUrl}
                        backgroundColor={section.backgroundColor}
                        sectionId={section.id}
                    />
                ))}

                {/* Footer */}
                <Footer />
            </Box>
        </>
    );
}

export default ResponsiveAppBar;
