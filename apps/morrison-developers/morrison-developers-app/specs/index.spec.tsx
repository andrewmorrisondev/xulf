import React from 'react';
import { render } from '@testing-library/react';

import Page from '../app/page';
import AboutPage from '../app/about/page';
import ServicesPage from '../app/services/page';
import PricingPage from '../app/pricing/page';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});

describe('AboutPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeTruthy();
  });
});

describe('ServicesPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesPage />);
    expect(baseElement).toBeTruthy();
  });
});

describe('PricingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingPage />);
    expect(baseElement).toBeTruthy();
  });
});