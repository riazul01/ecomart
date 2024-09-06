import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
  const addedToCart = false;

  return (
    <Card
      sx={{
        position: 'relative',
        width: 1,
        borderRight: 1,
        borderBottom: 1,
        borderColor: 'neutral.lighter',
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
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="h5"
            color="primary.lighter"
            fontWeight={400}
            sx={{ userSelect: 'none' }}
          >
            View Details
          </Typography>
        </Stack>
      </Box>

      <CardContent>
        <Stack spacing={1} direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h6" color="primary.dark">
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
            <Typography variant="body2" color="primary.dark" fontWeight={600}>
              (4.2k)
            </Typography>
          </Stack>
          <Typography variant="subtitle2" color="primary.dark">
            1 kg
          </Typography>
          <Stack spacing={1} alignItems="center">
            <Typography
              component="ins"
              variant="h5"
              color="success.dark"
              sx={{ textDecoration: 'none' }}
            >
              60$
            </Typography>
            <Typography component="del" variant="body1" color="info.main" fontWeight={700}>
              80$
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
            fullWidth
          >
            Add To Cart
          </Button>
        ) : (
          <Stack
            width={1}
            alignItems="center"
            justifyContent="space-between"
            bgcolor="neutral.lighter"
            borderRadius={0.5}
          >
            <IconButton size="medium" sx={{ p: 1.175, bgcolor: 'transparent !important' }}>
              <IconifyIcon icon="mingcute:minimize-line" color="neutral.dark" />
            </IconButton>
            <Button
              variant="text"
              sx={{
                color: 'neutral.dark',
                fontWeight: 700,
                borderLeft: 1,
                borderRight: 1,
                borderColor: 'neutral.light',
              }}
              fullWidth
              disableRipple
            >
              10 in Cart
            </Button>
            <IconButton size="medium" sx={{ p: 1.25, bgcolor: 'transparent !important' }}>
              <IconifyIcon icon="mingcute:add-line" color="neutral.dark" />
            </IconButton>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
