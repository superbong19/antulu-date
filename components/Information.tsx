import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoHome, IoLocationSharp, IoSchool } from "react-icons/io5";
import { GiBodyHeight, GiWineBottle } from "react-icons/gi";
import { MdOutlineSmokingRooms } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { FaHandsPraying } from "react-icons/fa6";
import { FaXmark, FaRegHeart } from "react-icons/fa6";
const Information = () => {
  const handleScroll = () => {
    if (window.scrollY !== 0) {
      window.scrollTo(window.scrollX, 0);
    }
  };
  const [position, setPosition] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<any>(null);
  const leftRef = useRef<any>(null);
  const rightRef = useRef<any>(null);
  function handleTouchStart(e: any) {
    // window.addEventListener('scroll', handleScroll);
    setOffset(e.touches[0].clientX)
    const container = containerRef?.current?.childNodes[0].style
    if (container?.style?.left) container.style.position = 'relative'
    // console.log('TouchStart');
  }
  function handleTouchMove(e: any) {
    setPosition(e.touches[0].clientX - offset)
    const container = containerRef?.current.style
    container.position = 'relative'
    container.left = position + 'px'
    // console.log(container.left);
    // console.log('TouchMove');
  }
  function handleTouchEnd() {
    // window.removeEventListener('scroll', handleScroll);

    if (position < 250 && position > -250) {
      // console.log(containerRef?.current);
      const container = containerRef?.current.style
      container.position = 'relative'
      container.left = 0 + 'px'

    } else {
      const container = containerRef?.current.style
      container.position = 'relative'
      container.left = 0 + 'px'
    }
    const rightAction = rightRef?.current?.style
    const leftAction = leftRef?.current?.style
    rightAction.background = ``
    leftAction.display = ''
    rightAction.display = ''
    leftAction.background = ``
    rightAction.color = '#36d25e'
    leftAction.color = '#D91E36'
    console.log('TouchEnd');
  }
  useEffect(() => {
    const rightAction = rightRef?.current?.style
    const leftAction = leftRef?.current?.style
    if (position > 0) {
      leftAction.display = 'none'
      rightAction.display = ''
      leftAction.background = ''
      leftAction.color = '#fff';
      if ((position / 250 * 100) > 100) rightAction.color = '#fff';
      else {
        rightAction.color = '#fff';
        rightAction.background = `radial-gradient(circle, #36d25e ${position / 250 * 100}%, transparent 50%)`
      }
    }
    else if (position < 0) {
      leftAction.display = ''
      rightAction.display = 'none'
      rightAction.background = ''
      rightAction.color = '#fff';
      if ((-position / 250 * 100) > 100) leftAction.color = '#fff';
      else {
        leftAction.color = '#fff';
        leftAction.background = `radial-gradient(circle, #D91E36 ${-position / 250 * 100}%, transparent 50%)`
      }
    }

  }, [position, offset])
  return (
    <>
      <main
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className='overflow-hidden'
      >
        <div className='relative inline-block'>
          <Image
            src={'/Congluan.JPG'}
            alt={''}
            width={1000}
            height={1000}
          />
        </div>
        <h1 className='font-bold text-2xl pt-4 pl-2'>Lê Văn Công Luận, 21</h1>
        <h2 className='p-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <ul className='flex gap-4 flex-col pl-4 text-slate-500'>
          <li className='font-bold text-l flex items-center gap-1'>
            <IoLocationSharp />
            <span>Đang ở Đà Nẵng</span>
            <div className='w-1/3'>
            </div>
          </li>
          <li className='h- font-bold text-l flex items-center gap-1'>
            <GiBodyHeight />
            <span>180 Cm</span>
            <div className='w-1/3'>

            </div>
          </li>
          <li className='font-bold text-l flex items-center gap-1'>
            <IoSchool />
            <span>Trình độ Đại học</span>
            <div className='w-1/3'>

            </div>
          </li>
          <li className='font-bold text-l flex items-center gap-1'>
            <IoHome />
            <span>Quê quán Quảng Trị</span>
            <div className='w-1/3'>

            </div>

          </li>
          <li className='font-bold text-l flex items-center gap-1'>
            <MdOutlineSmokingRooms />
            <span>Không</span>
            <div className='w-1/3'>

            </div>
          </li>
          <li className='font-bold text-l flex items-center gap-1'>
            <GiWineBottle />
            <span>Không</span>
            <div className='w-1/3'>

            </div>
          </li>
          <li className='font-bold text-l flex items-center gap-1'>
            <MdOutlinePets />
            <span>Không</span>
            <div className='w-1/3'>

            </div>
          </li>
          <li className='font-bold text-l flex items-center gap-1'>
            <FaHandsPraying />
            <span>Không</span>
            <div className='w-1/3'>

            </div>
          </li>
        </ul>
        <h2 className='font-bold text-xl p-2'>Interest</h2>
        <ul className='flex gap-4 flex-wrap text-slate-500'>
          <li className='border-solid border-2 border-indigo-600 rounded-2xl p-2 relative'>
            Đá bóng
          </li>
        </ul>
        <div className='flex w-full flex-wrap justify-start gap-0 pt-2 text-slate-500'>
          <div className='w-full pl-1 pr-1 relative pt-2'>
            <img alt="" src="https://file.rendit.io/n/h9pQ_LnscS.png" />
          </div>
          <div className='w-full pl-1 pr-1 relative pt-2'>
            <img alt="" src="https://file.rendit.io/n/h9pQ_LnscS.png" />
          </div>
        </div>
      </main>
      <div className="action__match">
        <div className="action__match--remove"
          ref={leftRef}
        >
          <FaXmark />
        </div>
        <div className="action__match--add"
          ref={rightRef}
        >
          <FaRegHeart />
        </div>

      </div>
    </>
  )
}

export default Information