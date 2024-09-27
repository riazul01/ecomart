import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CategoryItem from './CategoryItem';
import SectionHeader from 'components/common/SectionHeader';
import { categories } from 'data/categories';

const Categories = () => {
  return (
    <Box mb={8}>
      <SectionHeader title="Popular Categories" path="#!" linkText="View All" />

      <Grid container spacing={2}>
        {categories.map((item) => (
          <Grid key={item.id} component={Link} href={item.path} item xs={6} sm={4} md={3} lg={2}>
            <CategoryItem data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
