import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function EditUrl({ openEditUrl, onEditUrl }) {
  const handleClose = () => {
    console.log("close");
  };

  const handleCloseEditUrl = () => {
    onEditUrl(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openEditUrl}
        onClose={handleCloseEditUrl}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Update Url"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField disabled value={window.location.href} />
            <TextField />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleCloseEditUrl}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
