import Image from "next/image";

const Male =()=>{
    return(
        <div className="px-28 flex py-10 gap-20">
              <div className="Product4 font-[600] text-[#212121]    ">
                    <a href="/">
                        <Image src="/male.jpg " alt=" " height={100} width={250} className="color-[rgb(215 215 217 ]" ></Image>
                    </a>
                    <p className="mt-5 font-bold tracking-wider  text-xl">Flex Push Button Bomber</p>
                    <p className="text-[#888]">Jackets</p>
                    <p className=" font-bold  text-xl" >$225</p>
                </div>

                <div className="Product4 font-[600] text-[#212121]   ">
                    <a href="/">
                        <Image src="/event4.jpg " alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 font-bold text tracking-wider  text-xl">Raglan Sweatshirt</p>
                    <p className="text-[#888]">Sweater</p>
                    <p  className=" font-bold  text-xl">$195</p>
                </div>
        </div>
    )
}

export default Male;