import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Dashboard() {
  return (
    <Box sx={{ width: 1, padding: 3 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6">
          <Paper elevation={3} className={{}}>
            xs=6
          </Paper>
        </Box>

        <Box gridColumn="span 6">
          <Paper elevation={3} className={{}}>
            xs=6
          </Paper>
        </Box>

        <Box gridColumn="span 4">
          <Paper elevation={3} className={{}}>
            xs=6
          </Paper>
        </Box>
        <Box gridColumn="span 4">
          <Paper elevation={3} className={{}}>
            xs=6
          </Paper>
        </Box>
        <Box gridColumn="span 2">
          <Paper elevation={3} className={{}}>
            xs=6
          </Paper>
        </Box>
        <Box gridColumn="span 2">
          <Paper elevation={3} className={{}}>
            xs=6
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
