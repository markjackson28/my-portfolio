import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

export default function Projects() {
  return (
    <Container style={{ textAlign: "center", marginTop: "10vh" }}>
      <Typography variant="h3" gutterBottom>My Projects</Typography>
      <Typography variant="h6" color="gray">
        Here are some of my interactive projects.
      </Typography>
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: "#1f1f1f", color: "white" }}>
            <CardContent>
              <Typography variant="h5">Placeholder App 1</Typography>
              <Typography variant="body2" color="gray">Coming soon...</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: "#1f1f1f", color: "white" }}>
            <CardContent>
              <Typography variant="h5">Placeholder App 2</Typography>
              <Typography variant="body2" color="gray">Coming soon...</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
