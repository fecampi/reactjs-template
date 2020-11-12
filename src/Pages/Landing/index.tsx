import React from 'react';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Col from '../../components/Col';
import TextBox from '../../components/TextBox';
import { Elemento } from './styles';

const Landing: React.FC = () => (
  <>
    <Row flex="ts" ml="10px" pt="10px" h="100px">
      <Col flex="top-center" h="1000px">
        <TextBox mt="302px" ml="160px" w="394px" h="490px">
          <h1>titulo</h1>
          <p>texto</p>
        </TextBox>
        <Elemento />
        <Elemento />
      </Col>
      <Elemento />
    </Row>
  </>
);

export default Landing;
