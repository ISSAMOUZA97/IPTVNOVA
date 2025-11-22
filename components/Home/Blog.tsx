import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BlogPost } from '../../types';
import { blogPosts } from '../../data/blogPosts';

interface BlogProps {
  onReadPost: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onReadPost }) => {
  return (
    <section id="blog" className="py-12 bg-dark-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Latest <span className="text-primary-600">News & Guides</span></h2>
          <p className="text-gray-400 text-lg">Expert insights on streaming, setup guides, and industry rankings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              onClick={() => onReadPost(post)}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-primary-600/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={`${post.title} - IPTV Provider News`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                  <Calendar size={12} className="text-primary-500" />
                  {post.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-primary-500 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;