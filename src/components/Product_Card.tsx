import { Item, Products } from '@type/products'
import React from 'react'
import Image from 'next/image'

type Props = {
  item: Item
}

const Product_Card = ({ item }: Props) => {
  return (
    <div className='w-full md:w-[30%]'>
      <div className=' w-[100%] h-[270px] relative md:h-[300px] mb-4'>
        <Image
          src={item.img}
          alt={item.name}
          fill
          className=' rounded-xl'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <p className=' font-medium text-xl mb-2'>{item.name}</p>
      <p className=' font-light text-base'>{item.description}</p>
    </div>
  )
}

export default Product_Card
