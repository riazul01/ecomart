import { paymentMethods } from 'data/paymentMethods';
import { footerLinks } from 'data/footerLinks';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Image from 'components/base/Image';
import Logo from 'assets/images/logo.png';

const Footer = () => {
  return (
    <Box width={1} bgcolor="neutral.dark">
      <Box px={1.5} mx="auto" width={1} maxWidth={1340}>
        <Stack py={4} justifyContent="space-between">
          <Box flex={2}>
            <ButtonBase component={Link} href="/" disableRipple>
              <Image src={Logo} height={32} width={32} />
              <Typography ml={1.25} variant="h3" color="info.lighter" fontWeight={500}>
                Ecomart
              </Typography>
            </ButtonBase>

            <Typography mt={2} variant="body2" color="neutral.lighter">
              Welcome to Ecomart! Find quality groceries, <br />
              fresh produce, and pantry staples with fast delivery <br /> and excellent service.
              Shop with ease today!
            </Typography>

            <Stack mt={3} spacing={2}>
              <Typography
                variant="body1"
                component={Link}
                href="tel:+8801234567890"
                color="info.lighter"
                fontWeight={500}
                borderBottom={2}
                borderColor="primary.main"
              >
                (219) 555-0114
              </Typography>
              <Typography variant="body1" color="neutral.lighter">
                or
              </Typography>
              <Typography
                variant="body1"
                component={Link}
                href="mailto:ecomart@mail.com"
                color="info.lighter"
                fontWeight={500}
                borderBottom={2}
                borderColor="primary.main"
              >
                ecomart@mail.com
              </Typography>
            </Stack>
          </Box>

          {footerLinks.map((item) => (
            <Box flex={1}>
              <Typography mb={2} variant="body1" color="info.lighter" fontWeight={500}>
                {item.subheader}
              </Typography>
              {item.links.map((item) => (
                <Typography
                  key={item.id}
                  mb={1.5}
                  variant="body2"
                  component={Link}
                  href={item.link}
                  display="block"
                  color="neutral.lighter"
                  sx={{ transition: 'all 0.3s ease', '&:hover': { color: 'info.main' } }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          ))}
        </Stack>

        <Stack
          py={2}
          alignItems="center"
          justifyContent="space-between"
          borderTop={1}
          sx={{ borderColor: 'neutral.main' }}
        >
          <Typography variant="body2" color="neutral.lighter">
            &copy; 2024 Ecomart. Created by{' '}
            <Typography
              component={Link}
              href="https://github.com/riazul01"
              sx={{ textDecoration: 'underline' }}
            >
              riazul01
            </Typography>
          </Typography>

          <Stack spacing={1} alignItems="center">
            {paymentMethods.map((item) => (
              <Stack key={item.id} component={Link} href={item.link} alignItems="center">
                <Image src={item.image} height={30} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
