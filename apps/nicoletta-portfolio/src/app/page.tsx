'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Container, Typography } from '@mui/joy';
import { motion } from 'framer-motion';
import { NavBar } from './components/NavBar/NavBar'


const StyledPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100dvh;

  .background-image {
    position: absolute;
    width: 100vw;
    height: 100dvh;
    overflow: hidden;
    z-index: 1;
  }

  .title {
    color: black;
    z-index: 2;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    
    .title-content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .gif-title {
      width: 28em; /* Adjust based on your design */
      @media (max-width: 31.25em) {
        width: 20em;
      }
      margin-bottom: 1rem; /* Space between gif and h4 */
    }
    h4 {
      transform: translate(-1.5rem, -6rem);
      @media (max-width: 31.25em) {
        transform: translate(-1.5rem,-4.6rem);
        font-size: 0.9rem;
      }
      color: #cccccc;
      margin-top: 1rem; /* Space between the gif and h4 */
    }

    .hero {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background: trans
    }
  }
`;

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return ( 
    <StyledPage>
      {/* BACKGROUND IMAGE */}
      <Image
        className={'background-image'}
        src="/hero@2x.jpg"
        alt="description"
        quality={100} // Optional: Adjust quality (1-100)
        fill // New syntax for making the image fill the container
        style={{ objectFit: 'cover' }} // Ensures the image covers the container without stretching
        priority={true}
      />
      {/* BACKGROUND IMAGE */}

      <Container className="title">
        <div className="title-content">
          <img 
            src="/nicoletta-signature.gif"
            alt="Nicoletta Berry"
            className="gif-title"
          />
          <motion.div
            initial={{ x: '-10vw', opacity: 0 }} // Starts off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Moves to the center of the screen
            transition={{ type: 'spring', stiffness: 100, damping: 40, duration: 1.6}}
            className='subtitle'
          >
            <Typography level="h4" component="h4">
              Soprano | Producer | Curator
            </Typography>
          </motion.div>
        </div>
      </Container>
      <NavBar />
    </StyledPage>
  );
}
