'use client';

import styled from 'styled-components';
import { FloatingNavBar, ThemeContextProvider } from '@xulf/ui';
import { AbsolutleyPositionedContainer } from '@xulf/layouts';

const StyledPage = styled.div`
  .page {
    height: 700vh;
  }
`;

const StyledBackground1a = styled.div`
  position: absolute;
  z-index: 2;
`;

const StyledBackground1b = styled.div`
  position: absolute;
  z-index: 1;
`;

export default function Index() {
  return (
    <ThemeContextProvider>
      <StyledPage>
        {/* NAV BAR */}
        <FloatingNavBar>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Blog</h1>
          <h1>Services</h1>
          <h1>Projects</h1>
        </FloatingNavBar>
        {/* NAV BAR */}

        {/* BACKGROUND */}
        <StyledBackground1a>
          <AbsolutleyPositionedContainer
            svg={'/bg-svgs/geometric-1a.svg'}
          />
        </StyledBackground1a>
        <StyledBackground1b>
          <AbsolutleyPositionedContainer 
            svg={'/bg-svgs/geometric-1b.svg'}
          />
        </StyledBackground1b>
        {/* BACKGROUND */}

        {/* FOREGROUND */}
        {/* FOREGROUND */}
      </StyledPage>
    </ThemeContextProvider>
  );
}
