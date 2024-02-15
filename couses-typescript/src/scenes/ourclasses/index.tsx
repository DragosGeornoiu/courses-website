import React, { useEffect } from 'react';
import { ClassType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { getClassesData } from '@/shared/classes';
import Class from '../../shared/Class';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();
  const classes = getClassesData();
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    setSelectedPage(SelectedPage.OurClasses);
  }, [setSelectedPage]);

  const sliderSettingsLargeScreen = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const sliderSettingsSmallScreen = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div>
        <motion.div>
          <div className="md:w-3/5">
            <HText>{t(`ourclasses.title`)}</HText>
            <p className="py-5">{t(`ourclasses.paragraph`)}</p>
          </div>
        </motion.div>

        <div className="mt-10">
        {isAboveMediumScreen ? (
          <Slider {...sliderSettingsLargeScreen}>
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </Slider>
        ) : (
          <Slider {...sliderSettingsSmallScreen}>
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </Slider>
        )}
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
