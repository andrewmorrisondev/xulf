'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    // Types are out of date, clearTag is not defined.
    // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/65021
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (styledComponentsStyleSheet.instance as any).clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

export type { GrillItem, GrillState, CookData } from './types/grill-types';
export { cookData } from './data/cookData'
export { default as GrillItemCard } from './Components/GrillItem/GrillItem';
export { default as GrillItemForm } from './Components/GrillItemForm/GrillItemForm';
export { default as GrillItemPreview } from './Components/GrillItemPreview/GrillItemPreview';
export { default as Checkpoints } from './Components/Checkpoints/Checkpoints'