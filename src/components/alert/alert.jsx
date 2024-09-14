import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertInfo({ openAlert, setOpenAlert, typeAlert, messageError }) {

    const handleClose = () => {
        setOpenAlert(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            {
                typeAlert === 'error' &&
                <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {messageError}
                    </Alert>
                </Snackbar>
            }

            {
                typeAlert === 'success' &&
                <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {messageError}
                    </Alert>
                </Snackbar>
            }

            {/* <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert> */}
        </Stack>
    );
}