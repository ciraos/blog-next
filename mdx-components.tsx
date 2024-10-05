import Image, { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        del: ({ children }) => (<del>{children}</del>),
        h1: ({ children }) => (<h1 style={{}}>{children}</h1>),
        img: (props) => (<Image sizes=""style={{}}{...(props as ImageProps)}/>),
        ...components,
    }
}
