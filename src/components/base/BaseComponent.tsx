import React from 'react';
import styled from 'styled-components';
import { BASE_PROPS } from '@/types/types';

type Props<T extends React.ElementType> = BASE_PROPS<T>;

const DEFAULT_ELEMENT = 'div';

type ELEMENT_TYPE = typeof DEFAULT_ELEMENT;

const Container = styled.div<Props<ELEMENT_TYPE>>`
  /* 기본 스타일 */
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  /* 커스텀 스타일을 위한 클래스 */
  &.custom {
    /* 커스텀 스타일 */
  }

  /* 상태별 스타일 */
  &:hover {
    /* 호버 스타일 */
  }

  &:active {
    /* 액티브 스타일 */
  }

  &:disabled {
    /* 비활성화 스타일 */
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

function BaseComponent<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  ...props
}: Props<T>) {
  return <Container {...props}>{children}</Container>;
}

export default BaseComponent;
