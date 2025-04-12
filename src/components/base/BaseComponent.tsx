import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const StyledBaseComponent = styled.div<Props>`
  /* 기본 스타일 */
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;

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

const BaseComponent: React.FC<Props> = ({
  children,
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <StyledBaseComponent
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </StyledBaseComponent>
  );
};

export default BaseComponent;
