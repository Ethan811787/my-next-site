import { GetStaticProps, GetStaticPaths } from "next";
import posts from "../../data/posts.json";

type Post = {
  slug: string;
  title: string;
  content: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find(post => post.slug === params?.slug);

  return {
    props: { post }
  };
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        {post.content.split('\n\n').map((paragraph, idx) => (
        <p key={idx} className="mb-4">{paragraph}</p>
        ))} {/**this splits up paragraphs instead of rendering it all as one. */}
      </div>
    </main>
  );
}