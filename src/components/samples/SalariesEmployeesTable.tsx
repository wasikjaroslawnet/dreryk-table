import React from 'react';
import styled from 'styled-components'
import {Table} from '../table/Table';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';

const StyledTableContainer = styled.div`
  text-align: center;
`;

const StyledTableName = styled.h1`
  font-weight: bold;
`;

const columns: TableColumnsConfiguration = [
    {
        name: 'Header 1',
        width: 100
    },
    {
        name: 'Header 2',
        width: 200
    }
];

export function SalariesEmployeesTable() {
    return (
        <StyledTableContainer>
            <StyledTableName>Salaries of employees</StyledTableName>
            <Table columnsConfig={columns} data={null}/>
        </StyledTableContainer>
    )
}
