import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Topbar from './topbar';
import Header from './header';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack width={1} minHeight="100vh">
      <Stack component="main" direction="column" width={1}>
        <Topbar />
        <Header />
        {children}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
