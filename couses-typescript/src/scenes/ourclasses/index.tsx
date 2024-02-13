import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'
import { useTranslation } from 'react-i18next';
 

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    const { t } = useTranslation();    
    <p>{t(`learnMore`)}</p>
    const classes: Array<ClassType> = [
        {
            name: t(`ourclasses.class.one.name`),
            description: t(`ourclasses.class.one.description`),
            image: image1,
        },
        {
            name: t(`ourclasses.class.two.name`),
            description: t(`ourclasses.class.two.description`),
            image: image2,
        },
        {
            name: t(`ourclasses.class.three.name`),
            description: t(`ourclasses.class.three.description`),
            image: image3,
        },
        {
            name: t(`ourclasses.class.four.name`),
            description: t(`ourclasses.class.four.description`),
            image: image4,
        },
        {
            name: t(`ourclasses.class.five.name`),
            description: t(`ourclasses.class.five.description`),
            image: image5,
        },
        {
            name: t(`ourclasses.class.tbd.name`),
            image: image6,
        }
    ]

    return <section id="ourclasses" className='w-full bg-primary-100 py-40'>
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div
            className='mx-auto w-5/6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{delay: 0.4, duration: 1}}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0},
            }}
        >
            <div className='md:w-3/5'>
                <HText>{t(`ourclasses.title`)}</HText>
                <p className='py-5'>
                {t(`ourclasses.paragraph`)}
                </p>
            </div>

        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item: ClassType, index) => (
                    <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                ))}

            </ul>

        </div>
    </motion.div>

    </section>
}

export default OurClasses