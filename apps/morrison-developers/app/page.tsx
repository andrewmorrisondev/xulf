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
  svg {
    path {
      fill: var(--background-darker);
    }
  }
`;

const StyledBackground1b = styled.div`
  position: absolute;
  z-index: 1;
  svg {
    path {
      fill: var(--background-dark);
    }
  }
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
            fill={'var(--background-dark)'}
            left={'calc(100vw / 2)'}
            top={'calc(100dvh / 3)'}
          />
        </StyledBackground1a>
        <StyledBackground1b>
          <AbsolutleyPositionedContainer 
            svg={'/bg-svgs/geometric-1b.svg'}
            fill={'var(--background-darker)'}
            left={'calc(100vw / 2)'}
            top={'calc(100dvh / 3)'}
          />
        </StyledBackground1b>
        {/* BACKGROUND */}

        {/* FOREGROUND */}
        {/* FOREGROUND */}
      </StyledPage>
    </ThemeContextProvider>
  );
}
