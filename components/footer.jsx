import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  IconButton,
  Paper,
  useMediaQuery,
  Chip,
  Avatar,
  Fade,
  Zoom,
  Collapse,
  Divider,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Description,
  Email,
  Web,
  VideoLibrary,
  Close,
  NavigateBefore,
  NavigateNext,
  PlayArrow,
  Pause,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { styled, keyframes } from "@mui/system";

// Animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-20px);} 
  60% {transform: translateY(-10px);}
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: "hsl(87, 43%, 40%)",
  color: "#fff",
  padding: "3rem 0 0",
  position: "relative",
  overflow: "hidden",
}));

const VideoNotification = styled(Paper)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  padding: theme.spacing(1.5),
  borderRadius: "12px",
  backgroundColor: "hsl(86, 43%, 38%)",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  zIndex: 1100,
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  animation: `${bounce} 2s ease infinite`,
  cursor: "pointer",
}));

const ProjectsNotification = styled(Paper)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10),
  right: theme.spacing(2),
  padding: theme.spacing(1.5),
  borderRadius: "12px",
  backgroundColor: "hsl(86, 43%, 38%)",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  zIndex: 1100,
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  animation: `${bounce} 2s ease infinite`,
  cursor: "pointer",
}));

const VideoBubble = styled(Paper)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  width: "320px",
  height: "220px",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  zIndex: 1000,
  transform: "translateY(0)",
  transition: "all 0.5s ease",
  backgroundColor: "hsl(87, 43%, 40%)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
  },
}));

const VideoControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
  zIndex: 2,
}));

const ProjectBadge = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  left: theme.spacing(1),
  backgroundColor: "hsl(86, 43%, 38%)",
  color: "white",
  fontWeight: "bold",
  zIndex: 1,
}));

const SocialIcons = styled(Box)({
  marginTop: "1.5rem",
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  "& .MuiIconButton-root:hover": {
    animation: `${float} 2s ease-in-out infinite`,
    backgroundColor: "rgba(255, 255, 255, 0.1) !important",
  },
});

const VideoGallerySection = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  // padding: theme.spacing(4, 0),
  marginTop: theme.spacing(4),
}));

const VideoCard = styled(Paper)(({ theme }) => ({
  borderRadius: "0px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  animation: `${fadeIn} 0.5s ease forwards`,
  position: "relative",
  background: "linear-gradient(145deg, #1a1a1a, #2d2d2d)",
  color: "#fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    "& .pay-button": {
      background: "linear-gradient(45deg, #ff8a00, #e52e71)",
      transform: "scale(1.05)",
      boxShadow: "0 5px 15px rgba(229, 46, 113, 0.4)",
    },
    "& .premium-badge": {
      transform: "rotate(5deg) scale(1.1)",
    },
  },

  "& .pay-button": {
    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
    color: "white",
    fontWeight: "bold",
    padding: "12px 24px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(37, 117, 252, 0.3)",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      transition: "all 0.5s ease",
    },
    "&:hover": {
      "&:before": {
        left: "100%",
      },
      boxShadow: "0 8px 20px rgba(37, 117, 252, 0.5)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },

  "& .premium-badge": {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "linear-gradient(45deg, #ffd700, #ff9500)",
    color: "#000",
    padding: "6px 12px",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    zIndex: 1,
  },

  "& .price-tag": {
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: "bold",
    display: "inline-block",
    margin: "10px 0",
    border: "1px solid rgba(255,255,255,0.1)",
    "& span": {
      fontSize: "14px",
      opacity: 0.8,
      marginLeft: "4px",
    },
  },
}));

const ExpandButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "hsl(86, 43%, 38%)",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgba(151, 185, 49, 0.1)",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
    animation: `${float} 2s ease infinite`,
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [showNotification2, setShowNotification2] = useState(true);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const videoLinks = [
    {
      url: "https://github.com/user-attachments/assets/3134d68e-4cd8-48a6-a0bb-26fd14550e87",
      title: "Project Demo 1",
    },
    {
      url: "https://github.com/user-attachments/assets/1bbb40b6-7c62-4acf-8dcc-1f6a8de0b4d1",
      title: "Project Demo 3",
    },
    {
      url: "https://github.com/user-attachments/assets/b9022278-9c21-4593-87c9-d71996262d35",
      title: "Project Demo 4",
    },
    {
      url: "https://github.com/user-attachments/assets/62ae9754-7b7e-4bd3-9943-1dc9323e78f3",
      title: "Project Demo 5",
    },
    {
      url: "https://github.com/user-attachments/assets/199c8390-d342-4a65-83e2-35c2daabfef3",
      title: "Project Demo 6",
    },
    {
      url: "https://github.com/user-attachments/assets/235ad0b8-1b91-4bc7-9a59-2b6d6e483e5a",
      title: "Project Demo 7",
    },
    {
      url: "https://github.com/user-attachments/assets/fe9d6dcf-261d-4b8c-9b54-bf7db2052007",
      title: "Project Demo 8",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
      setShowNotification2(false);
    }, 800000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/send-email", {
        email,
        message,
        to: "pdipen135@gmail.com",
      });
      setStatus("Email sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Error sending email. Please try again later.");
    }
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === videoLinks.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videoLinks.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const displayedVideos = expanded ? videoLinks : videoLinks.slice(0, 3);

  return (
    <>
      <VideoGallerySection>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {displayedVideos.map((video, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <VideoCard
                  elevation={3}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                  {/* <Box sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {video.title}
                    </Typography>
                  </Box> */}
                </VideoCard>
              </Grid>
            ))}
          </Grid>

          {videoLinks.length > 4 && (
            <Box textAlign="center" mt={3}>
              <ExpandButton
                onClick={toggleExpand}
                endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
              >
                {expanded ? "Show Less" : "Show More Videos"}
              </ExpandButton>
            </Box>
          )}
        </Container>
      </VideoGallerySection>
      <FooterContainer>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} /> */}

          {/* Contact and Links Section */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "white" }}
              >
                Get In Touch
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  "& .MuiTextField-root": {
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "8px",
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{ mb: 2 }}
                  required
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.5,
                    // backgroundColor: "#97B931",
                    // backgroundColor: "#55752E",
                    backgroundColor: "#799D4E",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontWeight: "bold",
                    "&:hover": {
                      // backgroundColor: "hsl(86, 43%, 38%)",
                      // backgroundColor: "#55752E",
                      backgroundColor: "#799D4E",
                      border: "1px solid rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  Send Message
                </Button>
                {status && (
                  <Typography variant="body2" sx={{ mt: 1, color: "#ffeb3b" }}>
                    {status}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} md={4} fontFamily={""}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "white" }}
              >
                Quick Links
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Link
                    href="https://github.com/DOodle25"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                    sx={{ mb: 1.5 }}
                  >
                    <Box display="flex" alignItems="center">
                      <GitHub sx={{ mr: 1 }} />
                      GitHub
                    </Box>
                  </Link>
                  <Link
                    href="https://star-one-crm.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                    sx={{ mb: 1.5 }}
                  >
                    CRM Project
                  </Link>
                  <Link
                    href="https://azure-portfolio.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                    sx={{ mb: 1.5 }}
                  >
                    My Portfolio
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link
                    href="https://www.linkedin.com/in/dipen-patel-792296260/"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                    sx={{ mb: 1.5 }}
                  >
                    <Box display="flex" alignItems="center">
                      <LinkedIn sx={{ mr: 1 }} />
                      LinkedIn
                    </Box>
                  </Link>
                  <Link
                    href="https://district-integrated-dashboard.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                    sx={{ mb: 1.5 }}
                  >
                    DID Project
                  </Link>
                  <Link
                    href="https://www.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                    sx={{ mb: 1.5 }}
                  >
                    Domain Hosting
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "white" }}
              >
                Connect With Me
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <SocialIcon
                  href="https://github.com/DOodle25"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <GitHub />
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/in/dipen-patel-792296260/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </SocialIcon>
                <SocialIcon
                  href="mailto:pdipen135@gmail.com"
                  aria-label="Email"
                >
                  <Email />
                </SocialIcon>
                <SocialIcon
                  href="https://azure-portfolio.alynor.wiki"
                  target="_blank"
                  aria-label="Portfolio"
                >
                  <Web />
                </SocialIcon>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#799D4E",
                  border: "1px solid rgba(255,255,255,0.2)",
                  p: 2,
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ mb: 1, display: "flex", alignItems: "center" }}
                >
                  <Email sx={{ mr: 1, fontSize: "1rem" }} />
                  pdipen135@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Description sx={{ mr: 1, fontSize: "1rem" }} />
                  +91 9427301003
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} />

          {/* Copyright Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
              © {new Date().getFullYear()} Dipen Patel. All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.6)", display: "block", mt: 1 }}
            >
              Built with React, Material-UI, and passion.
            </Typography>
          </Box>
        </Container>
        {/* 
        {showNotification && !isMobile && !showVideo && (
          <Zoom in={showNotification} timeout={500}>
            <VideoNotification onClick={() => setShowVideo(true)}>
              <Avatar sx={{ bgcolor: "#97B931" }}>
                <VideoLibrary />
              </Avatar>
              <Typography variant="body2" fontWeight="bold">
                Watch my projects in action!
              </Typography>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                sx={{ color: "white" }}
              >
                <Close fontSize="small" />
              </IconButton>
            </VideoNotification>
          </Zoom>
        )} */}
        {showNotification && !showVideo && (
          <Zoom in={showNotification} timeout={500}>
            <VideoNotification onClick={() => setShowVideo(true)}>
              <Avatar sx={{ bgcolor: "#97B931" }}>
                <VideoLibrary />
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                Watch my projects in action!
                </Typography>

              </Box>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
                sx={{ color: "white" }}
              >
                <Close fontSize="small" />
              </IconButton>
            </VideoNotification>
          </Zoom>
          
        )}
        {/* {showNotification2 && !showVideo && (
          <Zoom in={showNotification2} timeout={500} sx={{ marginBottom: "5rem" }}>
            <ProjectsNotification component="a" href="/projects.html" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <Avatar sx={{ bgcolor: "#97B931" }}>
                <VideoLibrary />
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                All Porojects
                </Typography>

              </Box>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotificationw(false);
                }}
                sx={{ color: "white" }}
              >
                <Close fontSize="small" />
              </IconButton>
            </ProjectsNotification>
          </Zoom>
          
        )} */}

        {showVideo && !isMobile && (
          <VideoBubble elevation={6}>
            <ProjectBadge label={`Project ${currentVideoIndex + 1}`} />
            <iframe
              width="100%"
              height="100%"
              src={`${videoLinks[currentVideoIndex].url}?autoplay=${
                isPlaying ? 1 : 0
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <VideoControls>
              <Box display="flex" alignItems="center">
                <IconButton
                  onClick={handlePrevVideo}
                  size="small"
                  sx={{ color: "white" }}
                >
                  <NavigateBefore />
                </IconButton>
                <IconButton
                  onClick={togglePlayPause}
                  size="small"
                  sx={{ color: "white" }}
                >
                  {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
                <IconButton
                  onClick={handleNextVideo}
                  size="small"
                  sx={{ color: "white" }}
                >
                  <NavigateNext />
                </IconButton>
              </Box>
              <Box display="flex">
                {[0, 1, 2, 3].map((index) => (
                  <Chip
                    key={index}
                    label={index + 1}
                    size="small"
                    onClick={() => handleVideoSelect(index)}
                    sx={{
                      mx: 0.5,
                      bgcolor:
                        currentVideoIndex === index
                          ? "#97B931"
                          : "rgba(255,255,255,0.2)",
                      color: "white",
                      cursor: "pointer",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                    }}
                  />
                ))}
                {videoLinks.length > 4 && (
                  <Chip
                    label={`${videoLinks.length}+`}
                    size="small"
                    sx={{
                      mx: 0.5,
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                )}
              </Box>
              <IconButton
                onClick={() => setShowVideo(false)}
                size="small"
                sx={{ color: "white" }}
              >
                <Close />
              </IconButton>
            </VideoControls>
          </VideoBubble>
        )}
        {/* </Container> */}

        {/* Video Gallery Section */}

        {/* <Box sx={{ backgroundColor: "hsl(86, 43%, 38%)", py: 2, mt: 4 }}>
          <Container maxWidth="lg">
            <Typography
              variant="body2"
              align="center"
              sx={{
                color: "white",
                opacity: 0.8,
                fontStyle: "italic",
              }}
            >
              © {new Date().getFullYear()} Dipen Patel | Built with React and
              Material-UI
            </Typography>
          </Container>
        </Box> */}
      </FooterContainer>
    </>
  );
};

export default Footer;
