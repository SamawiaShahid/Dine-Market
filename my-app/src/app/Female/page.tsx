import Image from "next/image";
import { allProducts } from "@/lib/constant";
const Female = () => {
    return (
        <div>
            <div className=" grid lg:grid-cols-4  gap-8   lg:px-28 px-6 py-20  ">
                {allProducts.map((i) => (
                    <div className="" key={i.id}>
                        {i.category === "Female" && (
                            <div className="Product4 font-[600] text-[#212121]">
                                <a href={`/blog/${i.id}`}>
                                    <Image src={i.image} alt=" " height={100} width={250} />
                                </a>
                                <p className="mt-5 text-xl">{i.title}</p>
                                <p className="text-[#888]">{i.productcategory}</p>
                                <p className="font-bold text-xl">{i.price}</p>
                            </div>
                        )}
                    </div>
                ))}                
            </div>
        </div>
    )
}
export default Female;