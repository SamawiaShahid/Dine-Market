import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";



const Products = () => {
  return (
    <div className="md:my-5">
      <div className="title text-center mb-14 lg:px-20 m-5 ">
           <span className="text-[#0062f5] text-sm font-bold">PROMOTIONS</span>
                <h1 className="text-[#212121] font-bold text-[32px] lg:px-0 px-5 leading-[35px] lg:mt-0 mt-5">
                      Our Promotions Events</h1>

        <div className="banner grid grid-cols-12 gap-4 lg:px-10 py-10 mb-20">
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
              <Button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 lg:px-9 px-5'>
                DINEWEEKENDSALE</Button>
            </div>
          </div>
          <div className=" flex-1 lg:flex grid  justify-between items-center gap-2 lg:ml-3">
              <div className="banner-right-1 bg-[#efe1c7] flex flex-col justify-between items-center h-full">
                <div className="details w-[100%] ml-2 pt-4 text-xl leading-[24px]">
                  <h1>Flex Sweatshirt</h1>
                  <span>$100.00</span>
                  <span className="font-bold ml-2">$75.00</span>
                  <div className="img w-[280px] h-[340px] mt-6">
                    <Image src="/event2.jpg" height={100} width={266} alt=""></Image>
                  </div>
                </div>
              </div>
              <div className="banner-right-2 bg-[#d7d7d9] flex flex-col justify-between items-center h-full">
              <div className="w-[100%] ml-2 mt-4 text-xl leading-[24px]">
              <h1>Flex Push Button Bomber</h1>
                  <span>$225.00</span>
                  <span className="font-bold ml-2">$190.00</span>
                  <div className="img w-[280px] h-[346px]  lg:mt-5 mt-0">
                    <Image src="/event3.jpg" height={100} width={266} alt=""></Image>
               </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
        
     
  )
}
export default Products;