import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function RegionSelect(props) {
    const [region, setRegion] = useState("");
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setRegion(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='filter'>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Region</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={region}
                    label="Region"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    {props.regions.map(reg => {
                        return (<MenuItem key={reg} value={reg}>{reg}</MenuItem>);
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default RegionSelect;
