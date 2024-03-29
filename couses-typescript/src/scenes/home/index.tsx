import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageTextRo from "@/assets/ro/school_academy_homepage_text.png"
import HomePageTextEN from "@/assets/en/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic_school.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const { t, i18n } = useTranslation();
  const languageFolder = i18n.language || 'en';
  const imageSrc = 'ro' == languageFolder ? HomePageTextRo : HomePageTextEN


  return (
    <section
        id="home"
        className="gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0"
    >
        
        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div 
                    className='="md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{duration: 1}}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0},
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-backgroundtext">
                            <img alt="home-page-text" src={imageSrc}/>
                        </div>
                    </div>
                    
                    <p className="mt-8 text-sm">
                        {t(`home.textMessage`)}
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 1}}
                    variants={{
                        hidden: { opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0},
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        {t(`joinNow`)}
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.OurClasses)}
                        href={`#${SelectedPage.OurClasses}`}
                    >
                        <p> {t(`learnMore`)}</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>
    </section>
  )
}

export default Home