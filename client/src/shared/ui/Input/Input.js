import {TextField as MuiInput } from "@mui/material";

const Input = (props) => {
    return (
        <MuiInput
            {...props}
            autoComplete="off"
            InputLabelProps={{ required: false }}
        />
    )
}

export default Input