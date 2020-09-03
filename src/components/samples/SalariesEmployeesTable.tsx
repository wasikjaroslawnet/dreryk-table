import React from 'react';
import styled from 'styled-components'
import {Table} from '../table/Table';
import {TableColumnsConfiguration} from '../../types/TableColumnsConfiguration';
import {TableData} from "../../types/TableData";

const StyledTableContainer = styled.div`
  text-align: center;
`;

const StyledTableName = styled.h1`
  font-weight: bold;
`;

const columns: TableColumnsConfiguration = {
    first: {
        name: 'Header 1',
        width: 100
    },
    second: {
        name: 'Header 2',
        width: 250
    },
    third: {
        name: 'Header 3',
        width: 100
    }
};

const data: TableData[] = [{
    first: 'First',
    second: 'Second',
    third: 'Third'
}, {
    first: 'First 2',
    second: 'Second 2',
    third: 'Third 2'
}];

export function SalariesEmployeesTable() {
    return (
        <StyledTableContainer>
            <StyledTableName>Salaries of employees</StyledTableName>
            <Table columnsConfig={columns} data={data}/>
        </StyledTableContainer>
    )
}
