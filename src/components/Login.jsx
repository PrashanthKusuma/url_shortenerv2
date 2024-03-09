import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Login({ opn, onChildClick }) {
  const [value, setValue] = React.useState(0);
  const handleClose = () => {
    onChildClick(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opn}
      >
        {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle> */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ width: "500px" }}>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Register" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="User ID"
                  variant="outlined"
                  sx={{ margin: "5px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  sx={{ margin: "5px" }}
                  type="password"
                />
                <Button
                  variant="contained"
                  disableElevation
                  centered
                  sx={{ margin: "10px" }}
                >
                  Login
                </Button>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="User ID"
                  variant="outlined"
                  sx={{ margin: "5px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  sx={{ margin: "5px" }}
                  type="password"
                />
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  sx={{ margin: "5px" }}
                  type="password"
                />
                <Button
                  variant="contained"
                  disableElevation
                  centered
                  sx={{ margin: "10px" }}
                >
                  Register
                </Button>
              </Box>
            </CustomTabPanel>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
