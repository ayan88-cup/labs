import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KnowledgeArticle } from '../types';
import { BookOpen, Search, Filter } from 'lucide-react';

interface KnowledgeBaseProps {
  articles: KnowledgeArticle[];
}

export function KnowledgeBase({ articles }: KnowledgeBaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden hacker-grid">
      {/* Header */}
      <header className="bg-zinc-900/80 border-b border-zinc-800 p-6 backdrop-blur-md z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold font-mono text-zinc-100 flex items-center gap-3">
              <BookOpen className="text-blue-500" />
              Knowledge Base
            </h1>
            <p className="text-sm text-zinc-400 mt-1 font-mono">Reference materials and technical documentation</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search database..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 font-mono w-full sm:w-64"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 font-mono appearance-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.05, 0.5) }}
                className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm hover:border-blue-500/30 transition-colors flex flex-col"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-bold text-zinc-200 font-sans tracking-tight">{article.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 bg-zinc-800 text-blue-400 rounded border border-zinc-700 whitespace-nowrap ml-3">
                    {article.category}
                  </span>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-6">
                  {article.content}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-zinc-500 before:content-['#'] before:opacity-50">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-mono">
              <p className="text-xl mb-2">No records found</p>
              <p className="text-sm">Adjust your search parameters and try again.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
