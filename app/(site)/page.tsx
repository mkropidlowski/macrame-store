import Hero from "@/app/components/Hero";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import AvailableNow from "../components/SectionsContent/AvailableNow";
import Contact from "../components/SectionsContent/Contact";
import About from "../components/SectionsContent/About";
import Project from "../components/SectionsContent/Project";

export const dynamic = "force-dynamic";

const query = groq`*[_type == 'Post'] | order(_createdAt, asc)`;
const productsQuery = groq`*[_type == 'Products'] | order(_createdAt, asc)`;

export default async function Home() {
    const posts = await client.fetch(query, { next: { revalidate: 60 }, cache: "no-store" });
    const products = await client.fetch(productsQuery, { next: { revalidate: 60 }, cache: "no-store" });

    return (
        <div className="w-full h-screen">
            <Hero />
            <div className="flex justify-center flex-col items-center">
                <About />
                <Project posts={posts} />
                <AvailableNow products={products} />
                <Contact />
            </div>
        </div>
    );
}
