import {forwardRef} from "react";
import PropTypes from 'prop-types';
import {Box} from "@mui/material";
import {Modal as MuiModal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: 300,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

const Modal = forwardRef((props, ref) => {
    const {open, children, ...otherProps} = props;

    if (typeof open === "undefined") {
        return null
    }

    return (
        <MuiModal
            open={open}
            ref={ref}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            {...otherProps}
        >
            <Box sx={style}>
                {children}
            </Box>
        </MuiModal>
    )
})

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export default Modal;