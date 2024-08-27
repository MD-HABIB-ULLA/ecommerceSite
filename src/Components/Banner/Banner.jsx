import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Side';

const Banner = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch(`fakebanner.json`)
            .then(response => response.json())
            .then(data => setSlides(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const shouldLoop = slides.length > 2;
    return (
        <div className='h-full rounded-2xl  mx-auto  overflow-hidden'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={shouldLoop}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper h-full'
            >
                {slides.map(slide => (
                    <SwiperSlide className='h-full' key={slide._id}>
                        <Slide  image={slide.url} text={slide.title} saleText={slide.saleText} discountPercent={slide.discountPercent} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
