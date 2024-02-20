import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    name: string;
    description?: string;
    image: string
}

const Class = ({name, description, image}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

  const overlayStyle = `p-5 absolute z-30 flex 
  flex-col items-center justify-center 
  whitespace-normal bg-primary-500 text-center text-white 
  opacity-0 transition duration-500 hover:opacity-90`

  const overlaySize =  isAboveMediumScreen ? " h-[380px] w-[450px]" : " h-[400px] w-[300px]"

  return <li className="relative mx-5 inline-block h-[380px] w-[450px]">
    <div className={overlayStyle + overlaySize}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
    </div>
    <img alt={`${image}`} src ={image} />

  </li>
}

export default Class