import { Item } from '@type/products'
import products from '@lib/products.json'
import Image from 'next/image'
import Menu_Section from '@components/Menu_Section'
import Delivery from '@components/Delivery'

export default function Home() {
  return (
    <main className='min-h-screen py-8'>
      <header className=' w-screen flex flex-row justify-center md:justify-start mb-6 px-8'>
        <div className='w-[200px] h-[80px] relative md:h-[100px]'>
          <Image
            src='/assets/brand/logo_amarillo_negro.png'
            alt='Banner'
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </header>
      <section>
        <div className=' w-[100vw] h-[270px] relative md:h-[600px]'>
          <Image
            src='/assets/products/banner_1.jpg'
            alt='Banner'
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </section>
      <Menu_Section sectionName='COMBOS' products={products.combos} />
      <Menu_Section sectionName='SMASH BURGERS' products={products.burgers} />
      <Menu_Section sectionName='SIDES' products={products.sides} />
      <Menu_Section sectionName='SWEET SIDES' products={products.sweetSides} />
      {/* <Menu_Section sectionName='DRINKS' products={products.drinks} /> */}
      <footer className='w-full px-4 my-8 md:px-12 md:my-16 mx-auto'>
        <p className=' font-extrabold text-4xl mb-8 md:pl-8 md:mb-12'>Order Now</p>
        <Delivery />
      </footer>
    </main>
  )
}
