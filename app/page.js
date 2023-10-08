import Image from 'next/image'

import a from '@/public/a.jpg'
import Svg from '@/components/svg'

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col-reverse lg:flex-row p-4'>
      <div className="w-full flex flex-col justify-between p-4">
        <div className='flex flex-col gap-2'>
          <h1 id='_title' className="text-3xl font-bold"></h1>
          <ul id='_desc' className="text-black/60 p-4"></ul>
        </div>
        <ul id='_time' className='text-sm font-bold'></ul>
      </div>
      <div className='w-full relative'>
        <Image src={a} alt='map' className='w-full h-auto lg:max-h-[calc(100vh_-_4rem)] object-contain' />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Svg className='w-full h-full' pClassName='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' />
        </div>
      </div>
    </main>
  )
}
