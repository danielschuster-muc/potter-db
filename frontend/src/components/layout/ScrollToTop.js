import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";

function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  );
}

export default ScrollToTop;
