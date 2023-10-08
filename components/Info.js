import Image from "next/image"
import {IoClose} from "react-icons/io5"

const Info = ({ title, info, img }) => (
  <div className="flex flex-col absolute w-96 bg-white overflow-hidden rounded-2xl">
    <Image src={img} className="w-full h-full object-contain" />
    <div className="px-6 py-4">
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
    <IoClose size={32} color="#eeee" className="absolute right-2 top-2 cursor-pointer" />
  </div>
)

export default Info