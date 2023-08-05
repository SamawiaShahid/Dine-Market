import Image from "next/image";
import Link from "next/link";



const Products = () => {
  return (
    <div className="md:my-12 my-10 md:mx-28 px-10">
      <div className="text-center mb-14">
        <span className="text-[#0062f5] text-sm font-bold">PRODUCTS</span>
        <h1 className="text-[#212121] font-bold text-[32px]">Check What we Have </h1>
      </div>
      <div className="grid lg:space-x-12 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
        <div className="Product1 font-[600] text-[#212121] xl:text-xl lg:text-base translate-x-5 transition ease-in-out delay-200 
             hover:translate-y-1 hover:scale-110 sm:w-[100%] w-[100%] lg:ml-0 -ml-2 object-cover">
          <a href="/">
            <Image src="/product1.jpg" alt="" height={100} width={350} className="w-[100%] lg:ml-2" ></Image>
          </a>
          <p className="lg:mt-5 mt-0">Brushed Raglan Sweatshirt</p>
          <p >$195</p>
        </div>
        <div className="Product2 font-[600] text-[#212121] xl:text-xl lg:text-base -translate-x-5
            transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 w-[100%] sm:w-[100%] lg:-mt-1 xl:mt-0 object-cover self-center">
          <a href="/">
            <Image src="/ladyyyy.jpg" alt=" " height={100} width={350} className="w-[100%]"></Image></a>
          <p className="lg:mt-5 mt-0">Cameryn Sash Tie Dress</p>
          <p>$545</p>
        </div>
        <div className="Product3 font-[600] text-[#212121] xl:text-xl lg:text-base -translate-x-5 transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 w-[100%] sm:w-[100%] object-cover">
          <a href="/">
            <Image src="/product2.jpg" alt=" " height={100} width={350} className="w-[100%]"></Image>
          </a>
          <p className="mt-5">Flex Sweatshirt</p>
          <p>$175 </p>
        </div>
      </div>
    </div>


  )
}
export default Products;