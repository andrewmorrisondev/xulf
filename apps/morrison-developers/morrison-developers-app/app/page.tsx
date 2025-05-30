'use client';

import { Analytics } from "@vercel/analytics/react";
import { UnderConstruction } from '@xulf/ui'

export default function Index() {

  return (
    <>
      <UnderConstruction
        heading="Morrison Developers is Under Construction"
        message="We are working on building cool stuff. Check back soon"
        buttonText="Email Andy"
        contactEmail="andy@morrisondevelopers.com"
      />
      <Analytics />
    </>
  );
}
