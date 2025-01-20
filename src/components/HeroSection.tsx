import Image from 'next/image'
import Button from './Button'
import mapImg from '../../public/images/map.png'
import AnimatedText from './AnimatedText'
const HeroSection = () => {
  return (
    <section className=" h-screen flex items-center justify-center">
      <Image
        src={mapImg}
        color='white'
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className='opacity-10'
      />
      <div className="max-w-[1000px] relative z-10 text-left font-light bg-white p-12 leading-3 py-8 bg-opacity-10  rounded-3xl  lg:-mt-14">
        <AnimatedText
        highlightColor='text-[#60a6e7]'
        text=' We build products that shape a better future'
        className='text-4xl font-semibold md:text-6xl lg:text-7xl  text-white mb-4'
        highlightWords={["products"]}
        />
        
       <div className='text-left p-4'>
       <p className="text-xl md:text-2xl text-gray-200 mb-8">
        We&apos;re the architects of digital excellence across industries. 
        We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.
        </p>
        <Button text='Book a Call' showPlay={true}/>
       </div>
      </div>
    </section>
  )
}

export default HeroSection

