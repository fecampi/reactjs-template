import styled from 'styled-components';

interface TextBoxProps {
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

export const Content = styled.div<TextBoxProps>`
  max-width: ${props => props.w};
  max-height: ${props => props.h};
  margin-top: ${props => props.mt};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.m};
  margin-right: ${props => props.m};
  padding-top: ${props => props.pt};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
  padding: ${props => props.p};
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  position: relative;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 72px;
    font-weight: 900;
    line-height: 70px;
    text-align: left;
  }

  p {
    margin-top: 72px;
    font-size: 24px;
    line-height: 34px;
    text-align: left;
  }
`;
