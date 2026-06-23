import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 4 }}>
          My Portfolio
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/todo">
          TODO
        </Button>

        <Button color="inherit" component={Link} to="/swapi">
          SWAPI
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
