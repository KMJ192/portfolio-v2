'use client';

import BaseComponent from '@/components/base/BaseComponent';
import React, { useRef } from 'react';

function Page() {
  const elementRef = useRef<HTMLButtonElement>(null);
  return <BaseComponent as='button' ref={elementRef}></BaseComponent>;
}

export default Page;
