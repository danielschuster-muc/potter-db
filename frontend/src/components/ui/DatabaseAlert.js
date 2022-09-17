import { useEffect, useRef, useState } from "react";
import { Alert, AlertTitle, IconButton, Snackbar } from "@mui/material";
import { Close } from "@mui/icons-material";

import { getDatabaseStatus } from "../../lib/utils";
import Link from "../Link";

const DatabaseAlert = () => {
  const [databaseStatus, setDatabaseStatus] = useState(200);
  const [open, setOpen] = useState(true);
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      const fetchDatabaseStatus = async () => {
        const status = await getDatabaseStatus();
        setDatabaseStatus(status);
      };
      fetchDatabaseStatus();
      return () => (effectRan.current = true);
    }
  }, []);

  const handleClose = (_event, reason) => {
    if (reason !== "clickaway") setOpen(false);
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
          variant="filled"
        >
          <AlertTitle>API is currently not available!</AlertTitle>
          Check the{" "}
          <Link href="https://status.potterdb.com" color="secondary">
            Status Page
          </Link>{" "}
          for more information. <br />
          Code: {databaseStatus}
        </Alert>
      </Snackbar>
    );
  }
  return;
};

export default DatabaseAlert;
