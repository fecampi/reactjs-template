import React from 'react';
import { Container } from './styles';

interface RowProps {
  flex?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  m?: string;
  pt?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  p?: string;
  h?: string;
  w?: string;
}

const Row: React.FC<RowProps> = ({
  flex,
  mt,
  ml,
  mr,
  mb,
  m,
  pt,
  pl,
  pr,
  pb,
  p,
  h,
  w,
  children,
}) => (
  <>
    <Container
      flex={flex}
      mt={mt}
      ml={ml}
      mr={mr}
      mb={mb}
      m={m}
      pt={pt}
      pl={pl}
      pr={pr}
      pb={pb}
      p={p}
      h={h}
      w={w}
    >
      {children}
    </Container>
  </>
);

export default Row;
