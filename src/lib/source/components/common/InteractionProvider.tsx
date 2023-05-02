/** @jsxImportSource @emotion/react */

import React, { useEffect, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import {
  setDisplay,
  setDomHeight,
  setEventHandlers,
  setStorySection,
} from "../../settings";

interface InteractionProviderProps {
  children: Array<React.ReactNode> | React.ReactChild;
  id: string;
}

const InteractionProvider = ({
  children,
  id,
  ...props
}: InteractionProviderProps) => {
  useLayoutEffect(() => {
    setDisplay();
    setEventHandlers();
  }, []);
  useEffect(() => {
    setStorySection();
    setDomHeight(id);
  }, []);
  return (
    <Layout id={id} {...props}>
      {children}
    </Layout>
  );
};

export default InteractionProvider;

const Layout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-color: grey;
  width: 100%;
`;
