import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import "./footer.css";
const FooterContainer = styled("footer")({
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "2rem 0",
  textAlign: "center",
});

const SocialIcons = styled(Box)({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
});

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/send-email", { email, message });

      setStatus("Email sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Error sending email. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="holdering"
        style={{ backgroundColor: "hsl(87, 48%, 51%)" }}
      >
        <FooterContainer sx={{ background: "transparent" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography className="shwt" variant="h6" gutterBottom>
                  Contact Me
                </Typography>
                <Typography className="shwt" variant="body2">
                  India, Gujarat
                </Typography>
                <Typography className="shwt" variant="body2">
                  Phone: +1 (91) 9427301003
                </Typography>
                <Typography className="shwt" variant="body2">
                  Email: emailhelper468@gmail.com
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Typography className="shwt" variant="h6" gutterBottom>
                  Useful Links
                </Typography>
                <Box>
                  <Link
                    className="shwt"
                    href="http://www.alynor.wiki"
                    color="inherit"
                    target="_blank"
                    underline="hover"
                  >
                    www.alynor.wiki
                  </Link>
                </Box>
                <Box>
                  <Link
                    className="shwt"
                    href="http://dipen.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                  >
                    Download Resume
                  </Link>
                </Box>
                <Box>
                  <Link
                    className="shwt"
                    href="http://codecanvas.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                  >
                    Port-1
                  </Link>
                </Box>
                <Box>
                  <Link
                    className="shwt"
                    href="http://districtintegrateddashboard.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                  >
                    Port-2
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Typography className="shwt" variant="h6" gutterBottom>
                  Send Us an Email
                </Typography>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    className="shwb"
                    label="Your Email Address"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      style: { backgroundColor: "#fff", borderRadius: "4px" },
                    }}
                    required
                  />
                  <TextField
                    className="shwb"
                    label="Message"
                    variant="filled"
                    size="small"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    InputProps={{
                      style: {
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        marginTop: "10px",
                      },
                    }}
                    required
                  />
                  <Button
                    className="shwb"
                    type="submit"
                    variant="contained"
                    color="white"
                    sx={{ mt: 2, backgroundColor: "hsl(87, 43%, 40%)" }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                  {status && (
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {status}
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>

            <SocialIcons>
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                color="inherit"
              >
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
              >
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                href="https://github.com"
                target="_blank"
                color="inherit"
              >
                <GitHub fontSize="large" />
              </IconButton>
            </SocialIcons>

            <Typography variant="body2" sx={{ mt: 2 }} className="shwt">
              © {new Date().getFullYear()} None rights reserved 😅😅
            </Typography>
          </Container>
        </FooterContainer>
      </div>
    </>
  );
};

export default Footer;
