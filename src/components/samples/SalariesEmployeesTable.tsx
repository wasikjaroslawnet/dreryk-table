import React from 'react';
import styled from 'styled-components'
import {Table} from '../table/Table';

const StyledTableContainer = styled.div`
  text-align: center;
`;

const StyledTableName = styled.h1`
  font-weight: bold;
`;

export function SalariesEmployeesTable() {
    return (
        <StyledTableContainer>
            <StyledTableName>Salaries of employees</StyledTableName>
            <Table columnsConfig={null} data={null}/>
        </StyledTableContainer>
    )
}
