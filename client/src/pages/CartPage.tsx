
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, Truck, Shield, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = total;
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08; // 8% tax
  const finalTotal = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our curated collection of luxury items
          </p>
          <Link to="/shop" className="luxury-button inline-flex items-center space-x-2">
            <span>Start Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
          <button 
            onClick={clearCart}
            className="text-muted-foreground hover:text-destructive transition-colors duration-200"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="luxury-card p-6">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {item.product.category}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-primary">
                      ₹{item.product.price.toLocaleString()}
                      </span>
                      {item.product.originalPrice && (
                        <span className="text-muted-foreground line-through">
                          ₹{item.product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="luxury-card p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
                  <span className="text-foreground font-semibold">₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground font-semibold">
                    {shipping === 0 ? 'Free' : `$${shipping}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground font-semibold">₹{tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-xl font-bold text-primary">₹{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="luxury-button w-full mb-4">
                Proceed to Checkout
              </button>
              
              <Link 
                to="/shop" 
                className="block text-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Benefits */}
            <div className="luxury-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    {shipping === 0 ? 'Free shipping on this order' : 'Free shipping on orders over $500'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    Secure payment & authenticity guaranteed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    30-day return policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
