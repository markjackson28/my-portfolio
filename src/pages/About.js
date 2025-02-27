import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container style={{ textAlign: "center", marginTop: "20vh" }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="h6" color="gray">
        I am a software developer passionate about building web applications.
      </Typography>
    </Container>
  );
}
