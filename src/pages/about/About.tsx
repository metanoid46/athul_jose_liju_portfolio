import { Box, Chip, Container, Typography } from '@mui/material';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../../assets/Resume.pdf';
import experienceData from './const/experiencedata'
import educationData from './const/educationData';
import languagesAndFrameworks from './const/languagesAndFrameworks';
import javaLogo from '../../assets/java.svg';
import cppLogo from '../../assets/cpp.svg';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css.svg';
import pythonLogo from '../../assets/python.svg';
import reactLogo from '../../assets/react.svg';
import sqlLogo from '../../assets/sql.svg';
import muiLogo from '../../assets/mui.svg';
import nodeLogo from '../../assets/node-js.svg';
import jsLogo from '../../assets/js.svg';
import nextLogo from '../../assets/next.svg';
import postgreLogo from '../../assets/postgre.svg';
import slackLogo from '../../assets/slack.svg';
import psLogo from '../../assets/ps.svg';
import aiLogo from '../../assets/ai.svg';
import figmaLogo from '../../assets/figma.svg';


export const About = () => {
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000, // Adjust animation speed
        once: false, // Trigger the animation only once
      });
    }, []);
  
    return (
            <>
        <div style={{color:"#DCC196"}}>.</div>

      <Container sx={{ p: 3, mt: 5, ml: { xs: 2, sm: 4, md: 20 }, mr: { xs: 2, sm: 4, md: 60 } }}>
        <p style={{ fontSize: '38px', fontWeight: 'bold' }} data-aos="fade-up">
          Experience
          <hr style={{ color: '#A12C2C' }} />
        </p>
  
        {/* Map over experience data */}
        {experienceData.map((experience, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start', pt: index > 0 ? 5 : 0 }}
            data-aos="fade-up"
          >
            <Box sx={{ mb: { xs: 3, sm: 0 }, mr: { sm: 5 } }}>
            <Typography
  variant="body1"
  sx={{
    fontSize: { xs: '14px', sm: '18px', md: '24px' }, // Adjust font size based on screen width
    textAlign: 'justify',
    lineHeight: 1.6,
    fontWeight:'bold',
  }}>{experience.title}</Typography>
  <br />
              <Typography
  variant="body1"
  sx={{
    fontSize: { xs: '12px', sm: '16px', md: '20px' }, // Adjust font size based on screen width
    textAlign: 'justify',
    lineHeight: 1.6,
  }}>{experience.company} | {experience.duration}</Typography>
  <br />
              <Typography variant="body1" sx={{fontSize: { xs: '12px', sm: '16px', md: '20px' }, lineHeight: '1.6' }}>
                {experience.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {experience.skills.map((skill, skillIndex) => (
                  <Chip key={skillIndex} label={skill} sx={{ p: 1, m: 1, bgcolor: '#A12C2C', color: '#DCC196', fontSize: { xs: '12px', sm: '16px', md: '20px' } }} />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
  
        <p style={{ fontSize: '38px', fontWeight: 'bold' }} data-aos="fade-up">
          Education
          <hr style={{ color: '#A12C2C' }} />
        </p>
        <Box data-aos="fade-up">
        <Typography
  variant="body1"
  sx={{
    fontSize: { xs: '14px', sm: '18px', md: '24px' }, // Adjust font size based on screen width
    textAlign: 'justify',
    lineHeight: 1.6,
    fontWeight:'bold'
  }}>{educationData.degree}</Typography>
                  <Typography
  variant="body1"
  sx={{
    fontSize: { xs: '12px', sm: '16px', md: '20px' }, // Adjust font size based on screen width
    textAlign: 'justify',
    lineHeight: 1.6,
  }}>
            {educationData.university} | {educationData.duration}<br />
            {educationData.scholarship}
          </Typography>
        </Box>
  
        <p style={{ fontSize: '38px', fontWeight: 'bold' }} data-aos="fade-up">
          Languages and Frameworks
          <hr style={{ color: '#A12C2C' }} />
        </p>
            
        <img src={javaLogo} alt="Java Logo" width="35" />
<img src={cppLogo} alt="C++ Logo" width="35" />
<img src={htmlLogo} alt="HTML Logo" width="35" />
<img src={cssLogo} alt="CSS Logo" width="35" />
<img src={pythonLogo} alt="Python Logo" width="35" />
<img src={reactLogo} alt="React Logo" width="35" />
<img src={sqlLogo} alt="SQL Logo" width="35" />
<img src={muiLogo} alt="Material UI Logo" width="35" />
<img src={nodeLogo} alt="Node.js Logo" width="35" />
<img src={jsLogo} alt="JavaScript Logo" width="35" />
<img src={nextLogo} alt="Next.js Logo" width="35" />
<img src={postgreLogo} alt="PostgreSQL Logo" width="35" />
<img src={slackLogo} alt="Slack Logo" width="35" />
<img src={psLogo} alt="Photoshop Logo" width="35" />
<img src={aiLogo} alt="Adobe Illustrator Logo" width="35" />
<img src={figmaLogo} alt="Figma Logo" width="35" />


        <br /> 
          <p style={{marginTop:"10px"}} data-aos="fade-up">
            need a copy of my        <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>??
        </p>
      </Container>
      </>
    );
  };
  
  export default About;


