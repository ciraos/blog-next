import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from 'reading-time';

const postsDir = join(process.cwd(), "posts");
type readingTime = {
    text: string;
    minutes: string;
    time: number;
    words: number;
};
type MetaData = {
    title: string;
    date: Date;
    updated: Date;
    tags: string[];
    categories: string[];
    cover?: string;
    description?: string;
    draft?: boolean;
    readingTime?: readingTime;
};

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDir, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content, excerpt } = matter(fileContents, { excerpt: true, });
    const readTime = readingTime(content);
    const meta = { ...data, readingTime: readTime } as unknown as MetaData;
    return { slug: realSlug, meta, content, excerpt };
}

export function getAllPosts() {
    const slugs = fs.readdirSync(postsDir);
    const posts = slugs.map((slug) => getPostBySlug(slug)).filter((c) => !/\.draft$/.test(c.slug));
    return posts.sort((a, b) => +b.meta.date - +a.meta.date);
}
