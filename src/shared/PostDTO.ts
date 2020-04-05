export type PostDTO = {
    id: number;
    title: string;
    start: string;
    images: string[];
    slug: string;
    description: {
        description: string
    }
    tags: {
        tags: Array<string>
    }
}

