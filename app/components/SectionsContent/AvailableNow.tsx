import Button from "../Button";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { ProductsProps } from "@/types/types";
import urlFor from "@/lib/urlFor";

const AvailableNow = ({ products }: { products: ProductsProps[] }) => {
    return (
        <div className="max-w-[1240px] mt-[150px] scroll-mt-[100px]" id="dostepne-od-reki">
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-[45px] text-center md:w-full w-[300px]">Dostępne od ręki</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-[80px]">
                    {products.map((product) => (
                        <div
                            className="relative flex flex-col md:w-[320px] w-[290px] cursor-pointer"
                            id={product.title}
                            key={product.title}
                        >
                            <div className="md:h-[400px] h-[350px] relative overflow-hidden">
                                <Image
                                    src={urlFor(product.mainImage).url()}
                                    alt={""}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-200 ease-in-out transform hover:scale-110"
                                    quality={100}
                                    priority={true}
                                />
                            </div>
                            <div className="flex flex-col gap-4 w-auto h-fit items-stretch p-4 bg-pink-200 rounded-b-md md:rounded-none text-[#323232]">
                                <h2 className="font-medium text-xl">{product.title}</h2>
                                <PortableText value={product.description} />
                                <h2 className="font-bold">Cena: {product.price} zł</h2>
                                <Button>Sprawdź szczegóły</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableNow;
