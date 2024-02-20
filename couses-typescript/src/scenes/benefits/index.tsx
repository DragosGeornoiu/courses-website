import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/school_academy_benefits_page.png"
import { useTranslation } from 'react-i18next';

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  const { t } = useTranslation();

  const benefits: Array<BenefitType> = [
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: t(`benefits.one.title`),
        description:  t(`benefits.one.description`),
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: t(`benefits.two.title`),
        description:  t(`benefits.two.description`),
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: t(`benefits.three.title`),
        description:  t(`benefits.three.description`),
    }
]

  return <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* HEADER */}
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0},
            }}
        >
            <HText>{t(`benefits.title`)}</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
        >
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
            />

            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: { opacity: 0, x: 50},
                                visible: { opacity: 1, x: 0},
                            }}
                        >
                            <HText>
                                {t(`benefits.text.title.partOne`)}{" "}
                                <span className="text-primary-500"> {t(`benefits.text.title.partTwo`)}</span>
                                {" "}  {t(`benefits.text.title.partThree`)} 
                            </HText>
                        </motion.div>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: 50},
                        visible: { opacity: 1, x: 0},
                    }}
                >
                    <p className="my-5">
                        {t(`benefits.text.paragraph.one`)}
                        
                    </p>
                    <p className="mb-5">
                        {t(`benefits.text.paragraph.two`)}
                    </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-botton-20 before:right-40 before:z-[1] before:content-sparkes">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            {t(`joinNow`)}
                        </ActionButton>
                    </div>

                </div>
            </div>
        </div>

    </motion.div>
  </section>
}

export default Benefits