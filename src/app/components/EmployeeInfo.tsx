// EmployeeInfo.tsx
import { Avatar, Box, Stack, Typography } from '@mui/material';
import data from '../static/data.json';
 
export const DATA = data;

const EmployeeInfo = () => {
  const { name, position, email, image, biodata } = DATA.employee;
  
  return (
    <Stack direction="column" spacing={1} alignItems="stretch">
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ py: 1 }}>
            <strong>{name}</strong>
          </Typography>
          <Typography variant="subtitle1">{position}</Typography>
          <Typography variant="subtitle2">{email}</Typography>
        </Box>
        <Box>
          <Avatar src={image} sx={{ height: 150, width: 150 }}>Talent Image</Avatar>
        </Box>
      </Stack>
      <Stack direction="row" spacing={1} justifyContent="stretch">
      </Stack>
    </Stack>
  );
};

export default EmployeeInfo;
