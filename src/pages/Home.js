import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container style={{ textAlign: "center", marginTop: "20vh" }}>
      <Typography variant="h3" gutterBottom>Welcome to My Portfolio</Typography>
      <Typography variant="h6" color="gray" gutterBottom>
        A showcase of my work, projects, and journey in software development.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/projects" style={{ marginRight: 10 }}>
          View Projects
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/contact">
          Contact Me
        </Button>
      </Box>
    </Container>
  );
}
