'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { TableDetailProps } from '@/components/Table/TableDetails'
import TableDetails from '@/components/Table/TableDetails'
import filterIcon from '../../../public/Filter-icon.svg'
import searchIcon from '../../../public/search-icon.svg'
import {
    Column,
    ColumnDef,
    PaginationState,
    Table,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
// import { fetchData } from '@/components/Table/TableDetails'




const Page = () => {
    const [data, _setData] = React.useState(() => [...TableDetails])




    const columnHelper = createColumnHelper<TableDetailProps>()
    const columns = [
        columnHelper.accessor('connectionId', {
            header: () => 'Connection ID',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.name, {
            id: 'name',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Name</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor('flow', {
            header: () => 'Flow',
            cell: info => info.renderValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('date', {
            header: () => <span>Submitted On</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor('timeToSync', {
            header: 'Time to Sync',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            footer: info => info.column.id,
        }),
    ]
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 13,
    })

    const table = useReactTable({
        columns,
        data,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
        state: {
            pagination,
        },
        // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
    })





    // useEffect(() => {
    //     console.log('Page component mounted')
    // }, [])
    return (

        <div className='w-full h-full flex flex-col justify-start  bg-[#e8ebef] overflow-y-scroll'>
            <div className='w-full h-20 bg-white px-8 py-5 flex justify-center items-center shadow-md fixed top-0 z-10 '>
                <h1 className='w-full text-[20px] text-[#101828] font-normal'>Syncs</h1>
            </div>

            <div className='mt-24 px-8 py-5  space-y-5'>
                <div className='flex w-full h-12 justify-between'>
                    <div className='w-[90%] h-full flex '>
                        <input type="text" placeholder='Search for verification ID, user name...' className='w-[90%] bg-[#FFFFFF] h-full rounded-r-none rounded-xl p-4' />
                        <div className='w-[5%] h-full rounded-xl bg-[#F8F8F8] flex justify-center items-center rounded-l-none hover:bg-[#7B73FE]'>
                            <Image src={searchIcon} alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className='w-[10%] bg-white  hover:bg-[#7B73FE] flex rounded-xl p-4 justify-center items-center space-x-3 text-[#73729B] font-medium text-base'>
                        <div>
                            <Image src={filterIcon} alt="" width={20} height={20} />
                        </div>
                        <h1 className='text-black'>Filter</h1>
                    </div>

                </div>

                <div className='space-y-6'>
                    <h1 className='text-[18px] font-medium rounded-xl text-[#000000]'>Connection</h1>
                    <div className='w-full h-[795px] flex flex-col justify-between bg-white rounded-xl  '>
                        <table className='w-full rounded-xl'>
                            <thead className=' w-full rounded-xl'>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id} className='rounded-t-xl'>
                                        {headerGroup.headers.map(header => {
                                            return (
                                                <th key={header.id} colSpan={header.colSpan} className='text-[#73729B]  h-[45px] bg-[#F9FAFB] text-sm font-medium rounded-t-xl'>
                                                    <div
                                                        {...{
                                                            className: header.column.getCanSort()
                                                                ? 'cursor-pointer select-none'
                                                                : '',
                                                            onClick: header.column.getToggleSortingHandler(),
                                                        }}
                                                    >
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}

                                                    </div>
                                                </th>
                                            )
                                        })}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map(row => {
                                    return (
                                        <tr key={row.id} className='text-center'>
                                            {row.getVisibleCells().map(cell => {
                                                return (
                                                    <td key={cell.id} className='h-[53px] border-b-2'>
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )}

                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="flex items-center gap-2">

                            <button
                                className="border rounded p-1"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {'<'}
                            </button>
                            <button
                                className="border rounded p-1"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                {'>'}
                            </button>

                            <span className="flex items-center gap-1">
                                <div>Page</div>
                                <strong>
                                    {table.getState().pagination.pageIndex + 1} of{' '}
                                    {table.getPageCount().toLocaleString()}
                                </strong>
                            </span>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}


export default Page
