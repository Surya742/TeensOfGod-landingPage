import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://teensofgod.org/wp-content/uploads/2021/01/post3.jpeg',
    title: 'SWACHH BHARAT MISSION',
    width: '40%',
  },
  {
    url: 'https://teensofgod.org/wp-content/uploads/2021/01/post2.jpg',
    title: 'SOCIAL WELFARE',
    width: '40%',
  },
  {
    url: 'https://teensofgod.org/wp-content/uploads/2021/01/post1.jpeg',
    title: 'DONATIONS',
    width: '20%',
  },
  {
    url: 'https://scontent-sin6-4.cdninstagram.com/v/t51.29350-15/308191209_5199433096850769_5088740657520080404_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=paimfSIN52YAX_cijgy&_nc_oc=AQl1-oLyB0VxcjXNVIqovZLMPlJ_8rbSnl2Es6u1EC3LKr6CW0-alkFJ7ygfe_IKAtutp7iNFbWDFpi7JlzDT7B6&_nc_ht=scontent-sin6-4.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9kYF83stpyNOtaRf_QeZVJdtAFMM1ieZbHSRgRZnNOSw&oe=633875A7',
    title: 'INDIAN RED CROSS',
    width: '38%',
  },
  {
    url: 'https://scontent-sin6-2.cdninstagram.com/v/t51.29350-15/307460859_2193852064153629_3333379201392710422_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=TdRJ3X_9zMYAX_95kRG&_nc_ht=scontent-sin6-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-ZDoxoWHJeLKJ5TDASU8Jd3D2r6Ksh1_ZBTIL0MRV6Ww&oe=63381107',
    title: 'ID CAMP',
    width: '38%',
  },
  {
    url: 'https://scontent-sin6-4.cdninstagram.com/v/t51.29350-15/306881188_627064995497261_7808172198993083173_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Nl3cFw6l-PEAX-6v0Cw&_nc_ht=scontent-sin6-4.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9KiK4ORUB8kFchrUFrzljLUf3tm-P7r5SOao3rX7T6HQ&oe=6337426F',
    title: 'BIRTHDAY CELEBRATION',
    width: '24%',
  },
  {
    url: 'https://scontent-sin6-4.cdninstagram.com/v/t51.29350-15/306683322_609664670750270_3440733655135322452_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xcpQjliwWhUAX_zljaq&_nc_ht=scontent-sin6-4.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-X3T3ci5O_YC9xKKVeoZ8u4k6P_2rlJufcDleaKXgFbw&oe=6337B502',
    title: 'PROJECT HIFAZAT',
    width: '40%',
  },
  {
    url: 'https://scontent-sin6-4.cdninstagram.com/v/t51.29350-15/306715225_1447441095743907_7509004630678827826_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dYbQVTYeud0AX_PButr&_nc_ht=scontent-sin6-4.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_j4LEKEx3BNLe4ReiaxSMmK4WP7GMT97UKx2zJADDRkQ&oe=6337CBE2',
    title: 'SANITARY NAPKINS DISTRIBUTION',
    width: '40%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZh4cQtwuDxDVM2EdBc_o4OSUK-7IW-lHOmg&usqp=CAU',
    title: 'SPREADING LOVE',
    width: '20%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Blog Posts
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}