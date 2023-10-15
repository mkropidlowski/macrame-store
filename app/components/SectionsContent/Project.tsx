import { PostProps } from "@/types/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import urlFor from "@/lib/urlFor";
import Button from "../Button";
import clsx from "clsx";

const Project = ({ posts }: { posts: PostProps[] }) => {
    return (
        <div className="max-w-[1240px] mt-[150px] scroll-mt-[100px]" id="modele">
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-[45px]">Modele</h2>
                <div className="max-w-[1240px] flex flex-col h-full justify-center items-center gap-[120px] mt-[80px]">
                    {posts.map((post) => (
                        <div
                            className={clsx(
                                `relative flex md:flex-row flex-col gap-5 justify-center items-center w-full md:h-[500px] h-fit rounded-xl`,
                                post.isReversed ? "md:flex-row-reverse" : null
                            )}
                            id={post.title}
                            key={post.title}
                        >
                            <div className="relative flex flex-col md:flex-row overflow-hidden md:w-[550px] w-[290px] md:h-[500px] h-[350px] shadow-md rounded-xl cursor-pointer">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.mainImage}
                                    fill
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                    className="transition-transform duration-200 ease-in-out transform hover:scale-110"
                                    quality={100}
                                    priority={true}
                                />
                            </div>
                            <div className="flex flex-col gap-4 md:w-[50%] w-[290px] md:h-[300px] h-fit items-stretch p-4 bg-pink-200 rounded-xl text-[#323232]">
                                <h2 className="font-medium text-xl">{post.title}</h2>
                                <PortableText value={post.description} />
                                <h2 className="font-bold">Cena: {post.price} zł</h2>
                                <Button>Sprawdź szczegóły</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
