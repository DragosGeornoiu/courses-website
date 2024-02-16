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
            ageInterval: t(`ourclasses.class.one.ageInterval`),
            scheduledClasses: [
                {
                    id: 1,
                    startDate: "2024-03-01",
                    startTime: "10:00",
                    endTime: "11:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`sunday`),
                    remainingSeats: 6,
                },
                {
                    id: 2,
                    startDate: "2024-03-05",
                    startTime: "14:30",
                    endTime: "16:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`monday`),
                    remainingSeats: 5,
                },
                {
                    id: 3,
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 0,
                },
                {
                    id: 4,
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 2,
                },
                {
                    id: 5,
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 1,
                },
                {
                    id: 6,
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 3,
                },
                {
                    id: 7,
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 3,
                },
                {
                    id: 8,
                    startDate: "2024-03-10",
                    startTime: "18:00",
                    endTime: "19:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 6,
                }
            ]

        },
        {
            name: t(`ourclasses.class.two.name`),
            description: t(`ourclasses.class.two.description`),
            image: image2,
            price: t(`ourclasses.class.two.price`),
            ageInterval: t(`ourclasses.class.two.ageInterval`),
            scheduledClasses: [
                {
                    id: 9,
                    startDate: "2024-03-15",
                    startTime: "09:00",
                    endTime: "10:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`wednesday`),
                    remainingSeats: 1,
                },
                {
                    id: 10,
                    startDate: "2024-03-20",
                    startTime: "13:00",
                    endTime: "14:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`thursday`),
                    remainingSeats: 0,
                },
                {
                    id: 11,
                    startDate: "2024-03-25",
                    startTime: "16:30",
                    endTime: "18:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`friday`),
                    remainingSeats: 5,
                },
                {
                    id: 12,
                    startDate: "2024-04-01",
                    startTime: "11:00",
                    endTime: "12:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`saturday`),
                    remainingSeats: 6,
                },
            ]
            
        },
        {
            name: t(`ourclasses.class.three.name`),
            description: t(`ourclasses.class.three.description`),
            image: image3,
            price: t(`ourclasses.class.three.price`),
            ageInterval: t(`ourclasses.class.three.ageInterval`),
            scheduledClasses: [
                {
                    id: 13,
                    startDate: "2024-04-05",
                    startTime: "17:30",
                    endTime: "19:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`sunday`),
                    remainingSeats: 6,
                },
            ]
        },
        {
            name: t(`ourclasses.class.four.name`),
            description: t(`ourclasses.class.four.description`),
            image: image4,
            price: t(`ourclasses.class.four.price`),
            ageInterval: t(`ourclasses.class.four.ageInterval`),
            scheduledClasses: [
                {
                    id: 14,
                    startDate: "2024-04-10",
                    startTime: "08:30",
                    endTime: "10:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`monday`),
                    remainingSeats: 0,
                },
                {
                    id: 15,
                    startDate: "2024-04-15",
                    startTime: "15:00",
                    endTime: "16:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 6,
                },
                {
                    id: 16,
                    startDate: "2024-04-20",
                    startTime: "12:30",
                    endTime: "14:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`wednesday`),
                    remainingSeats: 3,
                },
            ]
        },
        {
            name: t(`ourclasses.class.five.name`),
            description: t(`ourclasses.class.five.description`),
            image: image5,
            price: t(`ourclasses.class.five.price`),
            ageInterval: t(`ourclasses.class.five.ageInterval`),
            scheduledClasses: [
                {
                    id: 17,
                    startDate: "2024-04-10",
                    startTime: "08:30",
                    endTime: "10:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`monday`),
                    remainingSeats: 3,
                },
                {
                    id: 18,
                    startDate: "2024-04-15",
                    startTime: "15:00",
                    endTime: "16:30",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`tuesday`),
                    remainingSeats: 6,
                },
                {
                    id: 19,
                    startDate: "2024-04-20",
                    startTime: "12:30",
                    endTime: "14:00",
                    frequency:  t(`weekly`),
                    dayOfWeek:  t(`wednesday`),
                    remainingSeats: 2,
                },
            ]

        }
    ];
};