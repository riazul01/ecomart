import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack width={1} minHeight="100vh">
      <Stack component="main" direction="column" width={1}>
        {children}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
