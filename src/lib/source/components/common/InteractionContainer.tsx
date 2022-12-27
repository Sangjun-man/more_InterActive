/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";

interface InteractionContainerProps {
  children: Array<React.ReactNode> | React.ReactChild;
  id: string;
}

const InteractionContainer = ({
  children,
  id,
  ...props
}: InteractionContainerProps) => {
  return (
    <Layout id={id} {...props}>
      {children}
    </Layout>
  );
};

export default InteractionContainer;

const Layout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-color: grey;
  width: 100%;
`;
