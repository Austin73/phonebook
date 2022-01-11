import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { change_name ,change_mobile,change_email,new_contact} from '../actions';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

export default function NewContactModel() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const data = useSelector(state => state.newContact)
    console.log(data.phone)
    const dispatch = useDispatch()
    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 160, right: 450 }}
                icon={<SpeedDialIcon />}
                onClick={handleOpen}
            ></SpeedDial>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1> New Contact</h1>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={data.name} 
                    onChange={(e)=>dispatch(change_name(e.target.value))}/>
                    <br /><br />
                    <TextField id="outlined-basic" label="Mobile No." variant="outlined" value={data.phone} 
                     onChange={(e)=>dispatch(change_mobile(e.target.value))}/>
                    <br /><br />
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={data.email}
                     onChange={(e)=>dispatch(change_email(e.target.value))}/>
                    <br /><br />

                    <Button variant="contained" 
                    onClick={()=>{
                        dispatch(new_contact(data))
                        handleClose()
                    }}>Save Contact</Button>
                </Box>
            </Modal>
        </div>
    );
}
