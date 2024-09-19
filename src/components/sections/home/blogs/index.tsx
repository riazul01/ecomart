import { Stack, Box, Typography } from '@mui/material';
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
    <Box>
      <Typography variant="h2" textAlign="center" fontWeight={600}>
        Our Recent Blogs
      </Typography>
      <Typography mt={1} variant="subtitle1" textAlign="center">
        Explore our latest posts for tips, trends, and insights to enhance your <br />
        grocery shopping and healthy eating experience.
      </Typography>

      <Stack mt={5} spacing={1} justifyContent="space-between">
        <BlogCard />
      </Stack>
    </Box>
  );
};

export default Blogs;
