import { Typography, Card, CardContent, List, ListItem } from "@mui/material";

function Home() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Artem
      </Typography>

      <Typography variant="h5" gutterBottom>
        Frontend Developer
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">About me</Typography>

          <Typography>
            I am studying Frontend. I create websites and landing
            pages.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Skills
          </Typography>

          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Git</ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
}

export default Home;
