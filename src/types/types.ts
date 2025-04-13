import type {
  ComponentPropsWithoutRef,
  ComponentRef,
  ElementType,
  Ref,
} from 'react';

export type BASE_PROPS<T extends ElementType> = {
  as?: T;
  ref?: Ref<ComponentRef<T>>;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;
