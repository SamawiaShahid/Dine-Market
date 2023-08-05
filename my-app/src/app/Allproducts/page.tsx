import Image from "next/image";
import { allProducts } from "@/lib/constant";
const Allproducts = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 gap-8 lg:px-28 px-8 py-20">
                {
                    allProducts.map((item) => (
                        <div className="" key={item.id}>
                            <div className="Product4 font-[600] text-[#212121]">
                                <a href="/">
                                    <Image src={item.image} alt=" " height={100} width={250} />
                                </a>
                                <p className="mt-5 text-xl">{item.title}</p>
                                <p className="text-[#888]">{item.productcategory}</p>
                                <p className="font-bold text-xl">{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Allproducts;