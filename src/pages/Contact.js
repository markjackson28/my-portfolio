import { Container, Typography, TextField, Button, Box, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <Container style={{ textAlign: "center", marginTop: "20vh" }}>
      <Typography variant="h3" gutterBottom>Contact Me</Typography>
      <Typography variant="h6" color="gray" gutterBottom>
        Feel free to reach out for collaborations or inquiries.
      </Typography>
      <Box component="form" mt={3}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ backgroundColor: "white" }}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ backgroundColor: "white" }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          style={{ backgroundColor: "white" }}
        />
        <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
          Send Message
        </Button>
      </Box>
      <Typography variant="h6" color="gray" style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        You can also connect with me on 
        <Link href="https://www.linkedin.com/in/markjackson28" target="_blank" rel="noopener" color="primary" style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}>
          <LinkedInIcon style={{ marginRight: "5px" }} /> LinkedIn
        </Link>
      </Typography>
    </Container>
  );
}
