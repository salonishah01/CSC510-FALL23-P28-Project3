import React,{useEffect,useMemo,useState} from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Link,useLocation } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import './styles.css';
import {Button, darken} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Papa from 'papaparse';
import CloudDownloadIcon from '@mui/material/styles/createPalette';


const Results=()=>{
  const location = useLocation();
  const navigate = useNavigate();
  const [csvData,setCsvData] = useState([]);

  if(location.state == null){
    navigate("/");
  }

  const getClickableLink = (link) =>{
    if ( link == null){
      return '';
    }else{
      return link.startsWith('http://') || link.startsWith('https://')? link : `https://${link}`;
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'timestamp',
        header: 'Timestamp',
        size: 150,
        filterable: false,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 250,
        filterable: false,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 150,
        filterable: false,
      },
      {
        accessorKey: 'website',
        header: 'Website',
        
        filterable: false,
      },
      {
        accessorKey: 'link',
        header: 'Link',
        size: 150,
        filterable: false,
        Cell: (link) =>(
          <a href={link.renderedCellValue} target="_blank" rel="noopener_noreferrer">
            Link
          </a>
        ),
      },
    ],
    []   
  );
  const rows = JSON.parse(location.state.response);
  rows?.forEach((row,index) => {
    row.rowStyle ={ backgroundColor: index % 2 ===0 ? '#f2f2f2' : '#ffffff'};
    row.link = getClickableLink(row.link);  
   });

  useEffect(() => {
    let csvData = [];
    rows.map((row) => {
      const {timestamp,title,price,website,link} = row;
      csvData.push({timestamp,title,price,website,link})
    })
    
    const csv = Papa.unparse(csvData,{header: true});
    setCsvData(csv);
  },[])

  return(
    <div>
      
      <MaterialReactTable
        columns = {columns}
        data = {rows}
        enableColumnFilters={true}
        enableDensityToggle={false}
        muiTableHeadCellProps={{
          sx: {
            fontWeight:'normal',
            fontSize: '14px',
            color:'blue',
          },
        }}
        muiTableBodyProps={{
          sx: (theme) => ({
            '& tr:nth-of-type(odd)':{
              backgroundColor:darken(theme.palette.background.default,0.1),
            },
          }),
        }}
        
      />
      
    </div>
  );
};

export default Results;
