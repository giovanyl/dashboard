import React, { useMemo, useState } from "react";
import MOCK_DATA from "./dummy data/MOCK_DATA.json";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";

const COLUMNS = [
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Email',
        accessor: 'email'
    }
]

const ExpandedFilter = ({ filter, setFilter }) => {

    return (
        <tr>
            <th colSpan="100%" >
                <div className="expanded-filter">
                    <div className="archived">
                        <form>
                            <input type="checkbox" name="archived" value="archived" /> 
                            <label htmlFor="archived">Include Archived</label>
                        </form>
                    </div>
                    <div className="global-filter">
                        Search: {' '}
                        <input value={filter || ''}
                        onChange={e => setFilter(e.target.value)} />
                    </div>
                </div>
            </th>
        </tr>
    )
}

export default function DataTable() {
    
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    
    const [isExpanded,setIsExpanded] = useState(false);

    const toggleFilter = event => {
        setIsExpanded(current => !current);
    };



    const table = useTable({
        columns,
        data
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
    )

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, prepareRow, state, setGlobalFilter, } = table

    const { globalFilter, pageIndex } = state

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (                        
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {' '}{column.isSorted ? (column.isSortedDesc ? '˄': '˅'):''}
                                        </span>
                                    </th>
                                ))
                            }
                            <th>
                                <button onClick={toggleFilter} className="table-filter">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
                                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#ffffff" fill={isExpanded ? "white" : "none"} d="M2 2L10 10V20L14 22V10L22 2H2Z"></path>
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    ))
                }
                {isExpanded && <ExpandedFilter filter={globalFilter} setFilter={setGlobalFilter} key="filter" />}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                                <td></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="100%">
                        <span className="pageIndicator">
                            Page{' '}
                                {pageIndex+1} of {pageOptions.length}
                        </span>
                        <span className="pageSwitch">
                            Go to page: {' '}
                            <input type='number' defaultValue={pageIndex + 1} onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber) 
                            }} />
                        </span>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                        <button className="tableNavLeft" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                        <button className="tableNavRight" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                    </td>
                </tr>
            </tfoot>
        </table>
        <div>
        </div>
        </>
    )
}