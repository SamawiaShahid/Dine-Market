import Image from "next/image";
import { Button } from "@/components/ui/button";




const Products = () => {
  return (

    <div className='mt-14 flex-grow py-4 md:mt-[88px] md:py-8 lg:mt-[10px]'>
      <div className='mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20'>
        <div className='flex w-full flex-col items-center justify-center space-y-10 pt-6'>
          <p className='text-[#0062f5] text-sm font-bold'>Promotions</p>
          <p className='text-[#212121] font-bold text-[32px] lg:px-0 px-5 leading-[35px]'>Our Promtion Events</p>
          <div className='flex w-full flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0'>
            <div className='flex flex-col space-y-5 lg:basis-2/5 lg:justify-between'>
              <div className='flex basis-1 flex-row items-center bg-[#d6d6d8] px-8 pt-8 text-[#212121] custom1:flex-row custom1:pb-0 lg:basis-1/2'>
                <div className="banner-left-1  flex items-center
                               flex-col lg:flex-row  lg:w-[40vw] w-[90vw] lg:px-8 px-5 ">
                  <div className="details flex-row ">
                    <h3 className="font-bold text-4xl  sm:text-2xl mt-5">GET UP TO</h3>
                    <span className="font-bold text-5xl flex justify-start ">60%</span>
                    <p className="font-[400] text-[1.125rem]  py-2">For the summer season</p></div>
                  <Image src="/event1.jpg" alt=" " height={218} width={282} className=""></Image></div>
              </div>
              <div className='flex basis-1 flex-col items-center space-y-5 bg-[#212121] p-8 text-white lg:basis-1/2'>
                <p className='text-4xl font-extrabold'>Get 30% OFF</p>
                <div className='flex flex-col items-center justify-center space-y-1'>
                  <p className='font-[400] text-sm mb-1'>Use Promo Code</p>
                  < Button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 lg:px-9 px-5'>
                    DINEWEEKENDSALE</Button>
                </div>
              </div>
            </div>
            <div className='flex w-full flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 lg:lg:basis-3/5'>
              <div className='flex basis-1 flex-col justify-between bg-[#efe1c7] px-6 pt-6 text-[#212121] md:basis-1/2'>
                <div className='flex flex-col'>
                  <p className='text-lg font-normal'>Flex Sweatshirts</p>
                  <p className='text-lg font-normal'>
                    <span className='line-through'>$100.00</span>
                    <span className='ml-3 font-semibold'>$75.00</span>
                  </p>
                </div>
                <Image src='/event2.jpg' alt='promo' width={282} height={362} className='mx-auto'></Image>
              </div>
              <div className='flex basis-1 flex-col justify-between bg-[#d7d7d9] px-6 pt-6 text-[#212121] md:basis-1/2'>
                <div className='flex flex-col'>
                  <p className='text-lg font-normal'>Flex Push Button Bomber</p>
                  <p className='text-lg font-normal'>
                    <span className='line-through'>$225.00</span>
                    <span className='ml-3 font-semibold'>$190.00</span>
                  </p>
                </div>
                <Image src='/event3.jpg' alt='promotion' width={282} height={362} className='mx-auto'></Image>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}
export default Products;
