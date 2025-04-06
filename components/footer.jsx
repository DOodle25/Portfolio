// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   IconButton,
// } from "@mui/material";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   LinkedIn,
//   GitHub,
// } from "@mui/icons-material";
// import { styled } from "@mui/system";
// import "./footer.css";
// const FooterContainer = styled("footer")({
//   backgroundColor: "#1976d2",
//   color: "#fff",
//   padding: "2rem 0",
//   textAlign: "center",
// });

// const SocialIcons = styled(Box)({
//   marginTop: "1rem",
//   display: "flex",
//   justifyContent: "center",
//   gap: "1rem",
// });

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/api/send-email", { email, message });

//       setStatus("Email sent successfully!");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       setStatus("Error sending email. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div
//         className="holdering"
//                 // style={{ backgroundImage: "url('/layered-steps-haikei.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
//         // style={{ backgroundColor: "hsl(87, 48%, 51%)" }}
//       >
//         <FooterContainer sx={{ background: "transparent" }}>
//           <Container maxWidth="lg">
//             <Grid container spacing={4}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography className="shwt" variant="h6" gutterBottom>
//                   Contact Me
//                 </Typography>
//                 <Typography className="shwt" variant="body2">
//                   India, Gujarat
//                 </Typography>
//                 <Typography className="shwt" variant="body2">
//                   Phone: +1 (91) 9427301003
//                 </Typography>
//                 <Typography className="shwt" variant="body2">
//                   Email: emailhelper468@gmail.com
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography className="shwt" variant="h6" gutterBottom>
//                   Useful Links
//                 </Typography>
//                 <Box>
//                   <Link
//                     className="shwt"
//                     href="http://www.alynor.wiki"
//                     color="inherit"
//                     target="_blank"
//                     underline="hover"
//                   >
//                     www.alynor.wiki
//                   </Link>
//                 </Box>
//                 <Box>
//                   <Link
//                     className="shwt"
//                     href="http://dipen.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                   >
//                     Download Resume
//                   </Link>
//                 </Box>
//                 <Box>
//                   <Link
//                     className="shwt"
//                     href="http://codecanvas.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                   >
//                     Port-1
//                   </Link>
//                 </Box>
//                 <Box>
//                   <Link
//                     className="shwt"
//                     href="http://districtintegrateddashboard.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                   >
//                     Port-2
//                   </Link>
//                 </Box>
//               </Grid>

//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography className="shwt" variant="h6" gutterBottom>
//                   Send Us an Email
//                 </Typography>
//                 <Box
//                   component="form"
//                   noValidate
//                   autoComplete="off"
//                   onSubmit={handleSubmit}
//                 >
//                   <TextField
//                     className="shwb"
//                     label="Your Email Address"
//                     variant="filled"
//                     size="small"
//                     fullWidth
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     InputProps={{
//                       style: { backgroundColor: "#fff", borderRadius: "4px" },
//                     }}
//                     required
//                   />
//                   <TextField
//                     className="shwb"
//                     label="Message"
//                     variant="filled"
//                     size="small"
//                     fullWidth
//                     multiline
//                     rows={4}
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     InputProps={{
//                       style: {
//                         backgroundColor: "#fff",
//                         borderRadius: "4px",
//                         marginTop: "10px",
//                       },
//                     }}
//                     required
//                   />
//                   <Button
//                     className="shwb"
//                     type="submit"
//                     variant="contained"
//                     color="white"
//                     sx={{ mt: 2, backgroundColor: "hsl(87, 43%, 40%)" }}
//                     fullWidth
//                   >
//                     Send Message
//                   </Button>
//                   {status && (
//                     <Typography variant="body2" sx={{ mt: 2 }}>
//                       {status}
//                     </Typography>
//                   )}
//                 </Box>
//               </Grid>
//             </Grid>

//             <SocialIcons>
//               <IconButton
//                 aria-label="Facebook"
//                 href="https://facebook.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <Facebook fontSize="large" />
//               </IconButton>
//               <IconButton
//                 aria-label="Twitter"
//                 href="https://twitter.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <Twitter fontSize="large" />
//               </IconButton>
//               <IconButton
//                 aria-label="Instagram"
//                 href="https://instagram.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <Instagram fontSize="large" />
//               </IconButton>
//               <IconButton
//                 aria-label="LinkedIn"
//                 href="https://linkedin.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <LinkedIn fontSize="large" />
//               </IconButton>
//               <IconButton
//                 aria-label="GitHub"
//                 href="https://github.com"
//                 target="_blank"
//                 color="inherit"
//               >
//                 <GitHub fontSize="large" />
//               </IconButton>
//             </SocialIcons>

//             <Typography variant="body2" sx={{ mt: 2 }} className="shwt">
//               © {new Date().getFullYear()} None rights reserved 😅😅
//             </Typography>
//           </Container>
//         </FooterContainer>
//       </div>
//     </>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   IconButton,
//   Paper,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   GitHub,
//   LinkedIn,
//   Description,
//   Email,
//   Web,
//   VideoLibrary,
// } from "@mui/icons-material";
// import { styled } from "@mui/system";
// import axios from "axios";
// import "./footer.css";

// const FooterContainer = styled("footer")(({ theme }) => ({
//   backgroundColor: "rgba(25, 118, 210, 0.95)",
//   color: "#fff",
//   padding: "3rem 0",
//   textAlign: "center",
//   position: "relative",
//   overflow: "hidden",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "10px",
//     background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
//   },
// }));

// const SocialIcons = styled(Box)({
//   marginTop: "1.5rem",
//   display: "flex",
//   justifyContent: "center",
//   gap: "1.5rem",
// });

// const VideoBubble = styled(Paper)(({ theme }) => ({
//   position: "fixed",
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   width: "300px",
//   height: "200px",
//   borderRadius: "20px",
//   overflow: "hidden",
//   boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//   zIndex: 1000,
//   transform: "translateY(0)",
//   transition: "all 0.5s ease",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "250px",
//     height: "150px",
//     right: theme.spacing(1),
//     bottom: theme.spacing(1),
//   },
// }));

// const VideoGallery = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   gap: theme.spacing(2),
//   justifyContent: "center",
//   marginTop: theme.spacing(4),
//   "& iframe": {
//     borderRadius: "12px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   },
// }));

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");
//   const [showVideo, setShowVideo] = useState(false);
//   const isMobile = useMediaQuery("(max-width:600px)");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/send-email", {
//         email,
//         message,
//         to: "pdipen135@gmail.com",
//       });
//       setStatus("Email sent successfully!");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       setStatus("Error sending email. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowVideo(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const videoLinks = [
//     "https://github.com/user-attachments/assets/66975bbb-fefc-44d0-b6b7-abdacad60603",
//     "https://github.com/user-attachments/assets/2e76e1b5-e38c-40c1-a708-0db12c07f23a",
//     "https://github.com/user-attachments/assets/1bbb40b6-7c62-4acf-8dcc-1f6a8de0b4d1",
//     "https://github.com/user-attachments/assets/b9022278-9c21-4593-87c9-d71996262d35",
//   ];

//   return (
//     <>
//       <FooterContainer>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Contact Me
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                 <Email sx={{ mr: 1 }} />
//                 <Link
//                   href="mailto:pdipen135@gmail.com"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   pdipen135@gmail.com
//                 </Link>
//               </Box>
//               <Typography variant="body2" sx={{ mb: 1 }}>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Web sx={{ mr: 1 }} />
//                   India, Gujarat
//                 </Box>
//               </Typography>
//               <Typography variant="body2">
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Description sx={{ mr: 1 }} />
//                   Phone: +91 9427301003
//                 </Box>
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Projects & Links
//               </Typography>
//               <Grid container spacing={1}>
//                 <Grid item xs={6}>
//                   <Link
//                     href="https://github.com/DOodle25"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     <GitHub sx={{ verticalAlign: "middle", mr: 1 }} />
//                     GitHub
//                   </Link>
//                   <Link
//                     href="https://www.linkedin.com/in/dipen-patel-792296260/"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     <LinkedIn sx={{ verticalAlign: "middle", mr: 1 }} />
//                     LinkedIn
//                   </Link>
//                   <Link
//                     href="https://star-one-crm.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Star One CRM
//                   </Link>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Link
//                     href="https://district-integrated-dashboard.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     DID Frontend
//                   </Link>
//                   <Link
//                     href="https://azure-portfolio.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Portfolio
//                   </Link>
//                   <Link
//                     href="https://www.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Domain Hosting
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Quick Message
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 autoComplete="off"
//                 onSubmit={handleSubmit}
//               >
//                 <TextField
//                   label="Your Email"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   sx={{
//                     mb: 2,
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "4px",
//                   }}
//                   required
//                 />
//                 <TextField
//                   label="Message"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   multiline
//                   rows={3}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   sx={{
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "4px",
//                   }}
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     mt: 2,
//                     backgroundColor: "#ff6d00",
//                     "&:hover": { backgroundColor: "#ff8500" },
//                   }}
//                   fullWidth
//                 >
//                   Send Message
//                 </Button>
//                 {status && (
//                   <Typography variant="body2" sx={{ mt: 1, color: "#ffeb3b" }}>
//                     {status}
//                   </Typography>
//                 )}
//               </Box>
//             </Grid>
//           </Grid>

//           <SocialIcons>
//             <IconButton
//               aria-label="GitHub"
//               href="https://github.com/DOodle25"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <GitHub fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="LinkedIn"
//               href="https://www.linkedin.com/in/dipen-patel-792296260/"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <LinkedIn fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Portfolio"
//               href="https://azure-portfolio.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <Web fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Videos"
//               onClick={() => setShowVideo(!showVideo)}
//               color="inherit"
//               size="large"
//             >
//               <VideoLibrary fontSize="large" />
//             </IconButton>
//           </SocialIcons>

//           {showVideo && !isMobile && (
//             <VideoBubble elevation={6}>
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={videoLinks[0]}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </VideoBubble>
//           )}

//           <Typography
//             variant="body2"
//             sx={{
//               mt: 3,
//               opacity: 0.8,
//               fontStyle: "italic",
//               fontSize: "0.8rem",
//             }}
//           >
//             © {new Date().getFullYear()} Dipen Patel | Built with React and
//             Material-UI
//           </Typography>
//         </Container>
//       </FooterContainer>

//       {/* Video Gallery Section */}
//       <Box sx={{ py: 4, backgroundColor: "#f5f5f5" }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: 700, mb: 4 }}
//           >
//             <VideoLibrary sx={{ verticalAlign: "middle", mr: 2 }} />
//             Project Videos
//           </Typography>
//           <VideoGallery>
//             {videoLinks.map((link, index) => (
//               <iframe
//                 key={index}
//                 width={isMobile ? "100%" : "320"}
//                 height={isMobile ? "200" : "180"}
//                 src={link}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             ))}
//           </VideoGallery>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   IconButton,
//   Paper,
//   useMediaQuery,
//   Chip,
//   Tooltip,
//   Fade,
// } from "@mui/material";
// import {
//   GitHub,
//   LinkedIn,
//   Description,
//   Email,
//   Web,
//   VideoLibrary,
//   Close,
//   NavigateBefore,
//   NavigateNext,
//   PlayArrow,
//   Pause,
// } from "@mui/icons-material";
// import { styled } from "@mui/system";
// import axios from "axios";
// import "./footer.css";

// const FooterContainer = styled("footer")(({ theme }) => ({
//   backgroundColor: "hsl(87, 43%, 40%)",
//   color: "#fff",
//   padding: "3rem 0",
//   textAlign: "center",
//   position: "relative",
//   overflow: "hidden",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "10px",
//     background: "linear-gradient(90deg, #97B931 0%, hsl(86, 43%, 38%) 100%)",
//   },
// }));

// const SocialIcons = styled(Box)({
//   marginTop: "1.5rem",
//   display: "flex",
//   justifyContent: "center",
//   gap: "1.5rem",
// });

// const VideoBubble = styled(Paper)(({ theme }) => ({
//   position: "fixed",
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   width: "320px",
//   height: "220px",
//   borderRadius: "20px",
//   overflow: "hidden",
//   boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//   zIndex: 1000,
//   transform: "translateY(0)",
//   transition: "all 0.5s ease",
//   backgroundColor: "hsl(87, 43%, 40%)",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "280px",
//     height: "180px",
//     right: theme.spacing(1),
//     bottom: theme.spacing(1),
//   },
// }));

// const VideoControls = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   right: 0,
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: theme.spacing(1),
//   background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//   zIndex: 2,
// }));

// const VideoGallery = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   gap: theme.spacing(2),
//   justifyContent: "center",
//   marginTop: theme.spacing(4),
//   "& iframe": {
//     borderRadius: "12px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//     transition: "all 0.3s ease",
//     border: "2px solid hsl(86, 43%, 38%)",
//     "&:hover": {
//       transform: "scale(1.05)",
//       boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
//     },
//   },
// }));

// const VideoThumbnail = styled(Paper)(({ theme, active }) => ({
//   width: "40px",
//   height: "30px",
//   margin: "0 4px",
//   cursor: "pointer",
//   opacity: active ? 1 : 0.6,
//   transition: "all 0.2s ease",
//   overflow: "hidden",
//   "&:hover": {
//     opacity: 1,
//     transform: "scale(1.1)",
//   },
// }));

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");
//   const [showVideo, setShowVideo] = useState(false);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showVideoLabel, setShowVideoLabel] = useState(true);
//   const isMobile = useMediaQuery("(max-width:600px)");

//   const allVideoLinks = [
//     "https://github.com/user-attachments/assets/66975bbb-fefc-44d0-b6b7-abdacad60603",
//     "https://github.com/user-attachments/assets/2e76e1b5-e38c-40c1-a708-0db12c07f23a",
//     "https://github.com/user-attachments/assets/1bbb40b6-7c62-4acf-8dcc-1f6a8de0b4d1",
//     "https://github.com/user-attachments/assets/b9022278-9c21-4593-87c9-d71996262d35",
//     "https://github.com/user-attachments/assets/b755f59b-3684-4793-a5a1-47b5932a1a73",
//     "https://github.com/user-attachments/assets/199c8390-d342-4a65-83e2-35c2daabfef3",
//     "https://github.com/user-attachments/assets/235ad0b8-1b91-4bc7-9a59-2b6d6e483e5a",
//     "https://github.com/user-attachments/assets/fe9d6dcf-261d-4b8c-9b54-bf7db2052007",
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/send-email", {
//         email,
//         message,
//         to: "pdipen135@gmail.com",
//       });
//       setStatus("Email sent successfully!");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       setStatus("Error sending email. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowVideo(true);
//     }, 3000);

//     const labelTimer = setTimeout(() => {
//       setShowVideoLabel(false);
//     }, 5000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(labelTimer);
//     };
//   }, []);

//   const handleNextVideo = () => {
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === allVideoLinks.length - 1 ? 0 : prevIndex + 1
//     );
//     setIsPlaying(true);
//   };

//   const handlePrevVideo = () => {
//     setCurrentVideoIndex((prevIndex) =>
//       prevIndex === 0 ? allVideoLinks.length - 1 : prevIndex - 1
//     );
//     setIsPlaying(true);
//   };

//   const handleVideoSelect = (index) => {
//     setCurrentVideoIndex(index);
//     setIsPlaying(true);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <FooterContainer>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Contact Me
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                 <Email sx={{ mr: 1 }} />
//                 <Link
//                   href="mailto:pdipen135@gmail.com"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   pdipen135@gmail.com
//                 </Link>
//               </Box>
//               <Typography variant="body2" sx={{ mb: 1 }}>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Web sx={{ mr: 1 }} />
//                   India, Gujarat
//                 </Box>
//               </Typography>
//               <Typography variant="body2">
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Description sx={{ mr: 1 }} />
//                   Phone: +91 9427301003
//                 </Box>
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Projects & Links
//               </Typography>
//               <Grid container spacing={1}>
//                 <Grid item xs={6}>
//                   <Link
//                     href="https://github.com/DOodle25"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     <GitHub sx={{ verticalAlign: "middle", mr: 1 }} />
//                     GitHub
//                   </Link>
//                   <Link
//                     href="https://www.linkedin.com/in/dipen-patel-792296260/"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     <LinkedIn sx={{ verticalAlign: "middle", mr: 1 }} />
//                     LinkedIn
//                   </Link>
//                   <Link
//                     href="https://star-one-crm.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Star One CRM
//                   </Link>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Link
//                     href="https://district-integrated-dashboard.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     DID Frontend
//                   </Link>
//                   <Link
//                     href="https://azure-portfolio.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Portfolio
//                   </Link>
//                   <Link
//                     href="https://www.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Domain Hosting
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Quick Message
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 autoComplete="off"
//                 onSubmit={handleSubmit}
//               >
//                 <TextField
//                   label="Your Email"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   sx={{
//                     mb: 2,
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "4px",
//                   }}
//                   required
//                 />
//                 <TextField
//                   label="Message"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   multiline
//                   rows={3}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   sx={{
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "4px",
//                   }}
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     mt: 2,
//                     backgroundColor: "#ff6d00",
//                     "&:hover": { backgroundColor: "#ff8500" },
//                   }}
//                   fullWidth
//                 >
//                   Send Message
//                 </Button>
//                 {status && (
//                   <Typography variant="body2" sx={{ mt: 1, color: "#ffeb3b" }}>
//                     {status}
//                   </Typography>
//                 )}
//               </Box>
//             </Grid>
//           </Grid>

//           <SocialIcons>
//           <IconButton
//               aria-label="GitHub"
//               href="https://github.com/DOodle25"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <GitHub fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="LinkedIn"
//               href="https://www.linkedin.com/in/dipen-patel-792296260/"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <LinkedIn fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Portfolio"
//               href="https://azure-portfolio.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <Web fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Videos"
//               onClick={() => setShowVideo(!showVideo)}
//               color="inherit"
//               size="large"
//             >
//               <VideoLibrary fontSize="large" />
//             </IconButton>
//           </SocialIcons>

//           {showVideo && !isMobile && (
//             <VideoBubble elevation={6}>
//               {showVideoLabel && (
//                 <Fade in={showVideoLabel} timeout={500}>
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       backgroundColor: "rgba(0,0,0,0.7)",
//                       zIndex: 1,
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: "#fff",
//                         textAlign: "center",
//                         px: 2,
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Check out my project videos!
//                     </Typography>
//                   </Box>
//                 </Fade>
//               )}
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={`${allVideoLinks[currentVideoIndex]}?autoplay=${
//                   isPlaying ? 1 : 0
//                 }`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <VideoControls>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <IconButton
//                     onClick={handlePrevVideo}
//                     size="small"
//                     sx={{ color: "#fff" }}
//                   >
//                     <NavigateBefore />
//                   </IconButton>
//                   <IconButton
//                     onClick={togglePlayPause}
//                     size="small"
//                     sx={{ color: "#fff" }}
//                   >
//                     {isPlaying ? <Pause /> : <PlayArrow />}
//                   </IconButton>
//                   <IconButton
//                     onClick={handleNextVideo}
//                     size="small"
//                     sx={{ color: "#fff" }}
//                   >
//                     <NavigateNext />
//                   </IconButton>
//                 </Box>
//                 <Box sx={{ display: "flex", mx: 1 }}>
//                   {allVideoLinks.slice(0, 5).map((_, index) => (
//                     <VideoThumbnail
//                       key={index}
//                       active={index === currentVideoIndex}
//                       onClick={() => handleVideoSelect(index)}
//                     >
//                       <img
//                         src={`${allVideoLinks[index]}/thumbnail`}
//                         alt=""
//                         style={{ width: "100%", height: "100%" }}
//                       />
//                     </VideoThumbnail>
//                   ))}
//                 </Box>
//                 <IconButton
//                   onClick={() => setShowVideo(false)}
//                   size="small"
//                   sx={{ color: "#fff" }}
//                 >
//                   <Close />
//                 </IconButton>
//               </VideoControls>
//             </VideoBubble>
//           )}

//           <Typography
//             variant="body2"
//             sx={{
//               mt: 3,
//               opacity: 0.8,
//               fontStyle: "italic",
//               fontSize: "0.8rem",
//             }}
//           >
//             © {new Date().getFullYear()} Dipen Patel | Built with React and
//             Material-UI
//           </Typography>
//         </Container>
//       </FooterContainer>

//       {/* Video Gallery Section */}
//       <Box sx={{ py: 4, backgroundColor: "#f5f5f5" }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: 700, mb: 4, color: "hsl(86, 43%, 38%)" }}
//           >
//             <VideoLibrary sx={{ verticalAlign: "middle", mr: 2 }} />
//             Project Videos
//           </Typography>
//           <VideoGallery>
//             {allVideoLinks.map((link, index) => (
//               <Box key={index} sx={{ position: "relative" }}>
//                 <iframe
//                   width={isMobile ? "100%" : "320"}
//                   height={isMobile ? "200" : "180"}
//                   src={link}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//                 <Chip
//                   label={`Project ${index + 1}`}
//                   size="small"
//                   sx={{
//                     position: "absolute",
//                     top: 8,
//                     left: 8,
//                     backgroundColor: "hsl(86, 43%, 38%)",
//                     color: "#fff",
//                     fontWeight: "bold",
//                   }}
//                 />
//               </Box>
//             ))}
//           </VideoGallery>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   IconButton,
//   Paper,
//   useMediaQuery,
//   Chip,
//   Avatar,
//   Fade,
//   Zoom,
//   Collapse,
//   Divider,
// } from "@mui/material";
// import {
//   GitHub,
//   LinkedIn,
//   Description,
//   Email,
//   Web,
//   VideoLibrary,
//   Close,
//   NavigateBefore,
//   NavigateNext,
//   PlayArrow,
//   Pause,
//   ExpandMore,
//   ExpandLess,
// } from "@mui/icons-material";
// import { styled, keyframes } from "@mui/system";

// // Animations
// const bounce = keyframes`
//   0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
//   40% {transform: translateY(-20px);}
//   60% {transform: translateY(-10px);}
// `;

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// `;

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Styled Components
// const FooterContainer = styled("footer")(({ theme }) => ({
//   backgroundColor: "hsl(87, 43%, 40%)",
//   color: "#fff",
//   padding: "3rem 0 0",
//   textAlign: "center",
//   position: "relative",
//   overflow: "hidden",
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "10px",
//     background: "linear-gradient(90deg, #97B931 0%, hsl(86, 43%, 38%) 100%)",
//   },
// }));

// const VideoNotification = styled(Paper)(({ theme }) => ({
//   position: "fixed",
//   bottom: theme.spacing(10),
//   right: theme.spacing(2),
//   padding: theme.spacing(1.5),
//   borderRadius: "12px",
//   backgroundColor: "hsl(86, 43%, 38%)",
//   color: "white",
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   zIndex: 1100,
//   boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//   animation: `${bounce} 2s ease infinite`,
//   cursor: "pointer",
// }));

// const VideoBubble = styled(Paper)(({ theme }) => ({
//   position: "fixed",
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   width: "320px",
//   height: "220px",
//   borderRadius: "20px",
//   overflow: "hidden",
//   boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//   zIndex: 1000,
//   transform: "translateY(0)",
//   transition: "all 0.5s ease",
//   backgroundColor: "hsl(87, 43%, 40%)",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
//   },
// }));

// const VideoControls = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   right: 0,
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: theme.spacing(1),
//   background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//   zIndex: 2,
// }));

// const ProjectBadge = styled(Chip)(({ theme }) => ({
//   position: "absolute",
//   top: theme.spacing(1),
//   left: theme.spacing(1),
//   backgroundColor: "hsl(86, 43%, 38%)",
//   color: "white",
//   fontWeight: "bold",
//   zIndex: 1,
// }));

// const SocialIcons = styled(Box)({
//   marginTop: "1.5rem",
//   display: "flex",
//   justifyContent: "center",
//   gap: "1.5rem",
//   "& .MuiIconButton-root:hover": {
//     animation: `${float} 2s ease-in-out infinite`,
//     backgroundColor: "rgba(255, 255, 255, 0.1) !important",
//   },
// });

// const VideoGallerySection = styled(Box)(({ theme }) => ({
//   backgroundColor: "#f8f9fa",
//   padding: theme.spacing(4, 0),
//   marginTop: theme.spacing(4),
// }));

// const VideoCard = styled(Paper)(({ theme }) => ({
//   borderRadius: "12px",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   animation: `${fadeIn} 0.5s ease forwards`,
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
//   },
// }));

// const ExpandButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   color: "hsl(86, 43%, 38%)",
//   fontWeight: "bold",
//   "&:hover": {
//     backgroundColor: "rgba(151, 185, 49, 0.1)",
//   },
// }));

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");
//   const [showVideo, setShowVideo] = useState(false);
//   const [showNotification, setShowNotification] = useState(true);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [expanded, setExpanded] = useState(false);
//   const isMobile = useMediaQuery("(max-width:600px)");

//   const videoLinks = [
//     {
//       url: "https://github.com/user-attachments/assets/66975bbb-fefc-44d0-b6b7-abdacad60603",
//       title: "Project Demo 1",
//     },
//     {
//       url: "https://github.com/user-attachments/assets/2e76e1b5-e38c-40c1-a708-0db12c07f23a",
//       title: "Project Demo 2",
//     },
//     {
//       url: "https://github.com/user-attachments/assets/1bbb40b6-7c62-4acf-8dcc-1f6a8de0b4d1",
//       title: "Project Demo 3",
//     },
//     {
//       url: "https://github.com/user-attachments/assets/b9022278-9c21-4593-87c9-d71996262d35",
//       title: "Project Demo 4",
//     },
//     {
//       url: "https://github.com/user-attachments/assets/b755f59b-3684-4793-a5a1-47b5932a1a73",
//       title: "Project Demo 5",
//     },
//     {
//       url: "https://github.com/user-attachments/assets/199c8390-d342-4a65-83e2-35c2daabfef3",
//       title: "Project Demo 6",
//     },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowNotification(false);
//     }, 800000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/send-email", {
//         email,
//         message,
//         to: "pdipen135@gmail.com",
//       });
//       setStatus("Email sent successfully!");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       setStatus("Error sending email. Please try again later.");
//     }
//   };

//   const handleNextVideo = () => {
//     setCurrentVideoIndex((prev) => (prev === videoLinks.length - 1 ? 0 : prev + 1));
//     setIsPlaying(true);
//   };

//   const handlePrevVideo = () => {
//     setCurrentVideoIndex((prev) => (prev === 0 ? videoLinks.length - 1 : prev - 1));
//     setIsPlaying(true);
//   };

//   const handleVideoSelect = (index) => {
//     setCurrentVideoIndex(index);
//     setIsPlaying(true);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const displayedVideos = expanded ? videoLinks : videoLinks.slice(0, 4);

//   return (
//     <>
//       <FooterContainer>
//         <Container maxWidth="lg">
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Contact Me
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                 <Email sx={{ mr: 1 }} />
//                 <Link
//                   href="mailto:pdipen135@gmail.com"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   pdipen135@gmail.com
//                 </Link>
//               </Box>
//               <Typography variant="body2" sx={{ mb: 1 }}>
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Web sx={{ mr: 1 }} />
//                   India, Gujarat
//                 </Box>
//               </Typography>
//               <Typography variant="body2">
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Description sx={{ mr: 1 }} />
//                   Phone: +91 9427301003
//                 </Box>
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Projects & Links
//               </Typography>
//               <Grid container spacing={1}>
//                 <Grid item xs={6}>
//                   <Link
//                     href="https://github.com/DOodle25"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     <GitHub sx={{ verticalAlign: "middle", mr: 1 }} />
//                     GitHub
//                   </Link>
//                   <Link
//                     href="https://www.linkedin.com/in/dipen-patel-792296260/"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     <LinkedIn sx={{ verticalAlign: "middle", mr: 1 }} />
//                     LinkedIn
//                   </Link>
//                   <Link
//                     href="https://star-one-crm.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Star One CRM
//                   </Link>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Link
//                     href="https://district-integrated-dashboard.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     DID Frontend
//                   </Link>
//                   <Link
//                     href="https://azure-portfolio.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Portfolio
//                   </Link>
//                   <Link
//                     href="https://www.alynor.wiki"
//                     target="_blank"
//                     color="inherit"
//                     underline="hover"
//                     display="block"
//                   >
//                     Domain Hosting
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
//                 Quick Message
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 autoComplete="off"
//                 onSubmit={handleSubmit}
//               >
//                 <TextField
//                   label="Your Email"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   sx={{
//                     mb: 2,
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "4px",
//                   }}
//                   required
//                 />
//                 <TextField
//                   label="Message"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   multiline
//                   rows={3}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   sx={{
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "4px",
//                   }}
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     mt: 2,
//                     backgroundColor: "#97B931",
//                     "&:hover": { backgroundColor: "hsl(86, 43%, 38%)" },
//                   }}
//                   fullWidth
//                 >
//                   Send Message
//                 </Button>
//                 {status && (
//                   <Typography variant="body2" sx={{ mt: 1, color: "#ffeb3b" }}>
//                     {status}
//                   </Typography>
//                 )}
//               </Box>
//             </Grid>
//           </Grid>

//           <SocialIcons>
//             <IconButton
//               aria-label="GitHub"
//               href="https://github.com/DOodle25"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <GitHub fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="LinkedIn"
//               href="https://www.linkedin.com/in/dipen-patel-792296260/"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <LinkedIn fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Portfolio"
//               href="https://azure-portfolio.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               size="large"
//             >
//               <Web fontSize="large" />
//             </IconButton>
//             <IconButton
//               aria-label="Videos"
//               onClick={() => {
//                 setShowVideo(true);
//                 setShowNotification(false);
//               }}
//               color="inherit"
//               size="large"
//             >
//               <VideoLibrary fontSize="large" />
//             </IconButton>
//           </SocialIcons>

//           {showNotification && !isMobile && !showVideo && (
//             <Zoom in={showNotification} timeout={500}>
//               <VideoNotification onClick={() => setShowVideo(true)}>
//                 <Avatar sx={{ bgcolor: "#97B931" }}>
//                   <VideoLibrary />
//                 </Avatar>
//                 <Typography variant="body2" fontWeight="bold">
//                   Watch my projects in action!
//                 </Typography>
//                 <IconButton
//                   size="small"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setShowNotification(false);
//                   }}
//                   sx={{ color: "white" }}
//                 >
//                   <Close fontSize="small" />
//                 </IconButton>
//               </VideoNotification>
//             </Zoom>
//           )}

//           {showVideo && !isMobile && (
//             <VideoBubble elevation={6}>
//               <ProjectBadge label={`Project ${currentVideoIndex + 1}`} />
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={`${videoLinks[currentVideoIndex].url}?autoplay=${isPlaying ? 1 : 0}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//               <VideoControls>
//                 <Box display="flex" alignItems="center">
//                   <IconButton onClick={handlePrevVideo} size="small" sx={{ color: "white" }}>
//                     <NavigateBefore />
//                   </IconButton>
//                   <IconButton onClick={togglePlayPause} size="small" sx={{ color: "white" }}>
//                     {isPlaying ? <Pause /> : <PlayArrow />}
//                   </IconButton>
//                   <IconButton onClick={handleNextVideo} size="small" sx={{ color: "white" }}>
//                     <NavigateNext />
//                   </IconButton>
//                 </Box>
//                 <Box display="flex">
//                   {[0, 1, 2, 3].map((index) => (
//                     <Chip
//                       key={index}
//                       label={index + 1}
//                       size="small"
//                       onClick={() => handleVideoSelect(index)}
//                       sx={{
//                         mx: 0.5,
//                         bgcolor: currentVideoIndex === index ? "#97B931" : "rgba(255,255,255,0.2)",
//                         color: "white",
//                         cursor: "pointer",
//                         "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
//                       }}
//                     />
//                   ))}
//                   {videoLinks.length > 4 && (
//                     <Chip
//                       label={`${videoLinks.length}+`}
//                       size="small"
//                       sx={{
//                         mx: 0.5,
//                         bgcolor: "rgba(255,255,255,0.1)",
//                         color: "white",
//                       }}
//                     />
//                   )}
//                 </Box>
//                 <IconButton
//                   onClick={() => setShowVideo(false)}
//                   size="small"
//                   sx={{ color: "white" }}
//                 >
//                   <Close />
//                 </IconButton>
//               </VideoControls>
//             </VideoBubble>
//           )}
//         </Container>

//         {/* Video Gallery Section */}
//         <VideoGallerySection>
//           <Container maxWidth="lg">
//             <Typography
//               variant="h4"
//               align="center"
//               gutterBottom
//               sx={{
//                 fontWeight: 700,
//                 color: "hsl(86, 43%, 38%)",
//                 mb: 4,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <VideoLibrary sx={{ mr: 2 }} />
//               Project Videos
//             </Typography>

//             <Grid container spacing={3} justifyContent="center">
//               {displayedVideos.map((video, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <VideoCard elevation={3} style={{ animationDelay: `${index * 0.1}s` }}>
//                     <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
//                       <iframe
//                         width="100%"
//                         height="100%"
//                         src={video.url}
//                         title={video.title}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         style={{
//                           position: "absolute",
//                           top: 0,
//                           left: 0,
//                           width: "100%",
//                           height: "100%",
//                         }}
//                       />
//                     </Box>
//                     <Box sx={{ p: 2 }}>
//                       <Typography variant="subtitle1" fontWeight="bold">
//                         {video.title}
//                       </Typography>
//                     </Box>
//                   </VideoCard>
//                 </Grid>
//               ))}
//             </Grid>

//             {videoLinks.length > 4 && (
//               <Box textAlign="center" mt={3}>
//                 <ExpandButton
//                   onClick={toggleExpand}
//                   endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
//                 >
//                   {expanded ? "Show Less" : "Show More Videos"}
//                 </ExpandButton>
//               </Box>
//             )}
//           </Container>
//         </VideoGallerySection>

//         <Box sx={{ backgroundColor: "hsl(86, 43%, 38%)", py: 2, mt: 4 }}>
//           <Container maxWidth="lg">
//             <Typography
//               variant="body2"
//               align="center"
//               sx={{
//                 color: "white",
//                 opacity: 0.8,
//                 fontStyle: "italic",
//               }}
//             >
//               © {new Date().getFullYear()} Dipen Patel | Built with React and Material-UI
//             </Typography>
//           </Container>
//         </Box>
//       </FooterContainer>
//     </>
//   );
// };

// export default Footer;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   IconButton,
//   Paper,
//   useMediaQuery,
//   Chip,
//   Avatar,
//   Fade,
//   Zoom,
//   Divider,
// } from "@mui/material";
// import {
//   GitHub,
//   LinkedIn,
//   Description,
//   Email,
//   Web,
//   VideoLibrary,
//   Close,
//   NavigateBefore,
//   NavigateNext,
//   PlayArrow,
//   Pause,
//   ExpandMore,
//   ExpandLess,
// } from "@mui/icons-material";
// import { styled, keyframes, margin } from "@mui/system";

// // Animations
// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-8px); }
//   100% { transform: translateY(0px); }
// `;

// const gradientBG = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Styled Components
// const FooterContainer = styled("footer")(({ theme }) => ({
//   background: "linear-gradient(-45deg, hsl(87, 43%, 40%), hsl(86, 43%, 38%), #97B931, #83a82a)",
//   backgroundSize: "400% 400%",
//   animation: `${gradientBG} 15s ease infinite`,
//   color: "#fff",
//   position: "relative",
//   overflow: "hidden",
//   // "&:before": {
//   //   content: '""',
//   //   position: "absolute",
//   //   top: 0,
//   //   left: 0,
//   //   right: 0,
//   //   height: "4px",
//   //   background: "linear-gradient(90deg, #97B931, hsl(86, 43%, 38%), #97B931)",
//   // },
//   maxWidth: "90%",
//   alignContent: "center",
//   margin: "auto",
//   borderRadius: "16px",
//   padding: "3rem 0 0",
//   marginTop: "1.5rem",
//   marginBottom: "1.5rem",
// }));

// const VideoCard = styled(Paper)(({ theme }) => ({
//   borderRadius: "16px",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   animation: `${fadeIn} 0.5s ease forwards`,
//   boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
//   border: "1px solid rgba(255,255,255,0.2)",
//   backdropFilter: "blur(10px)",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
//   },
// }));

// const SocialIcon = styled(IconButton)(({ theme }) => ({
//   backgroundColor: "rgba(255,255,255,0.1)",
//   border: "1px solid rgba(255,255,255,0.2)",
//   "&:hover": {
//     backgroundColor: "rgba(255,255,255,0.2)",
//     animation: `${float} 2s ease infinite`,
//   },
// }));

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");
//   const [expanded, setExpanded] = useState(false);
//   const isMobile = useMediaQuery("(max-width:600px)");

//   const videoLinks = [
//     {
//       url: "https://github.com/user-attachments/assets/66975bbb-fefc-44d0-b6b7-abdacad60603",
//       title: "CRM System Demo",
//       tags: ["React", "Node.js", "MongoDB"],
//     },
//     {
//       url: "https://github.com/user-attachments/assets/2e76e1b5-e38c-40c1-a708-0db12c07f23a",
//       title: "Dashboard Walkthrough",
//       tags: ["Django", "Chart.js", "React"],
//     },
//     {
//       url: "https://github.com/user-attachments/assets/1bbb40b6-7c62-4acf-8dcc-1f6a8de0b4d1",
//       title: "Code Canvas Preview",
//       tags: ["MERN Stack", "Azure"],
//     },
//     {
//       url: "https://github.com/user-attachments/assets/b9022278-9c21-4593-87c9-d71996262d35",
//       title: "SyncUP Messaging",
//       tags: ["Socket.io", "React"],
//     },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/send-email", {
//         email,
//         message,
//         to: "pdipen135@gmail.com",
//       });
//       setStatus("Email sent successfully!");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       setStatus("Error sending email. Please try again later.");
//     }
//   };

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const displayedVideos = expanded ? videoLinks : videoLinks.slice(0, isMobile ? 2 : 4);

//   return (
// <FooterContainer>
//   <Container maxWidth="lg" sx={{ py: 6 }}>
//     {/* Video Gallery Section */}
//     {/* <Box sx={{ mb: 6 }}>
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{
//           fontWeight: 800,
//           color: "white",
//           mb: 4,
//           textShadow: "0 2px 8px rgba(0,0,0,0.2)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <VideoLibrary sx={{ mr: 2, fontSize: "2.5rem" }} />
//         Project Showcase
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {displayedVideos.map((video, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <VideoCard elevation={3} style={{ animationDelay: `${index * 0.1}s` }}>
//               <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={video.url}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                   }}
//                 />
//               </Box>
//               <Box sx={{ p: 2.5, backgroundColor: "rgba(0,0,0,0.3)" }}>
//                 <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//                   {video.title}
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                   {video.tags.map((tag, i) => (
//                     <Chip
//                       key={i}
//                       label={tag}
//                       size="small"
//                       sx={{
//                         backgroundColor: "rgba(255,255,255,0.15)",
//                         color: "white",
//                         fontSize: "0.7rem",
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </VideoCard>
//           </Grid>
//         ))}
//       </Grid>

//       {videoLinks.length > 4 && (
//         <Box textAlign="center" mt={4}>
//           <Button
//             onClick={toggleExpand}
//             endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
//             sx={{
//               color: "white",
//               fontWeight: "bold",
//               "&:hover": {
//                 backgroundColor: "rgba(255,255,255,0.1)",
//               },
//             }}
//           >
//             {expanded ? "Show Less" : "Show More Projects"}
//           </Button>
//         </Box>
//       )}
//     </Box> */}

//     {/* <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} /> */}

//     {/* Contact and Links Section */}
//     <Grid container spacing={4}>
//       <Grid item xs={12} md={4}>
//         <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "white" }}>
//           Get In Touch
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             "& .MuiTextField-root": {
//               backgroundColor: "rgba(255,255,255,0.9)",
//               borderRadius: "8px",
//             },
//           }}
//         >
//           <TextField
//             fullWidth
//             label="Your Email"
//             variant="outlined"
//             size="small"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{ mb: 2 }}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Message"
//             variant="outlined"
//             size="small"
//             multiline
//             rows={3}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             sx={{ mb: 2 }}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               py: 1.5,
//               backgroundColor: "#97B931",
//               fontWeight: "bold",
//               "&:hover": {
//                 backgroundColor: "hsl(86, 43%, 38%)",
//               },
//             }}
//           >
//             Send Message
//           </Button>
//           {status && (
//             <Typography variant="body2" sx={{ mt: 1, color: "#ffeb3b" }}>
//               {status}
//             </Typography>
//           )}
//         </Box>
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "white" }}>
//           Quick Links
//         </Typography>
//         <Grid container spacing={1}>
//           <Grid item xs={6}>
//             <Link
//               href="https://github.com/DOodle25"
//               target="_blank"
//               color="inherit"
//               underline="hover"
//               display="block"
//               sx={{ mb: 1.5 }}
//             >
//               <Box display="flex" alignItems="center">
//                 <GitHub sx={{ mr: 1 }} />
//                 GitHub
//               </Box>
//             </Link>
//             <Link
//               href="https://star-one-crm.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               underline="hover"
//               display="block"
//               sx={{ mb: 1.5 }}
//             >
//               CRM Project
//             </Link>
//             <Link
//               href="https://azure-portfolio.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               underline="hover"
//               display="block"
//               sx={{ mb: 1.5 }}
//             >
//               My Portfolio
//             </Link>
//           </Grid>
//           <Grid item xs={6}>
//             <Link
//               href="https://www.linkedin.com/in/dipen-patel-792296260/"
//               target="_blank"
//               color="inherit"
//               underline="hover"
//               display="block"
//               sx={{ mb: 1.5 }}
//             >
//               <Box display="flex" alignItems="center">
//                 <LinkedIn sx={{ mr: 1 }} />
//                 LinkedIn
//               </Box>
//             </Link>
//             <Link
//               href="https://district-integrated-dashboard.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               underline="hover"
//               display="block"
//               sx={{ mb: 1.5 }}
//             >
//               DID Project
//             </Link>
//             <Link
//               href="https://www.alynor.wiki"
//               target="_blank"
//               color="inherit"
//               underline="hover"
//               display="block"
//               sx={{ mb: 1.5 }}
//             >
//               Domain Hosting
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "white" }}>
//           Connect With Me
//         </Typography>
//         <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//           <SocialIcon
//             href="https://github.com/DOodle25"
//             target="_blank"
//             aria-label="GitHub"
//           >
//             <GitHub />
//           </SocialIcon>
//           <SocialIcon
//             href="https://www.linkedin.com/in/dipen-patel-792296260/"
//             target="_blank"
//             aria-label="LinkedIn"
//           >
//             <LinkedIn />
//           </SocialIcon>
//           <SocialIcon
//             href="mailto:pdipen135@gmail.com"
//             aria-label="Email"
//           >
//             <Email />
//           </SocialIcon>
//           <SocialIcon
//             href="https://azure-portfolio.alynor.wiki"
//             target="_blank"
//             aria-label="Portfolio"
//           >
//             <Web />
//           </SocialIcon>
//         </Box>

//         <Box sx={{ backgroundColor: "rgba(0,0,0,0.2)", p: 2, borderRadius: "8px" }}>
//           <Typography variant="body2" sx={{ mb: 1, display: "flex", alignItems: "center" }}>
//             <Email sx={{ mr: 1, fontSize: "1rem" }} />
//             pdipen135@gmail.com
//           </Typography>
//           <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
//             <Description sx={{ mr: 1, fontSize: "1rem" }} />
//             +91 9427301003
//           </Typography>
//         </Box>
//       </Grid>
//     </Grid>

//     <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 4 }} />

//     {/* Copyright Section */}
//     <Box sx={{ textAlign: "center" }}>
//       <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
//         © {new Date().getFullYear()} Dipen Patel. All rights reserved.
//       </Typography>
//       <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", display: "block", mt: 1 }}>
//         Built with React, Material-UI, and passion.
//       </Typography>
//     </Box>
//   </Container>
// </FooterContainer>
//   );
// };

// export default Footer;

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
  // textAlign: "center",
  position: "relative",
  overflow: "hidden",
  // "&:before": {
  //   content: '""',
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   height: "10px",
  //   background: "linear-gradient(90deg, #97B931 0%, hsl(86, 43%, 38%) 100%)",
  // },
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

// const VideoCard = styled(Paper)(({ theme }) => ({
//   // borderRadius: "12px",
//   borderRadius: "0px",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   animation: `${fadeIn} 0.5s ease forwards`,
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
//   },
// }));

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
    }
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
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
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
    }
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
      marginLeft: "4px"
    }
  }
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const videoLinks = [
    {
      url: "https://github.com/user-attachments/assets/66975bbb-fefc-44d0-b6b7-abdacad60603",
      title: "Project Demo 1",
    },
    {
      url: "https://github.com/user-attachments/assets/2e76e1b5-e38c-40c1-a708-0db12c07f23a",
      title: "Project Demo 2",
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
      url: "https://github.com/user-attachments/assets/b755f59b-3684-4793-a5a1-47b5932a1a73",
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
    }
    //     "https://github.com/user-attachments/assets/66975bbb-fefc-44d0-b6b7-abdacad60603",
//     "https://github.com/user-attachments/assets/2e76e1b5-e38c-40c1-a708-0db12c07f23a",
//     "https://github.com/user-attachments/assets/1bbb40b6-7c62-4acf-8dcc-1f6a8de0b4d1",
//     "https://github.com/user-attachments/assets/b9022278-9c21-4593-87c9-d71996262d35",
//     "https://github.com/user-attachments/assets/b755f59b-3684-4793-a5a1-47b5932a1a73",
//     "https://github.com/user-attachments/assets/199c8390-d342-4a65-83e2-35c2daabfef3",
//     "https://github.com/user-attachments/assets/235ad0b8-1b91-4bc7-9a59-2b6d6e483e5a",
//     "https://github.com/user-attachments/assets/fe9d6dcf-261d-4b8c-9b54-bf7db2052007",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
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
          {/* <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "hsl(86, 43%, 38%)",
                mb: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <VideoLibrary sx={{ mr: 2 }} />
              Project Videos
            </Typography> */}

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
                  // backgroundColor: "rgba(0,0,0,0.2)",
                  // backgroundColor: "#88A861",
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
        {/* </FooterContainer> */}

        {/* <FooterContainer> */}
        {/* <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Contact Me
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Email sx={{ mr: 1 }} />
                <Link
                  href="mailto:pdipen135@gmail.com"
                  color="inherit"
                  underline="hover"
                >
                  pdipen135@gmail.com
                </Link>
              </Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Web sx={{ mr: 1 }} />
                  India, Gujarat
                </Box>
              </Typography>
              <Typography variant="body2">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Description sx={{ mr: 1 }} />
                  Phone: +91 9427301003
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Projects & Links
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Link
                    href="https://github.com/DOodle25"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                  >
                    <GitHub sx={{ verticalAlign: "middle", mr: 1 }} />
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/dipen-patel-792296260/"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                  >
                    <LinkedIn sx={{ verticalAlign: "middle", mr: 1 }} />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://star-one-crm.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                  >
                    Star One CRM
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link
                    href="https://district-integrated-dashboard.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                  >
                    DID Frontend
                  </Link>
                  <Link
                    href="https://azure-portfolio.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="https://www.alynor.wiki"
                    target="_blank"
                    color="inherit"
                    underline="hover"
                    display="block"
                  >
                    Domain Hosting
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                Quick Message
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Your Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "4px",
                  }}
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "4px",
                  }}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#97B931",
                    "&:hover": { backgroundColor: "hsl(86, 43%, 38%)" },
                  }}
                  fullWidth
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
          </Grid>

          <SocialIcons>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/DOodle25"
              target="_blank"
              color="inherit"
              size="large"
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/dipen-patel-792296260/"
              target="_blank"
              color="inherit"
              size="large"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Portfolio"
              href="https://azure-portfolio.alynor.wiki"
              target="_blank"
              color="inherit"
              size="large"
            >
              <Web fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Videos"
              onClick={() => {
                setShowVideo(true);
                setShowNotification(false);
              }}
              color="inherit"
              size="large"
            >
              <VideoLibrary fontSize="large" />
            </IconButton>
          </SocialIcons> */}

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
        )}

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
