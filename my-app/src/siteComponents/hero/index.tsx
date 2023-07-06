import Image from "next/image";
 import { Button } from "@/components/ui/button";
 import {CgShoppingCart} from 'react-icons/cg'
 import Link from "next/link";
const hero = () => {
  return (

    
    <div className="lg:px-28 lg:py-28 px-5 py-10 font-Sora,sans-serif" >
     
      <div className="img bg-[#ffece3]  mx-10 order-last self-center float-right rounded-full lg:visible visible ">
        <Image src="/lady.jpg"  height={35} width={600} alt="" className=" -mt-8  lg:w-[180%] lg:h-[100%] w-[400%] h-0" />
      </div>
      <div className="btn flex">
          <Button className="font-bold text-md   lg:w-[40%]  px-2 ">Sale 70%</Button>
        </div>
        <div className="h1 text-5xl py-10 font-bold text-[#212121] lg:leading-[48px] leading-[40px] lg:w-[45%] w-[50%] ">
        <h1 className="xl:tracking-wider xl:leading-12  ">An Industrial Take on Streetwear</h1>
        </div>
        <div className="paragraph text-[#666] lg:col-span-1 col-span-6">
        <p className="font-normal leading-6">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        </div>
        <div className=" py-10 ">
       <Link href="/Allproducts">
      <Button className="h-19 w-32 bg-black text-white font-bold rounded-none "> <div className=""><CgShoppingCart /></div>
       Start Shooping</Button></Link>
             </div>
             <div className="features flex gap-5  ">
              <Image src="/feature1.jpg"alt="img" height={100} width={100}></Image>
              <Image src="/feature2.jpg"alt="img" height={100} width={100}></Image>
              <Image src="/feature3.jpg"alt="img" height={100} width={100}></Image>
              <Image src="/feature4.jpg"alt="img" height={100} width={100}></Image>
             </div>
             
      </div>
      
     
  
    
  

  );
};

export default hero;