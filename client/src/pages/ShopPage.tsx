
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...filtered].sort(() => Math.random() - 0.5); // Random for demo
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'popularity':
        return [...filtered].sort((a, b) => b.reviews - a.reviews);
      default:
        return filtered;
    }
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2 animate-slide-up">Luxury Collection</h1>
            <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Discover {filteredAndSortedProducts.length} exceptional pieces
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* View Toggle */}
            <div className="xl:flex lg:flex md:flex sm:hidden hidden items-center space-x-2 luxury-card p-1 ">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-300 hover:scale-110 ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all duration-300 hover:scale-110 ${
                  viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="luxury-input pr-10 appearance-none cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="popularity">Most Popular</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="luxury-button !px-4 !py-2 flex items-center space-x-2 lg:hidden"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:block ${showFilters ? 'block animate-slide-up' : 'hidden'} space-y-6`}>
            <div className="luxury-card p-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block w-full text-left px-3 py-2 rounded transition-all duration-300 hover:translate-x-1 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="luxury-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="flex-1 accent-primary"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="flex-1 accent-primary"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="luxury-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Features</h3>
              <div className="space-y-2">
                {['Free Shipping', 'On Sale', 'In Stock', 'New Arrivals'].map((feature, index) => (
                  <label key={feature} className="flex items-center space-x-2 cursor-pointer transition-all duration-200 hover:translate-x-1" style={{ animationDelay: `${index * 0.05}s` }}>
                    <input type="checkbox" className="rounded border-border accent-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-16 animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
