import { ClassType } from './types';
import { useTranslation } from 'react-i18next';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"

export const getClassesData = (): Array<ClassType> => {
    const { t } = useTranslation(); 

    return [
        {
            name: t(`ourclasses.class.one.name`),
            description: t(`ourclasses.class.one.description`),
            image: image1,
            price: t(`ourclasses.class.one.price`),
            scheduledClasses: [
                {
                    startDate: "2024-03-01",
                    startTime: "10:00",
                    endTime: "11:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`sunday`),
                },
                {
                    startDate: "2024-03-05",
                    startTime: "14:30",
                    endTime: "16:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`monday`),
                },
                {
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                }
            ]

        },
        {
            name: t(`ourclasses.class.two.name`),
            description: t(`ourclasses.class.two.description`),
            image: image2,
            price: t(`ourclasses.class.two.price`),
            scheduledClasses: [
                {
                    startDate: "2024-03-15",
                    startTime: "09:00",
                    endTime: "10:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`wednesday`),
                },
                {
                    startDate: "2024-03-20",
                    startTime: "13:00",
                    endTime: "14:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`thursday`),
                },
                {
                    startDate: "2024-03-25",
                    startTime: "16:30",
                    endTime: "18:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`friday`),
                },
                {
                    startDate: "2024-04-01",
                    startTime: "11:00",
                    endTime: "12:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`saturday`),
                },
            ]
            
        },
        {
            name: t(`ourclasses.class.three.name`),
            description: t(`ourclasses.class.three.description`),
            image: image3,
            price: t(`ourclasses.class.three.price`),
            scheduledClasses: [
                {
                    startDate: "2024-04-05",
                    startTime: "17:30",
                    endTime: "19:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`sunday`),
                },
            ]
        },
        {
            name: t(`ourclasses.class.four.name`),
            description: t(`ourclasses.class.four.description`),
            image: image4,
            price: t(`ourclasses.class.four.price`),
            scheduledClasses: [
                {
                    startDate: "2024-04-10",
                    startTime: "08:30",
                    endTime: "10:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`monday`),
                },
                {
                    startDate: "2024-04-15",
                    startTime: "15:00",
                    endTime: "16:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-04-20",
                    startTime: "12:30",
                    endTime: "14:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`wednesday`),
                },
            ]
        },
        {
            name: t(`ourclasses.class.five.name`),
            description: t(`ourclasses.class.five.description`),
            image: image5,
            price: t(`ourclasses.class.five.price`),
            scheduledClasses: [
                {
                    startDate: "2024-04-10",
                    startTime: "08:30",
                    endTime: "10:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`monday`),
                },
                {
                    startDate: "2024-04-15",
                    startTime: "15:00",
                    endTime: "16:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                },
                {
                    startDate: "2024-04-20",
                    startTime: "12:30",
                    endTime: "14:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`wednesday`),
                },
            ]

        }
    ];
};