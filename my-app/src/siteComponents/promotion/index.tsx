import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";



const Products = () => {
  return (
    <div className="md:my-5 ">
      <div className="title text-center mb-14 lg:px-0 m-5 ">
           <span className="text-[#0062f5] text-sm font-bold">PROMOTIONS</span>
                <h1 className="text-[#212121] font-bold text-[32px] lg:px-0 px-5 leading-[35px] ">
                      Our Promotions Events</h1>

        <div className="banner grid grid-cols-12 gap-2 lg:px-20 py-10 mb-20">
          <div className="lg:col-span-6 md:col-span-12 col-span-12">
            <div className=" ">
              <div className="banner-left-1  bg-[#d6d6d8]  text-[#212121] flex items-center
                               flex-col lg:flex-row  lg:w-[40vw] w-[90vw] lg:px-8 px-5 ">
                <div className="details flex-row ">
                   <h3 className="font-bold text-4xl  sm:text-2xl mt-5">GET UP TO</h3>
                    <span className="font-bold text-5xl flex justify-start ml-8">60%</span>
                       <p className="font-[400] text-[1.125rem]  py-2">For the summer season</p></div>
                <Image src="/event1.jpg" alt=" " height={218} width={282} className=""></Image></div>
            </div>
            <div className="banner-left-2  bg-[#212121] mt-2 text-white pt-12 pb-8 px-8 lg:w-[40vw] w-[90vw]">
             <h3 className="font-[700] text-4xl mb-4 text-white ">GET 30% Off</h3>
              <p className="font-[400] text-sm mb-1">USE PROMO CODE</p>
              <Button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 lg:px-9 px-10'>
                DINEWEEKENDSALE</Button>
            </div>
          </div>
         
            <div className="banner-right flex w-full flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 lg:basis-3/5">
              <div className="banner-right-1 bg-[#efe1c7]  basis-1 flex flex-col justify-between px-6 pt-6 md:basis-1/2 ">
                <div className=" flex flex-col">
                  <p className=" px-0 text-2xl lg:mt-5 mt-5">Flex Sweatshirt</p>
                  <div className="price">
                    <span className="relative">$100.00 </span>
                    <span className="font-[600] text-[18px] ml-[10px] leading-[23px]">$75.00</span></div>
                  <Image src="/event2.jpg" alt=" " height={218} width={222} className="lg:w-[100%] lg:h-[50vh] h-90vh  object-contain lg:mt-0 mt-5 "></Image></div>
              </div>
              <div className="banner-right-2 bg-[#d7d7d9] basis-1 flex flex-col justify-between px-6 pt-6 md:basis-1/2">
                <div className=" details box-border font[400] text-[15px]  lg:px-10 px-5 lg:w-[20vw] md:w-60 ">
                  <p className=" px-0 text-2xl mt-5">Flex Push Button Boomber</p>
                  <div className="price">
                    <span className="relative ">$225.00 </span>
                    <span className="font-[600] text-[18px] ml-[10px] leading-[23px]">$190.00</span></div>
                  <Image src="/event3.jpg" alt=" " height={362} width={282} className="mx-auto object-contain"></Image></div>
              </div>

           
          </div>
        </div>
      </div></div>


  )
}
export default Products;
