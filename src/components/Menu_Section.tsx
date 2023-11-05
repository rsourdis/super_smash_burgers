import React from 'react'
import { Item } from '@type/products'
import Product_Card from './Product_Card'

type Props = {
  sectionName: string
  products: Item[]
}

const Menu_Section = ({ sectionName, products }: Props) => {
  return (
    <section className='w-full px-4 my-8 md:px-12 md:my-16 mx-auto'>
      <p className=' font-extrabold text-4xl mb-8 md:pl-8 md:mb-12'>{sectionName}</p>
      <div className='flex flex-col justify-center items-top gap-12 md:flex-row flex-wrap md:justify-start'>
        {products.map((item: Item, index: number) => (
          <Product_Card key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Menu_Section
