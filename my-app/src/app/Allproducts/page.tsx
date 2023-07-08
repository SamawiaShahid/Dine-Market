import Image from "next/image";

const Allproducts = ()=>{
    return(
        <div>
             <div className=" grid lg:grid-cols-4  gap-8   lg:px-28 px-8 py-20  ">
                <div className="Product1 font-[600] text-[#212121]  ">
                    <a href="/">
                        <Image src="/product1.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5  text-xl">Brushed Raglan Sweatshirt</p>
                    <p className="text-[#888]">Sweater</p>
                    <p  className="font-bold text-xl">$195</p>
                </div>
                <div className="Product2   font-[600] text-[#212121]">
                    <a href="/">
                        <Image src="/ladyyyy.jpg" alt=" " height={100} width={250}></Image></a>
                    <p className="mt-5  text-xl">Cameryn Sash Tie Dress</p>
                    <p className="text-[#888]">Dress</p>
                    <p className="font-bold text-xl">$545</p>
                </div>
                <div className="Product3 font-[600] text-[#212121]">
                    <a href="/">
                        <Image src="/product2.jpg" alt=" " height={100} width={250}></Image>
                    </a>
                    <p className="mt-5  text-xl">Flex Sweatshirt</p>
                    <p className="text-[#888]">Sweater</p>
                    <p className="font-bold text-xl">$175 </p>
                </div>

                <div className="Product4 font-[600] text-[#212121]">
                    <a href="/">
                        <Image src="/product4.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 text-xl">Flex Sweatpants</p>
                    <p className="text-[#888]">Pants</p>
                    <p className="font-bold text-xl">$175</p>
                </div>

                <div className="Product5 font-[600] text-[#212121]">
                    <a href="/">
                        <Image src="/product5.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 text-xl">Pink Fleece Sweatpants</p>
                    <p className="text-[#888]">Pants</p>
                    <p className="font-bold text-xl">$195</p>
                </div>

                <div className="Product6 font-[600] text-[#212121] ">
                    <a href="/">
                        <Image src="/product6.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 text-xl">Lite Sweatpants</p>
                    <p className="text-[#888]">Pants</p>
                    <p className="font-bold text-xl">$150</p>
                </div>

                <div className="Product7 font-[600] text-[#212121] ">
                    <a href="/">
                        <Image src="/feature.jpg" alt=" " height={100} width={220} ></Image>
                    </a>
                    <p className="mt-5 text-xl">Imperial Alpaca Hoodie</p>
                    <p className="text-[#888]">Jackets</p>
                    <p className="font-bold text-xl">$525</p>
                </div>

                <div className="Product4 font-[600] text-[#212121]    ">
                    <a href="/">
                        <Image src="/male.jpg" alt=" " height={100} width={250} className="color-[rgb(215 215 217 ]" ></Image>
                    </a>
                    <p className="mt-5 font-bold tracking-wider  text-xl">Flex Push Button Bomber</p>
                    <p className="text-[#888]">Jackets</p>
                    <p className=" font-bold  text-xl" >$225</p>
                </div>

                <div className="Product8 font-[600] text-[#212121]">
                    <a href="/">
                        <Image src="/product7.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 text-xl">Muscle Tank</p>
                    <p className="text-[#888]">T-Shirts</p>
                    <p className="font-bold text-xl">$75</p>
                </div>

                <div className="Product9 font-[600] text-[#212121] ">
                    <a href="/">
                        <Image src="/product8.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 text-xl">Brushed Bomber</p>
                    <p className="text-[#888]">Jackets</p>
                    <p className="font-bold text-xl">$225</p>
                </div>
            
                <div className="Product4 font-[600] text-[#212121]   ">
                    <a href="/">
                        <Image src="/event4.jpg" alt=" " height={100} width={250} ></Image>
                    </a>
                    <p className="mt-5 font-bold text tracking-wider  text-xl">Raglan Sweatshirt</p>
                    <p className="text-[#888]">Sweater</p>
                    <p  className=" font-bold  text-xl">$195</p>
                </div>
            </div> 
        </div>
    )
}
export default Allproducts;