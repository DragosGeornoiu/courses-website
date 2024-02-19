import { ClassType } from './types';
import { useTranslation } from 'react-i18next';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import classesData from './classData.json';

export const getClassesData = (): Array<ClassType> => {
    const { t } = useTranslation();
  
    const classes = classesData.map((classData) => ({
      ...classData,
      name: t(`ourclasses.class.${classData.name}.name`),
      description: t(`ourclasses.class.${classData.name}.description`),
      image: classData.image === 'image1' ? image1 :
        classData.image === 'image2' ? image2 :
        classData.image === 'image3' ? image3 :
        classData.image === 'image4' ? image4 :
        classData.image === 'image5' ? image5 : null,
      price: t(`ourclasses.class.${classData.name}.price`),
      ageInterval: t(`ourclasses.class.${classData.name}.ageInterval`),
      scheduledClasses: classData.scheduledClasses.map((scheduledClass) => ({
        ...scheduledClass,
        frequency: t(scheduledClass.frequency),
        dayOfWeek: t(scheduledClass.dayOfWeek),
      })),
    }));
  
    return classes;
  };