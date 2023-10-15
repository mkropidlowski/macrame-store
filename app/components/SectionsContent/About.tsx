import Image from "next/image";
import macrame from "@/public/images/macrameImage.png";
import Button from "../Button";

const About = () => (
    <div className="max-w-[1240px] mt-[150px] scroll-mt-[100px]" id="o-mnie">
        <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-[45px]">O mnie</h2>
            <div className="flex md:flex-row flex-col justify-center gap-4 mt-[80px]">
                <div className="md:w-[500px] w-[290px] p-5 flex flex-col gap-4">
                    <h2 className="font-medium text-3xl">Tu się mozna przedstawić</h2>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cumque amet deleniti aut
                            odit, veniam modi tempora at aperiam maxime reprehenderit quae nisi fuga nihil neque ab
                            atque, magnam saepe?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cumque amet deleniti aut
                            odit, veniam modi tempora at aperiam maxime reprehenderit quae nisi fuga nihil neque ab
                            atque, magnam saepe?
                        </p>
                    </div>
                    <div>
                        <Button>Zapraszam do kontaktu!</Button>
                    </div>
                </div>
                <div className="relative overflow-hidden md:w-[400px] w-[290px] md:h-[400px] h-[290px] shadow-md rounded-xl cursor-pointer">
                    <Image
                        src={macrame}
                        alt="Macrame"
                        fill
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default About;
