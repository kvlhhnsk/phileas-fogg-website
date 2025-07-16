import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Adventure Blog Post 1", excerpt: "Placeholder excerpt for blog post 1" },
    { id: 2, title: "Adventure Blog Post 2", excerpt: "Placeholder excerpt for blog post 2" },
    { id: 3, title: "Adventure Blog Post 3", excerpt: "Placeholder excerpt for blog post 3" },
    { id: 4, title: "Adventure Blog Post 4", excerpt: "Placeholder excerpt for blog post 4" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-serif font-bold text-center mb-12">Adventure Blog</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-muted h-48 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <span className="text-muted-foreground">Blog Photo {post.id}</span>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>January {post.id}, 2024</span>
                      <span className="group-hover:text-primary transition-colors duration-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;