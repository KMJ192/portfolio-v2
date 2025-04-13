import type { ComponentPropsWithoutRef, ElementType } from 'react';

export type BASE_PROPS<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;
