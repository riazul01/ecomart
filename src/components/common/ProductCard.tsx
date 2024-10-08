import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import CabbageImage from 'assets/images/cabbage.png';

const ProductCard = () => {
  const addedToCart = true;

  return (
    <Card
      sx={{
        position: 'relative',
        width: 1,
        border: 1,
        borderColor: 'info.main',
        borderRadius: 1.5,
        maxWidth: 300,
      }}
    >
      <Box position="relative" sx={{ cursor: 'pointer' }}>
        <CardMedia component="img" height={200} image={CabbageImage} alt="product_image" />
        <Typography
          px={1}
          py={0.25}
          variant="caption"
          position="absolute"
          top={10}
          right={10}
          color="info.lighter"
          bgcolor="error.dark"
          borderRadius={1}
        >
          -10%
        </Typography>
        <Stack
          height={200}
          width={1}
          position="absolute"
          top={0}
          left={0}
          alignItems="center"
          justifyContent="center"
          bgcolor="rgba(0, 0, 0, 0.5)"
          sx={{
            opacity: 0,
            transition: 'all 0.2s ease-in-out',
            borderRadius: 1,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="h5"
            color="info.lighter"
            fontWeight={400}
            sx={{ userSelect: 'none' }}
          >
            View Details
          </Typography>
        </Stack>
      </Box>

      <CardContent>
        <Stack spacing={1} direction="column" alignItems="center" justifyContent="center">
          <Typography component={Link} href="#!" variant="h6" color="primary.dark" fontWeight={600}>
            Chinese cabbage
          </Typography>
          <Stack alignItems="center" gap={1}>
            <Rating
              name="half-rating-read"
              size="small"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" color="neutral.lighter" fontWeight={500}>
              (4.2k)
            </Typography>
          </Stack>
          <Typography variant="subtitle2" color="neutral.lighter">
            1 kg
          </Typography>
          <Stack spacing={1} alignItems="center">
            <Typography
              component="ins"
              variant="h6"
              fontWeight={600}
              sx={{ textDecoration: 'none' }}
            >
              $60
            </Typography>
            <Typography component="del" variant="h6" color="neutral.lighter" fontWeight={500}>
              $80
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      <CardActions disableSpacing>
        {!addedToCart ? (
          <Button
            variant="contained"
            size="medium"
            startIcon={<IconifyIcon icon="bi:lightning-fill" />}
            sx={{ border: 'none' }}
            fullWidth
          >
            Add To Cart
          </Button>
        ) : (
          <Stack
            spacing={1.5}
            width={1}
            alignItems="center"
            justifyContent="space-between"
            borderRadius={0.5}
          >
            <IconButton
              size="large"
              sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.main' } }}
            >
              <IconifyIcon icon="mingcute:minimize-line" color="info.lighter" />
            </IconButton>
            <Button
              variant="text"
              sx={(theme) => ({
                fontWeight: 500,
                color: 'neutral.dark',
                bgcolor: `${theme.palette.info.main} !important`,
              })}
              fullWidth
              disableRipple
            >
              10 in Cart
            </Button>
            <IconButton
              size="large"
              sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.main' } }}
            >
              <IconifyIcon icon="mingcute:add-line" color="info.lighter" />
            </IconButton>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
