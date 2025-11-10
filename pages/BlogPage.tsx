
import React, { useState, useEffect } from 'react';
import { getPosts } from '../lib/data';
import { Post } from '../types';
import PostCard from '../components/PostCard';
import { BLOG_CATEGORIES } from '../lib/data';
import CategorySlider from '../components/CategorySlider';
import FeaturedServiceCard from '../components/FeaturedServiceCard';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...BLOG_CATEGORIES];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (activeCategory === 'Todos') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory, posts]);

  return (
    <div>
      {/* Mobile-only featured card */}
      <div className="mb-8 md:hidden">
        <FeaturedServiceCard />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Nuestro Blog de Salud</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Artículos, consejos y noticias para ayudarte a mantener un estilo de vida saludable.
        </p>
      </div>

      <div className="mb-12">
        <CategorySlider
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {loading ? (
        <p className="text-center">Cargando artículos...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desktop-only featured card */}
            <div className="hidden md:block">
              <FeaturedServiceCard />
            </div>
            
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">
              No hay artículos en esta categoría por el momento.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPage;
