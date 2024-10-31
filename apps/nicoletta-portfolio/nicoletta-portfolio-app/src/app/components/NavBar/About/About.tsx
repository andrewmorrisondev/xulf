import React from 'react';
import styled from 'styled-components';

// Styled Components
const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #ddd; /* Example color */
`;

const StyledHeading = styled.h3`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #fff; /* Example color */
`;

const StyledStrong = styled.strong`
  font-weight: bold;
  color: #fff; /* Strong text color */
`;

const StyledEmphasis = styled.em`
  font-style: italic;
  color: #fff; /* Color for emphasized text */
`;

// AboutInner Component
export const AboutInner = () => {
  return (
    <>
      <StyledParagraph>
        <StyledStrong>Nicoletta Berry</StyledStrong> is a dynamic soprano and producer, shaping a career that blends her passion for classical voice with visionary artistic projects. The 2024-2025 season marks an exciting chapter in her journey.
      </StyledParagraph>
      
      <StyledParagraph>
        In February, she will perform at the Isabella Stewart Gardner Museum in Boston, singing a newly commissioned work by composer Phil Kline. This will be followed by a reprise of New York Festival of Song’s <StyledEmphasis>Tour de France</StyledEmphasis> program, collaborating with beloved artists Steven Blier and Bénédicte Jourdois. Nicoletta is also co-producing and curating <StyledEmphasis>Orpheus//Eurydice</StyledEmphasis>, a groundbreaking program as part of City Lyric Opera’s Baroque Festival, where she will debut a commissioned work by Rebecca Scout Nelson entitled <StyledEmphasis>Eurydice</StyledEmphasis>.
      </StyledParagraph>
      
      <StyledHeading>Recent Performances and Collaborations</StyledHeading>
      <StyledParagraph>
        In 2024, Nicoletta made her Carnegie Hall debut as the soprano soloist in Beethoven’s <StyledEmphasis>Christ on the Mount of Olives</StyledEmphasis> with the Cecilia Chorus of New York, conducted by Mark Shapiro. Soon after, she performed the role of Despina in <StyledEmphasis>Così Fan Tutte</StyledEmphasis> as a young artist with Opera Saratoga. She has also been a frequent collaborator with New York Festival of Song, first appearing as a participant in Caramoor’s Schwab Vocal Rising Star residency.
      </StyledParagraph>

      <StyledHeading>Education and Training</StyledHeading>
      <StyledParagraph>
        Nicoletta graduated from the Manhattan School of Music in 2020 with a Bachelor’s degree in Classical Voice and earned her Master’s degree from the Juilliard School in 2023, where she was a Toulmin Scholar. Throughout her studies at both institutions, Nicoletta trained with the esteemed Marlena Malas, with whom she also worked closely for five years at the Chautauqua Institution.
      </StyledParagraph>
      <StyledParagraph>
        During her time at Chautauqua, she performed roles such as Tytania in Britten’s <StyledEmphasis>A Midsummer Night’s Dream</StyledEmphasis> and Susanna in <StyledEmphasis>Le Nozze di Figaro</StyledEmphasis>.
      </StyledParagraph>
      <StyledParagraph>
        At Juilliard, Nicoletta expanded her artistic repertoire, performing roles like Clizia in Handel’s <StyledEmphasis>Teseo</StyledEmphasis> and Giunone in Luigi Rossi’s <StyledEmphasis>Orfeo</StyledEmphasis>. A highlight of her time there was making her Alice Tully Hall debut in Claude Vivier’s <StyledEmphasis>Lonely Child</StyledEmphasis>, conducted by Barbara Hannigan.
      </StyledParagraph>

      <StyledHeading>Passion for the Arts</StyledHeading>
      <StyledParagraph>
        Nicoletta’s passion for opera and classical music extends beyond performance. As a young professional, she is committed to creating a meaningful impact in the arts. Her work as both a performer and producer reflects a deep belief in the power of these art forms to enrich contemporary culture.
      </StyledParagraph>
      <StyledParagraph>
        Through her innovative projects and collaborations, Nicoletta continues to explore new ways to engage audiences and bring fresh perspectives to the classical music world.
      </StyledParagraph>
    </>
  );
};
