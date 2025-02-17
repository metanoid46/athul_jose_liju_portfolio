import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import Github from '../../assets/github.svg'
import MailIcon from '../../assets/mail.svg'
import LinkedIn from '../../assets/linkedIn.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
export const Home = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, once: false }); // Optional settings: you can modify duration and other parameters
  }, []);

  return (
    <>
      <p style={{ color: "#DCC196" }}>.</p>
      <Container
        sx={{
          p: 2,
          mt: { xs: 10, sm: 15, md: 25 },
          ml: { xs: 2, sm: 4, md: 20 },
          mr: { xs: 2, sm: 4, md: 60 },
        }}
        data-aos="fade-up" // Fade in the container
      >
        <h1 style={{ fontSize: '48px', fontWeight: '800' }} data-aos="fade-down">
          Athul Jose Liju
        </h1>

        <Box component="section" sx={{ mt: 10 }} data-aos="fade-up">
          <Typography
  variant="body1"
  sx={{
    fontSize: { xs: '12px', sm: '16px', md: '20px' }, // Adjust font size based on screen width
    textAlign: 'justify',
    lineHeight: 1.6,
  }}
>
  I’m a <b>UI/UX designer, web developer, and computer science student</b> at the University of Wollongong,
  specializing in <b>AI and Big Data</b>. I have a deep passion for crafting seamless digital experiences that
  not only look great but also feel <b>intuitive and user-friendly</b>. My approach to design and development is
  centered around usability, innovation, and performance—bringing ideas to life through thoughtful design and
  efficient code.
</Typography>

        </Box>

        <Box
          component="section"
          sx={{ mt: 5, display: 'flex', justifyContent: 'flex-start', gap: 2 }}
          data-aos="fade-up" // Fade in the social media icons
        >
         <a href="https://www.linkedin.com/in/athuljoseliju" target="_blank" rel="noopener noreferrer">
  <Button component="span">
    <img src={LinkedIn} alt="LinkedIn" style={{ width: '35px', height: '35px' }} />
  </Button>
</a>
<a href='https://github.com/metanoid46' target='_blank'>
          <Button>
            <img src={Github} alt="GitHub" style={{ width: '35px', height: '35px' }} />
          </Button>
          </a>
          <a   href={`mailto:${"athuljoseliju123@gmail.com"}?subject=${""}&body=${""}`}>
          <Button>
            <img src={MailIcon} alt="mail"   style={{ width: '35px', height: '35px' }}/>
          </Button>
          </a>
        </Box>

        
      </Container>
    </>
  );
};

export default Home;
