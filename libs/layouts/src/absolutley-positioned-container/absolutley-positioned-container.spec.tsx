import { render } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

import AbsolutleyPositionedContainer from './absolutley-positioned-container';

describe('AbsolutleyPositionedContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AbsolutleyPositionedContainer />);
    expect(baseElement).toBeTruthy();
  });
});
