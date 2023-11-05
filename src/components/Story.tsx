import React from 'react'
import Image from 'next/image'
type Props = {}

const Story = (props: Props) => {
  return (
    <section className='w-full px-4 my-8 md:px-12 md:my-16 mx-auto'>
      <div className=' w-full flex flex-col justify-center items-top gap-4 md:flex-row flex-wrap md:justify-start'>
        <div className=' w-[100%] h-[170px] relative md:h-[230px] md:flex-1 object-cover object-center md:object-contain'>
          <Image src='/assets/brand/story_1.jpg' alt='story1' fill className=' rounded-xl' />
        </div>
        <div className=' w-[100%] h-[170px] relative md:h-[230px] md:flex-1 object-cover object-center md:object-contain'>
          <Image src='/assets/brand/story_2.jpg' alt='story1' fill className=' rounded-xl' />
        </div>
        <div className=' w-[100%] h-[170px] relative md:h-[230px] md:flex-1 object-cover object-center md:object-contain'>
          <Image src='/assets/brand/story_3.jpg' alt='story1' fill className=' rounded-xl' />
        </div>
      </div>
    </section>
  )
}

export default Story
