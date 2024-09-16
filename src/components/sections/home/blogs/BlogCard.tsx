import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import CabbageImage from 'assets/images/cabbage.png';

const BlogCard = () => {
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
      <Box position="relative" sx={{ cursor: 'pointer' }}>
        <CardMedia component="img" height={250} image={CabbageImage} alt="product_image" />
        <Stack
          direction="column"
          height={65}
          width={65}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={2}
          left={2}
          borderRadius={1}
          bgcolor="info.dark"
        >
          <Typography variant="h4" fontWeight={600}>
            18
          </Typography>
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
            NOV
          </Typography>
        </Stack>
      </Box>

      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Stack spacing={0.5} alignItems="center">
            <IconifyIcon icon="ph:tag" color="text.disabled" />
            <Typography variant="body2" color="text.disabled">
              Food
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={0.5}>
            <IconifyIcon icon="ant-design:user-outlined" color="text.disabled" />
            <Typography variant="body2" color="text.disabled">
              By Admin
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={0.5}>
            <IconifyIcon icon="bytesize:message" color="text.disabled" />
            <Typography variant="body2" color="text.disabled">
              65 Comments
            </Typography>
          </Stack>
        </Stack>

        <Box mt={1}>
          <Typography component={Link} href="#!" variant="h5" color="text.primary" fontWeight={600}>
            Understanding Food Labels: What to Look For
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          variant="text"
          size="medium"
          endIcon={<IconifyIcon icon="fluent:arrow-right-32-filled" />}
        >
          Read now
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
