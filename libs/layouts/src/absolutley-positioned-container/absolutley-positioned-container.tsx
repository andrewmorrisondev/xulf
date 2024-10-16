import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  top?: string;
  left?: string;
}

const StyledAbsolutleyPositionedContainer = styled.div<ContainerProps>`
  position: absolute;
  top: ${(props) => props.top || '0'};
  left: ${(props) => props.left || '0'};
  transform: translate(-50%, -50%);
  overflow: visible;
`;

export interface AbsolutleyPositionedContainerProps extends ContainerProps {
  children?: React.ReactNode;
  svg?: string;
  fill?: string;
}

export function AbsolutleyPositionedContainer({ 
  top, 
  left, 
  children, 
  svg, 
  fill,
}: AbsolutleyPositionedContainerProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (svg) {
      fetch(svg)
        .then((response) => response.text())
        .then((data) => setSvgContent(data));
    }
  }, [svg]);

  return (
    <StyledAbsolutleyPositionedContainer 
      top={top} 
      left={left}
      dangerouslySetInnerHTML={svgContent ? { 
        __html: svgContent.replace(/fill=".*?"/g, `fill="${fill}"`) 
      } : undefined} // Render SVG directly inside the container
    >
      {children}
    </StyledAbsolutleyPositionedContainer>
  );
}

export default AbsolutleyPositionedContainer;
