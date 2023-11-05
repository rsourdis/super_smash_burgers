import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Delivery = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto w-full gap-4 md:flex-row md:justify-start md:gap-8 md:mb-12'>
      <Link
        className='w-full md:w-[30%] mb-4 flex h-[70px] item-center justify-center rounded-xl bg-[#F5C143]'
        href={'https://glovoapp.com/es/es/valencia/super-smash-burgers-valencia/'}>
        <div className='relative h-full w-36'>
          <Image
            src='/assets/social/glovo.png'
            alt='Glovo Logo'
            fill
            className=' rounded-xl'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
      <Link
        className='w-full md:w-[30%] mb-4 flex h-[70px] item-center justify-center rounded-xl bg-[#fdfdfd]'
        href={
          'https://www.ubereats.com/store/super-smash-burgers/9Xb1I2h6UESHoj6jtw7PjA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlZhbGVuY2lhJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSnBiTmhyLTVJWUEwUnNJQVRQbkt2QWh3JTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTM5LjQ2MjYxNDElMkMlMjJsb25naXR1ZGUlMjIlM0EtMC4zNTM2NTQ4JTdE'
        }>
        <div className='relative h-full w-36'>
          <Image
            src='/assets/social/Uber_Eats_Logo.jpg'
            alt='Glovo Logo'
            fill
            className=' rounded-xl'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default Delivery
