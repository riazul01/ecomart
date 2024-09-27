import { useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { SwiperSlide } from 'swiper/react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactSwiper from 'components/base/ReactSwiper';
import IconifyIcon from 'components/base/IconifyIcon';
import useResizeObserver from 'hooks/useResizeObserver';
import { ButtonBase } from '@mui/material';

interface HasId {
  id: string | number;
}

interface ProductSliderProps<T> {
  title: string;
  SliderCard: React.ComponentType<{ data: T }>;
  data: T[];
}

const ProductSlider = <T extends HasId>({ title, SliderCard, data }: ProductSliderProps<T>) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerSize = useResizeObserver(containerRef);
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Box mb={8} ref={containerRef} width={1}>
      <Stack mb={3} alignItems="center" justifyContent="space-between">
        <Typography variant="h4" fontWeight={600}>
          {title}
        </Typography>

        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Stack
            component={ButtonBase}
            onClick={handlePrev}
            alignItems="center"
            justifyContent="center"
            height={42}
            width={42}
            bgcolor={isSlideBegin ? 'info.dark' : 'primary.main'}
            borderRadius="25%"
            sx={{
              pointerEvents: isSlideBegin ? 'none' : 'auto',
              opacity: isSlideBegin ? 0.5 : 1,
            }}
          >
            <IconifyIcon
              icon="fluent:arrow-left-32-filled"
              color={isSlideBegin ? 'text.primary' : 'info.lighter'}
              fontSize="h5.fontSize"
            />
          </Stack>

          <Stack
            component={ButtonBase}
            onClick={handleNext}
            alignItems="center"
            justifyContent="center"
            height={42}
            width={42}
            bgcolor={isSlideEnd ? 'info.dark' : 'primary.main'}
            borderRadius="25%"
            sx={{
              pointerEvents: isSlideEnd ? 'none' : 'auto',
              opacity: isSlideEnd ? 0.5 : 1,
            }}
          >
            <IconifyIcon
              icon="fluent:arrow-right-32-filled"
              color={isSlideEnd ? 'text.primary' : 'info.lighter'}
              fontSize="h5.fontSize"
            />
          </Stack>
        </Stack>
      </Stack>

      <ReactSwiper
        slidesPerView={
          containerSize > 1300 ? 4 : containerSize > 1024 ? 3 : containerSize > 720 ? 2 : 1
        }
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        sx={{ '& .swiper-slide': { width: 300 } }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard data={item} />
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </Box>
  );
};

export default ProductSlider;
