import React from 'react';
import styled from 'styled-components';
import {Table} from "../table/Table";

const StyledApp = styled.div`
  text-align: center;
`;

export function App() {
  return (
    <StyledApp>
      <Table columnsConfig={null} data={null}/>
    </StyledApp>
  );
}

