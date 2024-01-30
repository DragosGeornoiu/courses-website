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
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Aasd dsafsa dfasf njkdsfas dfsaf afdsafas fdsfasdf a."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Hundreds of Dive3rse Classes",
        description: "Aasd dsafsa dfasf njkdsfas dfsaf afdsafas fdsfasdf adf as fdsabnvcsdf fsafa. dfasdf fdsafadf fdsa.."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers.",
        description: "Aasd dsafsa dfasf."
    },
]

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
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to 
                get you to your ultimate fitness goals with ease. We provide true 
                care into each and every member
            </p>
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
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, elit id hendrerit ornare, lectus leo commodo est, a porttitor nunc massa in lacus. Phasellus vehicula viverra vehicula. Sed ultricies rhoncus est, sed consectetur risus euismod a. Praesent pellentesque, ex et commodo rhoncus, tortor mi ornare risus, eget dapibus mi lacus eu quam. Duis urna ligula, mollis vel mattis sit amet, dictum at leo. Proin rutrum nulla at velit iaculis, non condimentum felis dapibus. Nam rutrum dui nec sapien facilisis ultricies.
                    </p>
                    <p className="mb-5">
                        Sed blandit, lorem at finibus mollis, mi leo ultrices nisi, sed pretium eros libero eget justo. Phasellus urna leo, gravida vel mi quis, lobortis iaculis sapien. Donec luctus dapibus purus nec ultricies. Praesent fermentum nisi vel urna bibendum lobortis. Mauris varius eu nibh eu semper. Vivamus accumsan hendrerit iaculis. Pellentesque sit amet leo dapibus, luctus sapien dapibus, consectetur ante. Fusce in lacus sed ante interdum faucibus et dictum leo. Sed nec sollicitudin risus. Morbi dapibus lacus in sem vehicula efficitur. Sed vulputate consectetur velit, vitae accumsan libero commodo a. Praesent mi nisl, ullamcorper id ex ut, dictum tempus turpis. Sed accumsan mollis lectus, at ornare elit consequat vitae. Donec vitae scelerisque metus.
                    </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-botton-20 before:right-40 before:z-[1] before:content-sparkes">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            JOIN NOW
                        </ActionButton>
                    </div>

                </div>
            </div>
        </div>

    </motion.div>
  </section>
}

export default Benefits