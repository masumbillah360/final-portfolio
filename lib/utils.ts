import { Blogs, Projects, blogs, projects } from '@/.velite';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function truncate(text: string | undefined) {
    return text && text.length > 20 ? text.slice(0, 20) + '...' : text;
}

export function truncateDate(text: string | undefined) {
    return text && text.length ? text.split('T')[0] : text;
}
export function getSimilarCategory(
    slug: string,
    category: string,
    type: 'blog' | 'project'
) {
    if (type === 'blog') {
        return blogs.filter((blog: Blogs) => {
            const isSlugDifferent = blog.slugAsParams !== slug;
            const hasCategory = blog.similarCategory.some(
                (cat: string) => cat === category
            );
            return isSlugDifferent && hasCategory;
        });
    } else {
        return projects.filter((project: Projects) => {
            const isSlugDifferent = project.slugAsParams !== slug;
            const hasCategory = project.similarCategory.some(
                (cat: string) => cat === category
            );

            return isSlugDifferent && hasCategory;
        });
    }
}

export function getBlogFromParams(params: string) {
    const slug = params;
    return blogs.find((result) => result.slugAsParams === slug);
}

export function getProjectFromParams(params: any) {
    const slug = params;
    return projects.find((result) => result.slugAsParams === slug);
}
