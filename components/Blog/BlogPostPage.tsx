import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={`${post.title} - Detailed IPTV Guide`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto">
            <button 
              onClick={onBack}
              className="mb-6 flex items-center gap-2 text-white/80 hover:text-white hover:gap-3 transition-all group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium text-primary-400">
                <span className="flex items-center gap-1 bg-primary-600/20 px-3 py-1 rounded-full border border-primary-600/30 text-primary-300">
                    <Tag size={14} /> Guide
                </span>
                <span className="flex items-center gap-1 text-gray-300">
                    <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-gray-300">
                    <Clock size={14} /> 5 min read
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl shadow-black drop-shadow-lg">
                {post.title}
            </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row gap-8">
        
        {/* Main Article */}
        <article className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold shadow-lg shadow-primary-900/50">
                    <User size={24} />
                </div>
                <div>
                    <p className="text-white font-bold text-lg">IPTVNOVA Team</p>
                    <p className="text-gray-500 text-sm">Senior IPTV Analysts</p>
                </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary-500 hover:prose-a:text-primary-400 prose-strong:text-white">
                {post.content}
            </div>
            
            {/* Share/Tags Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {['IPTV', 'Streaming', 'Guide', 'Tutorial', 'UK'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-dark-800 text-gray-400 rounded-lg text-sm hover:bg-dark-700 transition-colors cursor-default">
                        #{tag}
                    </span>
                ))}
            </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8">
            {/* CTA Widget */}
            <div className="bg-gradient-to-br from-primary-900/50 to-dark-800 p-8 rounded-2xl border border-primary-500/20 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Upgrade?</h3>
                <p className="text-gray-300 mb-6">
                    Get instant access to over 23,000 channels and watch the content mentioned in this article today.
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-500">✓</span> 4K/FHD Quality
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-500">✓</span> Anti-Freeze Tech
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-500">✓</span> Instant Delivery
                    </li>
                </ul>
                <button 
                    onClick={() => {
                        onBack();
                        // Small timeout to allow view switch before scrolling
                        setTimeout(() => {
                            const pricing = document.getElementById('pricing');
                            pricing?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-600/20"
                >
                    View Pricing Plans
                </button>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPostPage;