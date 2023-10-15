// eslint-disable-next-line import/no-anonymous-default-export

import { defineField, defineType } from "sanity";

export default defineType({
    name: "Products",
    type: "document",
    title: "Products",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
            },
        }),
        defineField({
            name: "description",
            type: "array",
            title: "Description",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "Title", value: "title" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "Quote", value: "blockquote" },
                    ],
                },
            ],
        }),
        defineField({
            name: "dimensions",
            title: "Dimensions",
            type: "string",
        }),
        defineField({
            name: "mainImage",
            title: "Main image ( add only one image for icon )",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "moreImage",
            title: "More image ( add more image )",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price",
        }),
    ],
});
