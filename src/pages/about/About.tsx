import { Box, Chip, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import experienceData from './const/experiencedata'
import educationData from './const/educationData';
import languagesAndFrameworks from './const/languagesAndFrameworks';



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
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{experience.title}</p>
              <p style={{ fontSize: '20px' }}>{experience.company} | {experience.duration}</p>
              <Typography variant="body1" sx={{ fontSize: '20px', lineHeight: '1.6' }}>
                {experience.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {experience.skills.map((skill, skillIndex) => (
                  <Chip key={skillIndex} label={skill} sx={{ p: 1, m: 1, bgcolor: '#A12C2C', color: '#DCC196', fontSize: '16px' }} />
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
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{educationData.degree}</p>
          <p style={{ fontSize: '20px' }}>
            {educationData.university} | {educationData.duration}<br />
            {educationData.scholarship}
          </p>
        </Box>
  
        <p style={{ fontSize: '38px', fontWeight: 'bold' }} data-aos="fade-up">
          Languages and Frameworks
          <hr style={{ color: '#A12C2C' }} />
        </p>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} data-aos="fade-up">
          {languagesAndFrameworks.map((lang, index) => (
            <img key={index} src={lang} style={{ margin: '5px', width: '50px', height: '50px' }} />
          ))}

      
        </Box>
        <br /> 
          <p style={{marginTop:"10px"}} data-aos="fade-up">
            need a copy of my        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>??
        </p>
      </Container>
      </>
    );
  };
  
  export default About;


