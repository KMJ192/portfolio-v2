"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionContainer = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "48px")};
  transition: height 0.3s ease-in-out;
  position: relative;
`;

const AccordionHeader = styled.div`
  padding: 12px 16px;
  background-color: #f5f5f5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;
  height: 48px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "16px" : "0")};
  margin-top: 48px;
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #666;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s;
`;

function Accordion({ title = "title", children, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer $isOpen={isOpen}>
      <AccordionHeader onClick={toggleAccordion}>
        <span>{title}</span>
        <Arrow $isOpen={isOpen} />
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
}

export default Accordion;
