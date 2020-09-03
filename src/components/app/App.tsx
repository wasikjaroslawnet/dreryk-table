import React from 'react';
import styled from 'styled-components';
import {SalariesEmployeesTable} from '../samples/SalariesEmployeesTable';

const StyledApp = styled.div`
  text-align: center;
`;

export function App() {
  return (
    <StyledApp>
      <SalariesEmployeesTable />
    </StyledApp>
  );
}

