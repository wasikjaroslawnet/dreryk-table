import React from 'react';
import styled from 'styled-components';
import {SalariesEmployeesTable} from '../samples/SalariesEmployeesTable';
import {GlobalErrorBoundary} from '../errorBoundary/GlobalErrorBoundary';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <GlobalErrorBoundary>
          <SalariesEmployeesTable />
      </GlobalErrorBoundary>
    </StyledApp>
  );
}

