import React from 'react';
import styled from 'styled-components'
import {Table} from '../table/Table';
import {TableColumnsConfiguration} from '../table/types/TableColumnsConfiguration';
import data from './data.json';

const StyledTableContainer = styled.div`
  text-align: center;
`;

const StyledTableName = styled.h1`
  font-weight: bold;
`;

const columnsConfig: TableColumnsConfiguration = {
    employee: {
        name: 'Employee',
        width: 300
    },
    september2020: {
        name: 'September 2020',
        width: 100
    },
    october2020: {
        name: 'October 2020',
        width: 100
    },
    november2020: {
        name: 'November 2020',
        width: 100
    },
    december2020: {
        name: 'December 2020',
        width: 100
    }
};

export function SalariesEmployeesTable() {
    return (
        <StyledTableContainer>
            <StyledTableName>Salaries of employees</StyledTableName>
            <Table columnsConfig={columnsConfig} data={data}/>
        </StyledTableContainer>
    )
}
