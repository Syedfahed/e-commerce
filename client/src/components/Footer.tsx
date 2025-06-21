
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="luxury-gradient border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-luxury-gold">LUXE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Curating the finest luxury goods for the discerning individual. 
              Excellence is not just our standard, it's our promise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.996 1.482-1.996.699 0 1.018.219 1.018 1.237 0 .758-.219 1.896-.219 2.955 0 1.142.9 2.955 2.955 2.955 3.583 0 5.998-3.898 5.998-8.781 0-3.619-2.617-6.299-6.299-6.299-4.558 0-7.282 3.378-7.282 7.179 0 1.299.479 2.204 1.237 2.904.359.419.419.599.279 1.018-.1.359-.319 1.277-.399 1.457-.119.299-.439.419-.8.219-2.204-.979-3.239-3.719-3.239-6.719 0-5.016 3.759-9.896 10.596-9.896 5.617 0 9.336 4.077 9.336 8.401 0 5.757-3.319 10.037-8.201 10.037-1.617 0-3.135-.9-3.635-1.958 0 0-.8 3.158-1.018 3.798-.359 1.438-1.437 3.158-2.204 4.236 1.677.519 3.478.8 5.357.8 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/shop" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Shop All
              </Link>
              <Link to="/shop?category=Jewelry" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Jewelry
              </Link>
              <Link to="/shop?category=Watches" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Watches
              </Link>
              <Link to="/shop?category=Fashion" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Fashion
              </Link>
              <Link to="/shop?category=Accessories" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Accessories
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Shipping & Returns
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Size Guide
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Care Instructions
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Return Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                About Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 LUXE. All rights reserved. Crafted with excellence.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">Secure payments with</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center text-muted-foreground">
                VISA
              </div>
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center text-muted-foreground">
                MC
              </div>
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center text-muted-foreground">
                AMEX
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
