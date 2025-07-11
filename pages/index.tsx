import Link from "next/link";
import posts from "../data/posts.json";

export default function Home() {
  return (
    <> {/* this is a fragment. it is closed at the end of the function. */}

      {/*used to have the nav bar here, but made it global across all pages*/}


      <div className="pt-12 pb-20 flex flex-col items-center bg-white px-4">
        {/* min-h-screen is the screen size and flex, items-center, justofy-center are  for centering the content  */}
        
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to Ethan Carter's Site</h1> 
        {/*this is a comment. the last line is creating a header of big blue text. */}
        
        <p className="text-lg text-gray-600 mb-6">I'm learning to build with Next.js and Tailwind!</p>
        {/* subtitle heading */}
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
        {/* a styled button */}
      </div>

      {/* blog post placeholders grid */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div>

      </section>


    </>
  );
}
