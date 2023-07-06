import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";
import Link from "next/link";


const Products =() =>{
    return(
     <div className="md:my-5 ">
        <div className="title text-center mb-14 lg:px-0 m-5 ">
            <span className="text-[#0062f5] text-sm font-bold">PROMOTIONS</span>
            <h1 className="text-[#212121] font-bold text-[32px] lg:px-0 px-5 leading-[35px] lg:mt-0 mt-5">
              Our Promotions Events</h1>
        
        <div className="banner grid gap-2 lg:px-20 py-10 mb-20  ">
          
            <div className=" md:col-span-10"> 
            <div className="banner-left-1  bg-[#d6d6d8]  text-[#212121] flex items-center
             flex-col lg:flex-row  lg:w-[40vw] w-[90vw] lg:px-8 px-5">
              <div className="details flex-row ">
            <h3 className="font-bold text-4xl  sm:text-2xl mt-5">GET UP TO</h3> 
            <span className="font-bold text-5xl flex justify-start">60%</span> 
            <p className="font-[400] text-[1.125rem]  py-2">For the summer season</p></div>
             <Image src="/event1.jpg" alt=" " height={218} width={282} className=""></Image></div>
           </div>
           <div className="banner-left-2  bg-[#212121] mt-2 text-white pt-12 pb-8
            flex items-center justify-center  flex-col px-8 lg:w-[40vw] lg:h-[35vh] h-[50vh] w-[90vw]">
            <h3 className="font-[700] text-4xl mb-4 text-white ">GET 30% Off</h3>
            <p className="font-[400] text-sm mb-1">USE PROMO CODE</p>
            <Button className='text-[17px] font-[700] bg-[#474747] text-white mt-1 rounded-md py-2 lg:px-9 px-10'>
              DINEWEEKENDSALE</Button>
           </div>
           
        <div className="banner-right lg:flex grid items-center gap-4 mx-2  mt-2 flex-row lg:px-0  -ml-0">
            <div className="banner-right-1   bg-[#efe1c7] flex-col justify-between items-center  lg:-mt-[190px]  "> 
            <div className=" details box-border font[400] text-[15px] leading-[24px] px-10  lg:w-[20vw] lg:h-[73vh] sm:h-[70vh] sm:w-[90vw] ">
            <p className=" px-0 text-2xl lg:mt-5 mt-5">Flex Sweatshirt</p>
            <div className="price">
             <span className="relative">$100.00 </span> 
            <span  className="font-[600] text-[18px] ml-[10px] leading-[23px]">$75.00</span></div>
             <Image src="/event2.jpg" alt=" " height={218} width={222} className="lg:h-[50vh] h-[50vh] lg:w-[100%]  mt-5 "></Image></div>
           </div>
           <div className="banner-right-2 bg-[#d7d7d9] flex-col justify-between items-center lg:-mt-[190px]"> 
            <div className=" details box-border font[400] text-[15px]  lg:px-10 px-5 lg:w-[20vw] lg:h-[73vh] sm:h-[80vh] sm:w-[100vw] lg:mt-5">
            <p className=" px-0 text-2xl mt-5">Flex Push Button Boomber</p>
            <div className="price">
             <span className="relative ">$225.00 </span> 
            <span  className="font-[600] text-[18px] ml-[10px] leading-[23px]">$190.00</span></div>
             <Image src="/event3.jpg" alt=" " height={218} width={222} className=" h-[41vh] lg:w-[100%] mt-2 "></Image></div>
           </div>
           
        </div>
     </div>
      </div></div>

   
)
}
export default Products;