import { blogs } from 'data/blogs';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
    <Box mb={8}>
      <Typography variant="h2" textAlign="center" fontWeight={600}>
        Our Recent Blogs
      </Typography>
      <Typography mt={1} variant="subtitle1" textAlign="center">
        Explore our latest posts for tips, trends, and insights to enhance your <br />
        grocery shopping and healthy eating experience.
      </Typography>

      <Stack mt={3} spacing={1} justifyContent="space-between">
        {blogs.slice(0, 3).map((item) => (
          <BlogCard data={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Blogs;
