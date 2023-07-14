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
    // <div className="md:my-5">
    //   <div className="title text-center mb-14 lg:px-10 xl:px-20 m-5 ">
    //        <span className="text-[#0062f5] text-sm font-bold">PROMOTIONS</span>
    //             <h1 className="text-[#212121] font-bold text-[32px] lg:px-0 px-5 leading-[35px] ">
    //                   Our Promotions Events</h1>

    //     <div className="banner grid grid-cols-12 gap-4 lg:px-10 py-10 mb-20">
    //       <div className="lg:col-span-6 md:col-span-12 col-span-12">
    //         <div className=" ">
    //           <div className="banner-left-1  bg-[#d6d6d8]  text-[#212121] flex items-center
    //                            flex-col lg:flex-row  lg:w-[40vw] w-[90vw] lg:px-8 px-5 ">
    //             <div className="details flex-row ">
    //                <h3 className="font-bold text-4xl  sm:text-2xl mt-5">GET UP TO</h3>
    //                 <span className="font-bold text-5xl flex justify-start ml-8">60%</span>
    //                    <p className="font-[400] text-[1.125rem]  py-2">For the summer season</p></div>
    //             <Image src="/event1.jpg" alt=" " height={218} width={282} className=""></Image></div>
    //         </div>
    //         <div className="banner-left-2  bg-[#212121] mt-2 text-white pt-12 pb-8 px-8 lg:w-[40vw] w-[90vw]">
    //          <h3 className="font-[700] text-4xl mb-4 text-white ">GET 30% Off</h3>
    //           <p className="font-[400] text-sm mb-1">USE PROMO CODE</p>
    //           <Button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 lg:px-9 px-5'>
    //             DINEWEEKENDSALE</Button>
    //         </div>
    //       </div>
    //       <div className=" flex-1 lg:flex md:flex grid  justify-between items-center gap-2 lg:ml-3">
    //           <div className="banner-right-1 bg-[#efe1c7] flex flex-col justify-between items-center h-full">
    //             <div className="details w-[100%] ml-2 pt-4 text-xl leading-[24px]">
    //               <h1>Flex Sweatshirt</h1>
    //               <span>$100.00</span>
    //               <span className="font-bold ml-2">$75.00</span>
    //               <div className="img w-[280px] xl:h-[340px] lg:h-[240px] mt-6">
    //                 <Image src="/event2.jpg" height={100} width={266} alt="" className="lg:h-[68vh] xl:h-[71vh] "></Image>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="banner-right-2 bg-[#d7d7d9] flex flex-col justify-between items-center h-full">
    //           <div className="w-[100%] ml-2 mt-4 text-xl leading-[24px]">
    //           <h1>Flex Push Button Bomber</h1>
    //               <span>$225.00</span>
    //               <span className="font-bold ml-2">$190.00</span>
    //               <div className="img w-[280px] xl:h-[346px] lg:h-[240px]  lg:mt-5 mt-0">
    //                 <Image src="/event3.jpg" height={100} width={266} alt="" className="lg:h-[69vh] xl:h-[72vh]"></Image>
    //            </div>
    //           </div>
    //          </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
        
     
  )
}
export default Products;
