// page.tsx
import { Box, Divider, Stack, Typography } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import EmployeeInfo from './EmployeeInfo';
import EmploymentTable from './EmploymentTable';
import data from '../static/data.json';
 
export const DATA = data;

const Page = () => {
  return (
    <>
      <Header />
      <Box component="table" sx={{ width: '100%' }}>
        <Box component="thead">
          <Box component="tr">
            <Box component="td">
              <Box className="page-header-space" />
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          <Box component="tr">
            <Box component="td" sx={{ py: 2, px: 6 }}>
              <EmployeeInfo />
              <Divider flexItem />
              <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                  <Typography variant="body1" sx={{ pt: 1 }}><strong>Course, Training</strong></Typography>
                  <EmploymentTable />
                </Stack>
              </Stack>
              <Typography variant="caption" color="GrayText" sx={{ pt: 4, alignSelf: 'center' }}>
                PT Padepokan Tujuh Sembilan
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box component="tfoot">
          <Box component="tr">
            <Box component="td">
              <Box className="page-footer-space" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
