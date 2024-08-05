// EmploymentTable.tsx
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import data from '../static/data.json';
 
export const DATA = data;

const EmploymentTable = () => (
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell sx={{ p: 0 }} />
        <TableCell width="50" sx={{ p: 0 }}>
          <Typography variant="caption"><strong>From</strong></Typography>
        </TableCell>
        <TableCell width="50" sx={{ p: 0 }}>
          <Typography variant="caption"><strong>To</strong></Typography>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {DATA.histories.employment.map((o, i) => (
        <TableRow key={i}>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="body2"><strong>{o.employer}</strong></Typography>
            <Typography variant="caption">{o.position}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}><Typography variant="caption">{o.from}</Typography></TableCell>
          <TableCell sx={{ p: 0 }}><Typography variant="caption">{o.to}</Typography></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default EmploymentTable;
