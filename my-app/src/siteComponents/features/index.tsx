import Image from "next/image";

import Link from "next/link";

const Features =()=>{
    return(
        <div className="">
            <div className="title flex justify-end bg-[linear-gradient(180deg,#fff 50%,#fbfcff 0)] mt-10 ">
                <h1 className="font-[700] lg:leading-[55px] leading-[40px] text-[#212121] lg:w-[45%]  lg:text-6xl text-4xl lg:px-0 px-6">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>
                <div className="lg:grid grid-cols-12 gap-5">
                <div className="lg:col-span-4 relative md:col-span-12 col-span-12">
                    <div className="font-bold text-[#212121] text-6xl lg:text-8xl absolute opacity-[.07] z-[2] px-10 py-20 leading-[90px]">Different from others</div>
                    <div className="grid grid-cols-12 ">
                 
                            <div className="lg:col-span-6 col-span-12 ">
                                <div className="grid  grid-cols-12 col-span-12 lg:flex px-5 lg:gap-24 gap-0  py-10">
                                    <div className="mb-4  lg:col-span-12 col-span-6    ">
                                        <h3 className='text-[#212121] text-lg font-bold'>Using Good Quality Materials</h3>
                                        <p className='text-[#212121] font-[300] text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    </div>
                                    <div className="mb-4 lg:col-span-12 col-span-6 ">
                                        <h3 className='text-[#212121] text-lg font-bold'>100% Handmade Products</h3>
                                        <p className='text-[#212121] font-[300] text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        </p>
                                    </div></div>
                                    <div className="grid  grid-cols-12 col-span-12 lg:flex px-5 lg:gap-24 gap-0 ">
                                    <div className="mb-4 lg:col-span-12 col-span-6 ">
                                        <h3 className='text-[#212121] text-lg font-bold'>100% Handmade Products</h3>
                                        <p className='text-[#212121] font-[300] text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        </p>
                                    </div>
                                    <div className="mb-4 lg:col-span-12 col-span-6">
                                        <h3 className='text-[#212121] text-lg font-bold'>100% Handmade Products</h3>
                                        <p className='text-[#212121] font-[300] text-base c'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                </div>
             
                <div className="lg:col-span-3 md:col-span-6 col-span-12 py-10  lg:px-0 px-3">
                    <Image src="/feature.jpg" width={300} height={350} alt='feature' />
                </div>
                <div className="lg:col-span-1 md:col-span-6 col-span-12 lg:px-0  px-10 lg:tracking-tight   lg:py-10 py-0 lg:-ml-7 ml-0 " >
                    <p className='text-justify text-base text-[#212121]'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched
                        attention to detail and care. The Natural color is the actual natural color of the fiber,
                        undyed and 100% traceable.</p>
                    <Link href='/Allproducts' >
                        <button className="bg-[#212121] mt-8 font-[600] transition all
                         hover:bg-white hover:text-black hover:border hover:border-black w-[150px] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">See All products</button>
                    </Link>
                </div>
            </div></div>



    )

}
export default Features;