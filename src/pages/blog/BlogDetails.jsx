import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./data";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((item) => item.id === parseInt(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen max-w-7xl flex flex-col items-center justify-center bg-white p-6">
        <div className="text-center max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="px-8 py-3 bg-white/20 backdrop-blur-md text-[#20B2AA] rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto border border-white/30"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Back Button - Sticky at top */}

      {/* Banner Image Section */}
      <div className="relative h-[80vh] max-h-[800px] w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Blog title over banner */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full mb-4 border border-white/30">
              {blog.category || "Article"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-[#20B2AA]">
              <span>{blog.date}</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20">
          <div className="p-8 md:p-12">
            {/* Article Meta */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <span className="font-bold text-purple-300">{blog.img}</span>
                <div>
                  <p className="font-medium text-[#20B2AA] font-serif">
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-400">
                    Published on {blog.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-200 prose-a:text-purple-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                {blog.content}
              </p>

              {/* Additional content sections for demonstration */}
              <h2 className="mt-10 mb-4 text-2xl font-bold text-[#20B2AA] font-serif">
                Key Takeaways
              </h2>
              <p className="text-gray-700">
                This section highlights the main points discussed in the
                article. It provides readers with a quick summary of the
                important concepts covered.
              </p>

              <h3 className="mt-8 mb-3 text-xl font-semibold text-[#20B2AA] font-serif">
                Detailed Analysis
              </h3>
              <p className="text-gray-700">
                Here we dive deeper into the subject matter, exploring nuances
                and providing comprehensive insights that help readers
                understand the topic more thoroughly.
              </p>

              <blockquote className="mt-8 pl-6 border-l-4 border-[#20B2AA] italic text-gray-700">
                "This is a notable quote that emphasizes an important point from
                the article."
              </blockquote>
            </div>

            {/* Share Section */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="max-w-5xl mx-auto mt-6">
                <button
                  onClick={() => navigate("/blog")}
                  className="flex items-center gap-2 text-[#20B2AA] p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <ArrowLeft size={20} />
                  <span className="font-medium">Back to Blog</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}