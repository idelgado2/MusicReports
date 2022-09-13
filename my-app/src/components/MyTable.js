import React, { useMemo, useEffect, useState } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import './MyTable.css'

export const BasicTable = () => {
    const [mock_data_ajax, setMockData] = useState([]);
    
    useEffect(() => { getData(); }, []);
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mock_data_ajax, [mock_data_ajax])

    const tableInstance = useTable({
        columns,
        data
    })

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    async function getData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const TempData = await response.json();
        setMockData(TempData);
    }

    return(
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))
                }
                </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(rows => {
                    prepareRow(rows)
                    return(
                        <tr {...rows.getRowProps()}>
                        {
                            rows.cells.map(cell => {
                                return(
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                )
                            })
                        }
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
    )
}