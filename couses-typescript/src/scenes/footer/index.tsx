import Logo from "@/assets/Logo.png"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt='logo' src={Logo} />
            <p className="my-5">
            {t(`footer.paragraph`)}
            </p>
            <p>{t(`footer.copyright`)}</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">{t(`footer.link.title`)}</h4>
            <p className="my-5">{t(`footer.link.first`)}</p>
            <p className="my-5">{t(`footer.link.second`)}</p>
            <p>{t(`footer.link.third`)}</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">{t(`footer.contactus.title`)}</h4>
            <p className="my-5">{t(`footer.contactus.paragraph.first`)}</p>
            <p>{t(`defaultPhoneNumber`)}</p>
        </div>
    </div>

  </footer>
}

export default Footer