import { Person } from "@/models";
import { addFavorite, revomeFavorites } from "@/redux";
import { AppProps } from "@/redux/store";
import { Checkbox, IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

interface IFavoriteTableProps {}

const FavoriteTable: React.FC<IFavoriteTableProps> = (props) => {
    const pageSize = 5;
    const dispatch = useDispatch();
    const stateFavorites = useSelector((store: AppProps) => store.favorites);
  
    const handleClick = (person: Person) => {
      dispatch(revomeFavorites(person));
    };
  
    const colums = [
      {
        field: 'actions',
        type: 'actions',
        sortable: false,
        headerName: '',
        width: 50,
        renderCell: (params: GridRenderCellParams) => (
          <>
            {
              <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
                <DeleteIcon />
              </IconButton>
            }
          </>
        )
      },
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>
      },
      {
        field: 'category',
        headerName: 'Categories',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>
      },
      {
        field: 'company',
        headerName: 'Company',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>
      },
      {
        field: 'levelOfHappiness',
        headerName: 'Level of happiness',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>
      }
    ];
    return (
      <DataGrid
        rows={stateFavorites}
        columns={colums}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        getRowId={(row: any) => row.id}
      />
    );
  };
  
  export default FavoriteTable;