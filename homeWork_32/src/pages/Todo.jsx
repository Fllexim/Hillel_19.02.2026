import {
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  List,
  ListItem,
  Box,
} from "@mui/material";

const todos = ["Redux", "React", "JavaScript"];

function Todo() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        TODO
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
        }}
      >
        <Stack direction="row" spacing={2}>
          <TextField fullWidth placeholder="Enter todo..." />

          <Button variant="contained">Add</Button>
        </Stack>
      </Paper>

      <Typography variant="h4" gutterBottom>
        TODOS
      </Typography>

      <List sx={{ p: 0 }}>
        {todos.map((todo) => (
          <Paper
            key={todo}
            elevation={2}
            sx={{
              mb: 2,
              border: "1px solid",
              borderColor: "divider",
              transition: "0.2s",

              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: 4,
              },
            }}
          >
            <ListItem>
              <Typography variant="body1">{todo}</Typography>
            </ListItem>
          </Paper>
        ))}
      </List>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Total: {todos.length}</Typography>
      </Box>
    </>
  );
}

export default Todo;
