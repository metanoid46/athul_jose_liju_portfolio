import { Box, Chip, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../../assets/Resume.pdf';
import experienceData from './const/experiencedata';
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
        <div style={{ color: "#DCC196" }}>.</div>

        <Container sx={{ p: 3, mt: 5, ml: { xs: 2, sm: 4, md: 20 }, mr: { xs: 2, sm: 4, md: 60 } }}>
          {/* Experience Section */}
          <p style={{ fontSize: '38px', fontWeight: 'bold' }} data-aos="fade-up">
            Experience
            <hr style={{ color: '#A12C2C' }} />
          </p>
  
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

          {/* Education Section */}
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

          {/* Languages & Frameworks Section */}
          <p style={{ fontSize: '38px', fontWeight: 'bold' }} data-aos="fade-up">
            Languages and Frameworks
            <hr style={{ color: '#A12C2C' }} />
          </p>
          <Box 
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(6, 1fr)', sm: 'repeat(10, 1fr)', md: 'repeat(16, 1fr)' }, 
    gap: 4, 
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%'
  }} 
  data-aos="fade-up"
>
  {languagesAndFrameworks.map((lang, index) => (
    <Box 
      key={index} 
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <img 
        src={lang} 
        alt={`Language ${index}`} 
        style={{ maxWidth: '100%', minWidth: '20px',minHeight:'20px' }} 
      />
    </Box>
  ))}
</Box>


          {/* Resume Link */}
          <br />  
          <br /> 
          <p style={{ marginTop: "10px" }} data-aos="fade-up">
            Need a copy of my <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>??
          </p>
        </Container>
      </>
    );
};

export default About;
