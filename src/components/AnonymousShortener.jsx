import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Login from "./Login";
import EditUrl from "./EditUrl";
import Box from "@mui/material/Box";

const AnonymousShortener = () => {
  const [url, setUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shortenUrl, setShortenUrl] = useState(keygen());
  const [open, setOpen] = useState(false);
  const [openScreen, setOpenScreen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openEditUrl, setOpenEditUrl] = useState(false);
  const [customUrl, setCustomUrl] = useState();
  function keygen() {
    const characters =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let char = "";
    for (let i = 0; i < 8; i++) {
      let a = Math.floor(Math.random() * characters.length);
      char += characters[a];
    }
    return char;
  }
  const handleSubmit = () => {
    setShortenUrl(keygen());
    setSubmitted(true);
    setUrl("");
  };
  const copy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleCloseEditSnack = () => {
    setOpenEdit(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const actionEditSnack = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseEditSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const handleChildClick = () => {
    setOpenScreen(false);
  };
  const callEdit = () => {
    if (isLoggedIn) {
      console.log("canEdit");
      setOpenEditUrl(true);
    } else {
      setOpenEdit(true);
      setOpenScreen(true);
    }
  };
  const handleEditUrl = () => {
    setOpenEditUrl(false);
  };
  return (
    <>
      <Container sx={{}}>
        {isLoggedIn ? (
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 600,
              height: 350,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Enter your URL"
                variant="outlined"
                sx={{ width: "97.8%", m: "5px" }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Box sx={{ display: "flex", width: "100%" }}>
                <TextField
                  disabled
                  value={window.location.href}
                  sx={{ m: "5px", color: "#000" }}
                />
                <TextField
                  sx={{ m: "5px" }}
                  onChange={(e) => setCustomUrl(e.target.value)}
                />
              </Box>
              {url ? (
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ m: "10px", width: "50%" }}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled
                  disableElevation
                  sx={{ m: "10px", width: "50%" }}
                >
                  Save
                </Button>
              )}
            </Box>
            {submitted ? (
              <Paper
                elevation={0}
                sx={{
                  position: "relatiove",
                  mt: 30,
                  backgroundColor: "#E9FBF0",
                  border: "1px solid #C6F6D9",
                  width: 400,
                  height: 50,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      height: "50px",
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    <div id="shortenurl">
                      <a
                        href={window.location.href + customUrl}
                        target="_blank"
                        style={{ color: "rgba(0, 0, 0, 0.7)" }}
                      >
                        {window.location.href + customUrl}
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      aria-label="copy"
                      size="small"
                      sx={{
                        height: "40px",
                        width: "40px",
                      }}
                      onClick={() => copy(window.location.href + customUrl)}
                    >
                      <ContentCopyIcon fontSize="small" sx={{}} />
                    </IconButton>
                  </div>
                </div>
              </Paper>
            ) : null}
          </Paper>
        ) : (
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 600,
              height: 300,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div style={{ position: "fixed" }}>
              <TextField
                id="outlined-basic"
                label="Enter your url"
                variant="outlined"
                size="small"
                sx={{
                  width: 300,
                }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {url.length == 0 ? (
                <Button
                  variant="contained"
                  disableElevation
                  disabled
                  sx={{ cursor: "not-allowed", height: "40px" }}
                >
                  submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleSubmit}
                  sx={{ height: "40px" }}
                >
                  submit
                </Button>
              )}
            </div>
            {submitted ? (
              <Paper
                elevation={0}
                sx={{
                  position: "relatiove",
                  mt: 20,
                  backgroundColor: "#E9FBF0",
                  border: "1px solid #C6F6D9",
                  width: 400,
                  height: 50,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      height: "50px",
                      width: "80%",
                      textAlign: "left",
                    }}
                  >
                    <div id="shortenurl">
                      <a
                        href={window.location + shortenUrl}
                        target="_blank"
                        style={{ color: "rgba(0, 0, 0, 0.7)" }}
                      >
                        {window.location + shortenUrl}
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      aria-label="copy"
                      size="small"
                      sx={{
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <EditIcon fontSize="small" sx={{}} onClick={callEdit} />
                    </IconButton>
                    <IconButton
                      aria-label="copy"
                      size="small"
                      sx={{
                        height: "40px",
                        width: "40px",
                      }}
                      onClick={() => copy(window.location + shortenUrl)}
                    >
                      <ContentCopyIcon fontSize="small" sx={{}} />
                    </IconButton>
                  </div>
                </div>
              </Paper>
            ) : null}
          </Paper>
        )}
        <Login opn={openScreen} onChildClick={handleChildClick} />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Copied to clipboard"
          action={action}
        />
        <Snackbar
          open={openEdit}
          autoHideDuration={6000}
          onClose={handleCloseEditSnack}
          message="Login to your account for creating custom Url"
          action={actionEditSnack}
        />
        <EditUrl openEditUrl={openEditUrl} onEditUrl={handleEditUrl} />
      </Container>
    </>
  );
};

export default AnonymousShortener;
