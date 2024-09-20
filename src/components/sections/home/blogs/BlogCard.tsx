import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconifyIcon from 'components/base/IconifyIcon';
import { Blog } from 'data/blogs';

interface BlogCardProps {
  data: Blog;
}

const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <Card
      sx={{
        position: 'relative',
        width: 1,
        border: 1,
        borderColor: 'info.main',
        borderRadius: 1.5,
        maxWidth: 350,
      }}
    >
      <Box position="relative">
        <CardMedia component="img" height={250} image={data.image} alt="product_image" />
        <Stack
          direction="column"
          height={65}
          width={65}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={8}
          left={8}
          borderRadius={1}
          bgcolor="info.main"
        >
          <Typography variant="h4" fontWeight={600}>
            {data.publishDate.split(' ')[0]}
          </Typography>
          <Typography
            variant="body2"
            color="text.disabled"
            textTransform="uppercase"
            fontWeight={500}
          >
            {data.publishDate.split(' ')[1]}
          </Typography>
        </Stack>
      </Box>

      <CardContent sx={{ padding: 1 }}>
        <Stack spacing={2} alignItems="center">
          <Stack spacing={0.5} alignItems="center">
            <IconifyIcon icon="ph:tag" color="text.disabled" />
            <Typography variant="body2" color="text.disabled" noWrap>
              {data.tags[0]}
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={0.5}>
            <IconifyIcon icon="ant-design:user-outlined" color="text.disabled" />
            <Typography variant="body2" color="text.disabled" noWrap>
              By {data.author}
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={0.5}>
            <IconifyIcon icon="bytesize:message" color="text.disabled" />
            <Typography variant="body2" color="text.disabled" noWrap>
              {data.comments} Comments
            </Typography>
          </Stack>
        </Stack>

        <Box mt={1}>
          <Typography
            component={Link}
            href={data.link}
            variant="h5"
            color="text.primary"
            fontWeight={600}
            sx={{ transition: 'all 0.3s ease', '&:hover': { color: 'primary.main' } }}
          >
            {data.title}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          variant="text"
          LinkComponent={Link}
          href={data.link}
          size="medium"
          endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
          sx={{ ml: -2 }}
        >
          Read now
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
