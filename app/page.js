"use client"

import Image from 'next/image'
import { IoImages, IoBook, IoClose, IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'

import data from '@/public/data.json'

import map from '@/public/map.jpg'
import { useEffect, useState } from 'react'

const Slider = ({ imgs }) => {
  const [current, setCurrent] = useState(0)
  const Next = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length)
  }
  const Prev = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % imgs.length)
  }
  return (
    <section className="absolute left-0 top-0 w-full h-full overflow-hidden flex flex-row items-center justify-center">
      <Image src={imgs[current]} width={800} height={800} loading="lazy" alt="gallery" className="relative w-full h-full object-cover object-center bg-gray-500" />
      <IoArrowBackCircle onClick={Next} size={32} color="#eee8" className="absolute left-2 duration-100 cursor-pointer hover:fill-[#eee]" />
      <IoArrowForwardCircle onClick={Prev} size={32} color="#eee8" className="absolute right-2 duration-100 cursor-pointer hover:fill-[#eee]" />
      <div className="absolute flex flex-row gap-2 bottom-4">
        {Array.from({length: imgs.length}, (_, i) => (
          <div onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full cursor-pointer ${i == current ? 'bg-[#eee]' : 'bg-[#eee8]'}`} />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [title, setTitle] = useState(data.list[current].title)
  const [desc, setDesc] = useState(data.list[current].desc)
  const [gallery, setGallery] = useState(data.list[current].gallery)
  const [time, setTime] = useState(data.list[current].time)
  const [menu, setMenu] = useState(data.list[current].menu)
  const [isGallery, setIsGallery] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    setTitle(data.list[current].title)
    setDesc(data.list[current].desc)
    setGallery(data.list[current].gallery)
    setTime(data.list[current].time)
    setMenu(data.list[current].menu)
    setIsGallery(false)
    setShowMenu(false)
  }, [current])
  return (
    <main className='w-screen h-screen flex items-start mobile:items-center justify-center bg-white mobile:bg-gray-100'>
      <section className='bg-white w-full mobile:max-w-[calc(100vw_-_4rem)] flex flex-col-reverse mobile:flex-row justify-center mobile:rounded-2xl mobile:overflow-hidden mobile:shadow-2xl'>
        <div className="flex-1 flex flex-col justify-between p-8 gap-8 bg-white h-auto">
          <div className='flex flex-col gap-2'>
            {title && <h1 className="text-3xl font-bold">{title}</h1>}
            {desc && <ul className="text-black/60 p-4">
              {desc.map((x, i) => <li key={i}>{x}</li>)}
              </ul>}
          </div>
          <div className='flex justify-between items-end'>
            {time ? <ul className='text-sm font-bold text-left'>
              {time.map((x, i) => <li key={i}>{x}</li>)}
              </ul> : <div className='w-full' />}
            <div className='flex gap-2'>
              {gallery && <div onClick={() => { setIsGallery(!isGallery); setShowMenu(false) }} className='border border-neutral-500 p-2 rounded-full group duration-100 hover:bg-neutral-200 cursor-pointer'>
                <IoImages size={16} color='#525252' className='duration-100 group-hover:fill-neutral-800' />
              </div>}
              {menu && <div onClick={() => { setShowMenu(!showMenu); setIsGallery(false)}} className='border border-neutral-500 p-2 rounded-full group duration-100 hover:bg-neutral-200 cursor-pointer'>
                <IoBook size={16} color='#525252' className='duration-100 group-hover:fill-neutral-800' />
              </div>}
            </div>
          </div>
        </div>
        <div className='relative'>
          <Image src={map} alt='map' className='w-full h-auto mobile:max-h-[calc(100vh_-_4rem)] object-contain' />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <svg className='w-full h-full' viewBox="0 0 396.875 529.16669" style={{strokeWidth: '1pt'}}>
              <path onClick={() => setCurrent(1)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 87.883539,-62.061279 5.644097,-9.998112 19.028664,6.450393 -6.45039,12.417012 -16.125993,-5.321575 0.322519,-2.580158 z" />
              <path onClick={() => setCurrent(2)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 105.62213,-38.517337 8.22425,-19.673705 -1.93512,-0.96756 3.54772,-6.289135 29.02678,7.256695 -10.80442,30.639377 -28.05921,-6.611654 z" />
              <path onClick={() => setCurrent(3)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 50.632505,16.633542 c 6.934176,7.417956 15.158429,0 19.189927,1.45134 4.031496,1.45134 7.901734,11.933232 16.932288,7.417954 9.030552,-4.515276 -2.580158,-11.771971 -2.257639,-13.223309 0.322519,-1.45134 7.417954,0.967558 8.385514,0 0.96756,-0.96756 0,-4.6765367 0,-4.6765367 0,0 8.708035,0 6.772915,-8.8692936 -1.935118,-8.8692937 -13.54583,-3.8702376 -13.54583,-3.8702376 l -0.161259,-2.7414167 c 0,0 5.644095,-0.48378 7.740473,-1.4513401 2.096378,-0.9675603 3.386458,-3.7089763 3.386458,-3.7089763 0,0 3.063938,0 4.031498,-0.645041 0.96756,-0.645039 2.58016,-2.580159 3.70898,-2.580159 1.12882,0 2.41889,0.96756 2.41889,0.96756 0,0 -2.09637,6.4503963 2.4189,6.4503963 4.51528,0 4.8378,-1.2900793 4.8378,-2.7414193 0,-1.451337 -1.29008,-3.708977 -1.29008,-3.708977 0,0 1.29008,-2.257639 1.29008,-3.870237 0,-1.612599 -1.6126,-2.580159 -1.6126,-2.580159 l 0.48378,-2.096378 -0.96756,-0.806299 c 0,0 2.90268,-7.901734 -3.2252,-7.095435 -6.12787,0.806299 -3.87023,4.354018 -3.87023,4.354018 l -1.29008,1.773859 c 0,0 -5.644099,-1.93512 -6.450398,-0.322522 -0.8063,1.612601 -0.8063,2.74142 -0.8063,2.74142 0,0 -5.966616,-8.385514 -15.964728,-5.321578 -9.998111,3.063938 -10.643152,6.611657 -11.449452,10.159373 -0.806299,3.547718 0.645039,9.1918152 0.645039,9.1918152 l -1.935118,0.9675574 0.806299,3.8702377 h 0.32252 c 0,0 0.16126,4.19275674 -3.870235,6.7729152 C 61.275658,5.0228319 46.312589,7.9863812 50.632505,16.633542 Z" />
              <path onClick={() => setCurrent(4)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 40.468605,-53.415535 2.222262,9.777955 6.444562,-0.444452 2.888941,40.4451785 c 0,0 -12.889122,2.2222645 -18.222553,4.44452634 C 28.468386,3.0299347 21.357148,9.6967229 21.357148,9.6967229 l -3.555621,-1.5555833 -1.111131,0.4444524 1.111131,8.222371 c 0,0 -2.444488,2.888941 -2.888941,5.777884 -0.444452,2.88894 0.666679,6.444559 0.666679,6.444559 l -2.888943,0.444453 2.44449,12.000219 -11.5557665,4.000071 v 2.444491 l -8.4445977,3.777845 c 0,0 -6.2223358,-5.111202 -8.6668238,-12.444669 -2.444488,-7.333467 -3.111167,-18.444781 -3.111167,-18.444781 l 3.777846,-0.666679 c 0,0 -2.000036,-10.000181 -0.888905,-14.8891595 1.111131,-4.88897603 3.111166,-8.88905 3.111166,-8.88905 l -1.333357,-6.0001096 1.333357,-2.6667139 -2.222261,-16.000291 c 0,0 13.55580206,-12.222443 23.333757,-16.889195 9.777955,-4.666753 30.000545,-8.222372 30.000545,-8.222372 z" />
              <path onClick={() => setCurrent(5)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 33.135139,25.697013 4.888978,-2.222261 4.66675,2.444488 v 3.555619 c 0,0 2.000036,2.44449 0,6.666788 -2.000035,4.2223 -12.000216,14.444707 -19.555909,8.000145 -7.555693,-6.444562 3.111166,-10.444633 6.222335,-10.444633 3.111167,0 4.66675,-3.333393 4.66675,-3.333393 L 32.690686,30.14154 Z" />
              <path onClick={() => setCurrent(6)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 237.64613,18.032074 1.90757,-5.282443 -2.78797,-14.0865225 v -2.2010184 l 25.23837,-1.3206121 3.52163,15.847338 h 4.10855 l 3.52163,17.901618 -1.02714,4.402039 -30.08058,2.054283 z" />
              <path onClick={() => setCurrent(7)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 237.66198,44.733938 44.98496,-1.567419 3.29157,18.809039 -45.45517,1.72416 z" />
              <path onClick={() => setCurrent(8)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 180.29441,59.1542 21.31693,-26.01917 19.12252,10.97194 -20.5332,26.332654 z" />
              <path onClick={() => setCurrent(9)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 198.80083,117.53129 1.01242,-9.87104 5.56829,-9.871042 59.22624,23.032422 -6.58069,22.02002 -20.5014,-8.09932 -8.09932,18.72968 37.20624,15.18621 -8.09932,23.53863 -25.05726,-8.85862 -11.38967,24.04483 -28.09449,-11.38965 -0.50621,-5.06209 -11.64277,-5.31516 v -4.55586 l -3.29033,-2.53105 4.04965,-10.37723 3.54344,1.0124 1.77173,-4.55586 -10.12415,-4.04966 0.2531,-5.31518 7.08692,-13.66759 11.64275,4.80897 -1.21984,5.3744 2.83295,-4.63574 10.68797,3.60558 -0.51509,5.92344 -2.18911,4.12065 2.18911,1.03018 11.20304,-28.20076 h 1.67402 l 1.03016,-5.40837 -10.04411,-3.21926 0.51509,-2.31787 z" />
              <path onClick={() => setCurrent(10)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m -36.516651,77.775067 9.705052,2.426263 -10.675556,21.35112 2.426263,3.63939 23.777376,7.52141 1.213131,2.42627 2.1836378,-2.42627 15.770709,4.6099 2.4262632,7.03617 -4.367273,8.24929 0.4852511,2.18364 -4.3672733,10.1903 -8.9771721,-2.42626 -15.2854577,26.20364 -0.242626,-27.41677 -3.396768,5.82303 -24.020002,-7.27879 -1.698384,-4.6099 10.432931,-20.13798 -8.977173,-2.91152 -1.455758,-4.36727 z" />
              <path onClick={() => setCurrent(11)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 34.572853,96.457293 -9.705052,24.747877 -3.15414,5.82304 -11.8886895,-3.15415 -1.6983842,-6.55091 -16.2559601,-4.85252 -1.9410122,2.66889 -0.970505,-2.42627 -24.262627,-7.76404 -2.426264,-3.39676 12.859192,-24.262634 z" />
              <path onClick={() => setCurrent(12)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 115.92054,93.566049 -0.29871,5.11454 -7.91757,-2.144342 -1.48454,4.783533 -17.154727,-5.443329 -2.639187,5.938169 -3.958783,-1.31959 -5.608272,12.70109 -5.443326,-1.64949 -4.45363,10.3918 1.649491,0.82475 0.824746,10.55675 -5.773221,12.70109 9.072208,3.29899 v 1.81444 l 12.701092,3.95877 0.329899,0.9897 4.948478,1.9794 0.494847,1.81444 18.969165,5.93817 0.16495,6.26809 17.15472,5.60826 -0.16495,1.15465 12.20625,4.28868 0.32989,1.97937 -6.43302,16.32998 -3.79383,-0.32988 -9.56706,-2.9691 -0.16495,-2.96908 -27.216622,-9.23716 v -2.80413 l -4.61858,-1.15464 -0.989695,2.80413 -9.896954,-3.46392 -0.329898,-6.598 -14.350587,-4.61856 v -2.14435 l -8.907259,-2.63919 -0.494847,-6.26806 -10.226855,-3.62889 -2.309289,6.10312 -25.732083,-8.57737 -1.319594,-10.39179 11.216548,-21.4434 12.371194,-29.525921 h 0.989698 l 4.453628,-9.896954 -1.814442,-0.659796 -0.659796,-6.433021 12.206245,-26.721779 22.598046,7.092818 0.494848,4.453628 22.927947,6.927868 0.824746,6.59797 -1.649492,2.63919 15.010383,4.288681 0.82474,-0.49485 6.76292,2.309291 z" />
              <path onClick={() => setCurrent(13)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 115.55644,97.169022 14.78638,4.162088 0.7667,-2.409628 5.80502,-12.486272 v -1.204815 l -16.10072,-4.819263 -5.03832,13.47203 z" />
              <path onClick={() => setCurrent(14)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 130.23329,102.20734 20.91998,6.4622 5.58596,-13.691091 v -2.519161 l -20.04375,-5.805019 -5.91455,12.705329 z" />
              <path onClick={() => setCurrent(15)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 93.896962,122.13871 8.373198,-18.86269 43.52222,13.52593 -7.36105,19.41477 z" />
              <path onClick={() => setCurrent(16)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 200.7103,257.33187 2.0171,-12.35472 1.76496,-1.51283 2.77352,-10.58976 2.52137,-2.52138 2.01708,-7.31197 11.59833,-9.07693 3.52991,4.03418 8.06839,-6.8077 5.04275,5.79916 8.8248,-6.8077 17.90174,19.41457 -4.03418,12.85899 -11.85045,8.82481 -2.77353,-1.51284 -3.27779,10.08549 -4.00439,2.83097 -2.17569,-1.9779 -3.26353,2.57128 -2.76905,-3.16463 -2.2746,7.12041 -11.76848,9.49391 z" />
              <path onClick={() => setCurrent(17)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 178.90263,226.504 2.66504,-0.60177 1.1176,-2.06327 2.57908,1.28955 2.40715,-0.77372 0.85968,2.57905 2.57908,1.37552 -1.20356,2.32116 0.68776,2.06327 -2.75103,0.77372 -1.28953,2.14924 -2.66504,-1.54744 -2.2352,0.94565 -0.77372,-2.49312 -2.57908,-1.1176 1.28952,-2.32116 z" />
              <path onClick={() => setCurrent(18)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 66.939326,226.59634 14.151965,-14.65739 c 0,0 7.075982,5.81242 9.855832,9.60313 2.77985,3.79069 5.559697,8.59227 5.559697,8.59227 l 29.82021,-7.07599 c 0,0 0,-9.0977 1.01085,-12.88841 1.01086,-3.79069 2.77985,-9.35041 2.77985,-9.35041 l 30.07293,9.0977 v 6.57056 c 0,0 -4.3747,8.44034 2.27442,27.7985 6.59398,19.19763 18.44809,28.30393 18.44809,28.30393 l -0.75814,8.08683 -17.68995,20.72251 -17.68996,-15.16282 -38.91789,10.36127 -2.27443,9.0977 -20.217088,-6.31785 -1.010854,-16.17366 -1.263567,-0.50544 c 0,0 0.252714,-11.87754 -1.516283,-16.67909 -1.768996,-4.80158 -5.306986,-7.83413 -5.306986,-7.83413 l -0.505428,-10.36127 -5.306986,-3.53798 z" />
              <path onClick={() => setCurrent(19)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 137.4246,203.43654 c 0,0 7.69746,-12.54524 17.87667,-7.80819 14.09204,6.55796 5.54794,19.72597 5.54794,19.72597 l -1.23288,-5.34244 z" />
              <path onClick={() => setCurrent(20)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m 44.722187,262.42084 1.888744,-2.51833 c 0,0 2.392408,-0.50366 3.65157,0.25183 1.259163,0.75549 1.510993,1.51101 1.510993,1.51101 0,0 12.969372,-1.13326 16.117279,8.81412 3.147904,9.94738 -1.00733,17.62828 -9.065969,20.77619 -8.058639,3.14791 -9.69555,2.51831 -11.584292,1.6369 -1.888743,-0.88141 -4.910735,-9.31781 -5.666231,-13.34712 -0.755497,-4.02931 -3.021989,-11.33245 -1.762827,-13.72486 1.259163,-2.39242 4.910733,-3.39974 4.910733,-3.39974 z" />
              <path onClick={() => setCurrent(21)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m -36.653562,269.31924 50.321749,-12.16308 5.008325,20.62954 c 0,0 -4.173604,0.11925 -5.7238,1.66944 -1.550197,1.55019 -1.78869,3.21963 -1.78869,3.21963 l -1.788686,0.47697 c 0,0 -1.7886892,-4.76983 -5.2468171,-5.00833 -3.45813059,-0.23846 -5.00832696,3.33889 -5.3660648,3.93513 -0.3577352,0.59623 0,3.45813 0,3.45813 l -30.1691991,7.39325 z" />
              <path onClick={() => setCurrent(22)} className='fill-transparent stroke-transparent hover:cursor-pointer hover:fill-white/40 hover:stroke-neutral-200/80' transform="translate(93.533829,116.08334)" d="m -55.331057,331.66957 4.929388,-1.64314 -6.367126,-20.12833 22.593035,-7.39408 13.35043,40.05128 -27.727817,9.24261 z"/>
            </svg>
          </div>
          {isGallery && <>
            <Slider imgs={gallery} />
            <IoClose onClick={() => setIsGallery(false)} size={32} color="#fff" className="absolute right-2 top-2 duration-100 cursor-pointer hover:fill-[#fffa]" />
          </>}
          {showMenu && <>
            <Image src={menu} width={800} height={800} alt='menu' loading='lazy' className='absolute top-0 left-0 w-full h-full object-cover bg-gray-500' />
            <IoClose onClick={() => setShowMenu(false)} size={32} color="#fff" className="absolute right-2 top-2 duration-100 cursor-pointer hover:fill-[#fffa]" />
          </>}
        </div>
      </section>
    </main>
  )
}
