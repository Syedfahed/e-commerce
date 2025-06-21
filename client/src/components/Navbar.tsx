import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { categories } from '../data/products';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 luxury-gradient border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 animate-fade-in">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-luxury-gold">LUXE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-all duration-300 hover:scale-105 ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center space-x-1 hover:scale-105"
              >
                <span>Categories</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 luxury-card py-2 shadow-luxury animate-scale-in">
                  {categories.slice(1).map((category, index) => (
                    <Link
                      key={category}
                      to={`/shop?category=${category}`}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/shop" 
              className={`transition-all duration-300 hover:scale-105 ${
                isActive('/shop') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Shop
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {user ? (
              <div className="hidden md:flex items-center space-x-4 animate-fade-in">
                <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
                <button 
                  onClick={logout}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4 animate-fade-in">
                <Link 
                  to="/login" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="text-sm luxury-button !px-4 !py-2"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Cart Icon */}
            <Link to="/cart" className="relative hover-lift">
              <ShoppingCart className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors duration-200" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold animate-scale-in">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              
              {categories.slice(1).map((category) => (
                <Link
                  key={category}
                  to={`/shop?category=${category}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
