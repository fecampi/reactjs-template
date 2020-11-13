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
    (props.flex === 'col-left-top' ||
      props.flex === 'col-top-left' ||
      props.flex === 'ctl' ||
      props.flex === 'ltc') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: start;

      justify-content: start;
    `}
  ${props =>
    (props.flex === 'col-center-top' ||
      props.flex === 'col-top-center' ||
      props.flex === 'cct' ||
      props.flex === 'ctc') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: top;
    `}
    ${props =>
    (props.flex === 'col-right-top' ||
      props.flex === 'col-top-right' ||
      props.flex === 'crt' ||
      props.flex === 'ctr') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
    `}
    /* bottom */
    ${props =>
    (props.flex === 'col-left-bottom' ||
      props.flex === 'col-bottom-left' ||
      props.flex === 'clb' ||
      props.flex === 'cbl') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
    `}
    ${props =>
    (props.flex === 'col-center-bottom' ||
      props.flex === 'col-bottom-center' ||
      props.flex === 'ccb' ||
      props.flex === 'cbc') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    `}
    ${props =>
    (props.flex === 'col-right-bottom' ||
      props.flex === 'col-bottom-right' ||
      props.flex === 'crb' ||
      props.flex === 'cbr') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    `}
    /* center */
    ${props =>
    (props.flex === 'col-center-center' ||
      props.flex === 'col-center' ||
      props.flex === 'ccc' ||
      props.flex === 'cc') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
    /* space */
    ${props =>
    (props.flex === 'col-left-spaced' ||
      props.flex === 'col-spaced-left' ||
      props.flex === 'cls' ||
      props.flex === 'csl') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    `}
    ${props =>
    (props.flex === 'col-center-spaced' ||
      props.flex === 'col-spaced-center' ||
      props.flex === 'ccs' ||
      props.flex === 'csc') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `}
    ${props =>
    (props.flex === 'col-right-spaced' ||
      props.flex === 'col-spaced-right' ||
      props.flex === 'crs' ||
      props.flex === 'csr') &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    `}
  ${props =>
    (props.flex === 'row-left-top' ||
      props.flex === 'row-top-left' ||
      props.flex === 'rlt' ||
      props.flex === 'rtl') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      justify-content: start;
    `}
  ${props =>
    (props.flex === 'row-center-top' ||
      props.flex === 'row-top-center' ||
      props.flex === 'rct' ||
      props.flex === 'rtc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    `}
  ${props =>
    (props.flex === 'row-right-top' ||
      props.flex === 'row-top-right' ||
      props.flex === 'rrt' ||
      props.flex === 'rtr') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
    `}
  /* bottom */

  ${props =>
    (props.flex === 'row-left-bottom' ||
      props.flex === 'row-bottom-left' ||
      props.flex === 'rlb' ||
      props.flex === 'rbl') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
    `}
  ${props =>
    (props.flex === 'row-center-bottom' ||
      props.flex === 'row-bottom-center' ||
      props.flex === 'rcb' ||
      props.flex === 'rbc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
    `}
  ${props =>
    (props.flex === 'row-right-bottom' ||
      props.flex === 'row-bottom-right' ||
      props.flex === 'rrb' ||
      props.flex === 'rbr') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    `}
  /* center */
  ${props =>
    (props.flex === 'row-center-center' ||
      props.flex === 'row-center' ||
      props.flex === 'rcc' ||
      props.flex === 'rc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}
  /* space */
  ${props =>
    (props.flex === 'row-top-spaced' ||
      props.flex === 'row-spaced-top' ||
      props.flex === 'rts' ||
      props.flex === 'rst') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    `}
  ${props =>
    (props.flex === 'row-center-spaced' ||
      props.flex === 'row-spaced-center' ||
      props.flex === 'rcs' ||
      props.flex === 'rsc') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
  ${props =>
    (props.flex === 'row-bottom-spaced' ||
      props.flex === 'row-spaced-bottom' ||
      props.flex === 'rbs' ||
      props.flex === 'rsb') &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    `}
`;
