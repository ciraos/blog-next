import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRemark from 'rehype-remark';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

const processer = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeRemark)
    // .use(rehypeSanitize)
    .use(rehypeStringify)

export default async function markdown2html(markdown: string) {
    const file = await processer.process(markdown);
    return String(file)
}
