import React, { useMemo, useEffect, useState, useContext } from 'react'
import { FilterContext } from './MyContext'
import { useTable, useGlobalFilter } from 'react-table'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import './MyTable.css'


export const MyTable = () => {
    const [mock_data_ajax, setMockData] = useState([]);
    const filter = useContext(FilterContext);

    
    useEffect(() => { getData(); }, []);
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mock_data_ajax, [mock_data_ajax])

    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter)

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = tableInstance

    const { globalFilter } = state

    async function getData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const TempData = await response.json();
        setMockData(TempData);
    }

    return(
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
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
        </>
    )
}