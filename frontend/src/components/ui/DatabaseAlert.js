import { Close } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDatabaseStatus } from "../../lib/utils";

const DatabaseAlert = () => {
  const [databaseStatus, setDatabaseStatus] = useState(200);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    async function fetchDatabaseStatus() {
      const status = await getDatabaseStatus();
      setDatabaseStatus(status);
    }
    fetchDatabaseStatus();
  }, []);

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (databaseStatus != 200) {
    return (
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          <AlertTitle>API is currently not available!</AlertTitle>
          Check the <Link href="https://status.potterdb.com">
            Status Page
          </Link>{" "}
          for more information.
        </Alert>
      </Snackbar>
    );
  }
  return;
};

export default DatabaseAlert;
