
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="luxury-button">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const productImages = product.images || [product.image];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const reviews = [
    {
      id: '1',
      userId: '1',
      userName: 'Sarah Johnson',
      rating: 5,
      comment: 'Absolutely stunning piece! The quality is exceptional and it arrived beautifully packaged.',
      date: '2024-01-15'
    },
    {
      id: '2',
      userId: '2',
      userName: 'Michael Chen',
      rating: 5,
      comment: 'Worth every penny. The craftsmanship is impeccable and the customer service was outstanding.',
      date: '2024-01-10'
    },
    {
      id: '3',
      userId: '3',
      userName: 'Emma Williams',
      rating: 4,
      comment: 'Beautiful item, exactly as described. Fast shipping and secure packaging.',
      date: '2024-01-05'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors duration-200">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors duration-200">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl luxury-card">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors duration-200 ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="text-muted-foreground ml-2">({product.reviews} reviews)</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  product.inStock 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-destructive/20 text-destructive'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-primary">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {product.features && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.inStock && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-foreground font-medium">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={handleAddToCart}
                    className="luxury-button flex-1 flex items-center justify-center space-x-2 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="w-12 h-12 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-200">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors duration-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Authentic</h4>
                  <p className="text-sm text-muted-foreground">Guaranteed genuine</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Easy Returns</h4>
                  <p className="text-sm text-muted-foreground">30-day policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-border mb-8">
            <nav className="flex space-x-8">
              {['description', 'reviews', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 transition-colors duration-200 capitalize ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="luxury-card p-8">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This exceptional piece represents the pinnacle of luxury craftsmanship. Each item is carefully 
                  inspected and authenticated before delivery to ensure you receive only the finest quality. 
                  Our commitment to excellence extends beyond the product itself to include premium packaging, 
                  white-glove customer service, and comprehensive after-sale support.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-semibold text-foreground">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold text-foreground">{review.userName}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Shipping & Returns</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Shipping Information</h4>
                    <p className="text-muted-foreground mb-4">
                      We offer complimentary shipping on all orders over $500. Standard shipping typically takes 3-5 business days, 
                      while expedited shipping options are available for faster delivery.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Free shipping on orders over $500</li>
                      <li>• Standard shipping: 3-5 business days</li>
                      <li>• Express shipping: 1-2 business days</li>
                      <li>• International shipping available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Return Policy</h4>
                    <p className="text-muted-foreground mb-4">
                      We stand behind the quality of our products. If you're not completely satisfied, 
                      you may return your purchase within 30 days for a full refund.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 30-day return window</li>
                      <li>• Items must be in original condition</li>
                      <li>• Free return shipping</li>
                      <li>• Full refund upon inspection</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
