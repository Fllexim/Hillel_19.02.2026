import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const Swapi = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        SWAPI
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          mb: 3,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            px: 2,
            display: "flex",
            alignItems: "center",
            borderRadius: "4px 0 0 4px",
            bgcolor: "#f5f5f5",
          }}
        >
          https://swapi.py4e.com/api/
        </Paper>

        <TextField
          defaultValue="people/1"
          fullWidth
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            borderRadius: "0 4px 4px 0",
            minWidth: 120,
          }}
        >
          Get info
        </Button>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          minHeight: 500,
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
        }}
      >
        {`{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond"
}`}
      </Paper>

      <Button color="warning" variant="contained" sx={{ mt: 2 }}>
        Clear
      </Button>
    </Box>
  );
};

export default Swapi;
