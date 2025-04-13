'use client';

import { useRef } from 'react';
import styles from './page.module.css';
import BaseComponent from '@/components/base/BaseComponent';

export default function Home() {
  const element = useRef<HTMLElement>(null);

  return <div className={styles.page}></div>;
}
