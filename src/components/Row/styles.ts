import styled, { css } from 'styled-components';

interface ContainerProps {
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

export const Container = styled.div<ContainerProps>`
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
  width: ${props => props.w};
  height: ${props => props.h};
  ${props =>
    (props.flex === 'left-top' ||
      props.flex === 'top-left' ||
      props.flex === 'tl' ||
      props.flex === 'lt') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      justify-content: start;
    `}
  ${props =>
    (props.flex === 'center-top' ||
      props.flex === 'top-center' ||
      props.flex === 'ct' ||
      props.flex === 'tc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    `}
    ${props =>
    (props.flex === 'right-top' ||
      props.flex === 'top-right' ||
      props.flex === 'rt' ||
      props.flex === 'tr') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
    `}
    /* bottom */
    ${props =>
    (props.flex === 'left-bottom' ||
      props.flex === 'bottom-left' ||
      props.flex === 'lb' ||
      props.flex === 'bl') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
    `}
    ${props =>
    (props.flex === 'center-bottom' ||
      props.flex === 'bottom-center' ||
      props.flex === 'cb' ||
      props.flex === 'bc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
    `}
    ${props =>
    (props.flex === 'right-bottom' ||
      props.flex === 'bottom-right' ||
      props.flex === 'rb' ||
      props.flex === 'br') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    `}
    /* center */
    ${props =>
    (props.flex === 'center-center' ||
      props.flex === 'center' ||
      props.flex === 'c' ||
      props.flex === 'cc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}
    /* space */
    ${props =>
    (props.flex === 'top-spaced' ||
      props.flex === 'spaced-top' ||
      props.flex === 'ts' ||
      props.flex === 'st') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    `}
    ${props =>
    (props.flex === 'center-spaced' ||
      props.flex === 'spaced-center' ||
      props.flex === 'cs' ||
      props.flex === 'sc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
    ${props =>
    (props.flex === 'bottom-spaced' ||
      props.flex === 'spaced-bottom' ||
      props.flex === 'bs' ||
      props.flex === 'sb') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    `};
`;
