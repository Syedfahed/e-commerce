
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group luxury-card overflow-hidden hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 rounded-lg text-xs font-semibold animate-scale-in">
            SALE
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
          <Link 
            to={`/product/${product.id}`}
            className="bg-background/90 backdrop-blur-sm text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform translate-y-4 group-hover:translate-y-0"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button 
            onClick={handleAddToCart}
            className="bg-background/90 backdrop-blur-sm text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform translate-y-4 group-hover:translate-y-0 delay-75"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 transition-all duration-300 hover:scale-125 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <span className={`text-xs px-2 py-1 rounded-full transition-all duration-300 hover:scale-105 ${
            product.inStock 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-destructive/20 text-destructive'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
