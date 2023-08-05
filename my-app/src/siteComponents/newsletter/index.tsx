import { Input } from "@/components/ui/input"


const Newsletter = () => {
    return (

        <div className='md:my-12 mb-10 mt-16 mx-10'>
            <div className="grid grid-cols-6">
                <div className="xl:col-span-12 lg:col-span-4 m-auto relative">
                    <div className="absolute text-[#f2f3f7] text-5xl xl:text-9xl lg:text-8xl font-extrabold top-[50px] left-0 lg:top-0 right-0 lg:right-[-20%] z-[-1]">Newsletter</div>
                    <h1 className='text-[#212121] text-4xl font-bold mb-4 '>Subscribe Our Newsletter</h1>
                    <p className='text-[#212121] text-base font-[300] mb-4 '>Get the latest information and promo offers directly</p>
                    <div className="lg:flex items-center  ">
                        <Input type="email" placeholder='Input email address' className='relative border shrink-[2] focus:border-0 border-[gray] border-solid h-[42px] lg:w-[25vw] w-[80vw] py-[10px] pr-0 lg:pr-[120px] pl-[20px]' />
                        <button className="bg-[#212121] ml-10 lg:ml-5 font-[600] lg:mt-0 mt-5 transition all hover:bg-white
                     hover:text-black hover:border hover:border-black w-[155px] h-[42px] hover:border-solid px-4 py-1  rounded-md text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Newsletter;
