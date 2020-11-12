import React from 'react';

import { Content } from './styles';

interface TextBoxProps {
  h?: string;
  w?: string;
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
}

const TextBox: React.FC<TextBoxProps> = ({
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
  <div>
    <Content
      w={w}
      h={h}
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
    >
      {children}
    </Content>
  </div>
);

export default TextBox;
