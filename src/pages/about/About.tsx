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
          <Typography variant="h4" fontWeight="bold" data-aos="fade-up">
            Experience
          </Typography>
          <hr style={{ color: '#A12C2C' }} />

          {experienceData.map((experience, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start', pt: index > 0 ? 5 : 0 }}
              data-aos="fade-up"
            >
              <Box sx={{ mb: { xs: 3, sm: 0 }, mr: { sm: 5 } }}>
                <Typography variant="h6" fontWeight="bold">{experience.title}</Typography>
                <Typography variant="subtitle1">{experience.company} | {experience.duration}</Typography>
                <Typography variant="body1" sx={{ lineHeight: '1.6' }}>
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
          <Typography variant="h4" fontWeight="bold" mt={5} data-aos="fade-up">
            Education
          </Typography>
          <hr style={{ color: '#A12C2C' }} />
          <Box data-aos="fade-up">
            <Typography variant="h6" fontWeight="bold">{educationData.degree}</Typography>
            <Typography variant="subtitle1">
              {educationData.university} | {educationData.duration}<br />
              {educationData.scholarship}
            </Typography>
          </Box>

          {/* Languages & Frameworks Section */}
          <Typography variant="h4" fontWeight="bold" mt={5} data-aos="fade-up">
            Languages and Frameworks
          </Typography>
          <hr style={{ color: '#A12C2C' }} />
          <br />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '100%',
            }}
            data-aos="fade-up"
          >
            {languagesAndFrameworks.map((lang, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src={lang} 
                  alt={`Language ${index}`} 
                  style={{ width: '100%', maxWidth: '50px', height: 'auto', minWidth: '30px' }} 
                />
              </Box>
            ))}
          </Box>

          {/* Resume Link */}
          <Typography variant="body1" mt={5} data-aos="fade-up">
            Need a copy of my <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>??
          </Typography>
        </Container>
      </>
    );
};

export default About;
