import { useState } from 'react';
import { Link } from 'react-router-dom';

const TodayProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', icon: '🛍️' },
    { id: 'mobility', name: '이동용품', icon: '🦼' },
    { id: 'daily', name: '일상생활용품', icon: '🏠' },
    { id: 'safety', name: '안전용품', icon: '🛡️' },
    { id: 'bathroom', name: '욕실용품', icon: '🚿' },
    { id: 'bedroom', name: '침실용품', icon: '🛏️' }
  ];

  const products = [
    {
      id: 1,
      name: '전동휠체어 프리미엄',
      category: 'mobility',
      price: '2,500,000원',
      originalPrice: '3,000,000원',
      discount: '17%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      description: '장거리 이동이 가능한 프리미엄 전동휠체어입니다. 안전하고 편안한 주행을 제공합니다.',
      features: ['장거리 주행', '안전 브레이크', '편안한 시트', '접이식 디자인'],
      rating: 4.8,
      reviewCount: 127,
      isNew: true,
      isHot: false
    },
    {
      id: 2,
      name: '안전 손잡이 세트',
      category: 'safety',
      price: '89,000원',
      originalPrice: '120,000원',
      discount: '26%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      description: '욕실과 화장실에서 안전을 위한 손잡이 세트입니다. 설치가 간편하고 견고합니다.',
      features: ['간편 설치', '견고한 재질', '미끄럼 방지', '세트 구성'],
      rating: 4.9,
      reviewCount: 89,
      isNew: false,
      isHot: true
    },
    {
      id: 3,
      name: '욕창예방 매트리스',
      category: 'bedroom',
      price: '450,000원',
      originalPrice: '600,000원',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      description: '욕창을 효과적으로 예방하는 특수 매트리스입니다. 통기성이 좋고 편안합니다.',
      features: ['욕창 예방', '통기성 우수', '편안한 쿠션', '세탁 가능'],
      rating: 4.7,
      reviewCount: 156,
      isNew: false,
      isHot: true
    },
    {
      id: 4,
      name: '목욕의자 안전형',
      category: 'bathroom',
      price: '75,000원',
      originalPrice: '95,000원',
      discount: '21%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      description: '안전하고 편안한 목욕을 위한 특수 목욕의자입니다. 미끄럼 방지 기능이 있습니다.',
      features: ['미끄럼 방지', '조절 가능', '편안한 디자인', '안전 손잡이'],
      rating: 4.6,
      reviewCount: 203,
      isNew: true,
      isHot: false
    },
    {
      id: 5,
      name: '보행기 프리미엄',
      category: 'mobility',
      price: '180,000원',
      originalPrice: '220,000원',
      discount: '18%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      description: '안정적인 보행을 도와주는 프리미엄 보행기입니다. 접이식으로 보관이 편리합니다.',
      features: ['안정적 보행', '접이식 디자인', '조절 가능', '바퀴 브레이크'],
      rating: 4.8,
      reviewCount: 94,
      isNew: false,
      isHot: true
    },
    {
      id: 6,
      name: '미끄럼방지 매트',
      category: 'safety',
      price: '35,000원',
      originalPrice: '45,000원',
      discount: '22%',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      description: '욕실과 화장실에서 미끄러짐을 방지하는 안전 매트입니다.',
      features: ['미끄럼 방지', '빠른 건조', '청소 용이', '다양한 사이즈'],
      rating: 4.5,
      reviewCount: 178,
      isNew: false,
      isHot: false
    },
    {
      id: 7,
      name: '간이변기 이동형',
      category: 'bathroom',
      price: '120,000원',
      originalPrice: '150,000원',
      discount: '20%',
      image: 'https://via.placeholder.com/300x200/84CC16/FFFFFF?text=간이변기',
      description: '이동이 가능한 간이변기입니다. 병원이나 여행 시에도 편리하게 사용할 수 있습니다.',
      features: ['이동 가능', '접이식', '청소 용이', '편안한 사용'],
      rating: 4.4,
      reviewCount: 67,
      isNew: true,
      isHot: false
    },
    {
      id: 8,
      name: '욕창예방 방석',
      category: 'bedroom',
      price: '85,000원',
      originalPrice: '110,000원',
      discount: '23%',
      image: 'https://via.placeholder.com/300x200/F97316/FFFFFF?text=욕창예방방석',
      description: '의자나 휠체어에서 사용하는 욕창예방 방석입니다. 통기성이 우수합니다.',
      features: ['욕창 예방', '통기성 우수', '편안한 쿠션', '세탁 가능'],
      rating: 4.6,
      reviewCount: 112,
      isNew: false,
      isHot: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            오늘의 제품
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            어르신을 위한 최신 복지용구와 건강용품을 소개합니다.<br />
            안전하고 편안한 생활을 위한 다양한 제품을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* 특가 상품 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            🎉 오늘의 특가 상품
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.isHot).slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      HOT
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      {product.discount}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-red-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            제품 카테고리
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 제품 목록 */}
        <div className="mb-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* 제품 이미지 */}
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex space-x-1">
                      {product.isNew && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
                          NEW
                        </span>
                      )}
                      {product.isHot && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                          HOT
                        </span>
                      )}
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        {product.discount}
                      </span>
                    </div>
                  </div>

                  {/* 제품 정보 */}
                  <div className="p-4">
                    {/* 카테고리 */}
                    <div className="mb-2">
                      <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                        {categories.find(cat => cat.id === product.category)?.name}
                      </span>
                    </div>

                    {/* 제품명 */}
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                    {/* 가격 */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-bold text-red-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>

                    {/* 평점 */}
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
                    </div>

                    {/* 제품 설명 */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                    {/* 주요 특징 */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 구매 버튼 */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                        구매하기
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                        상세보기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                해당 카테고리의 제품이 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 카테고리를 선택하거나 전체 제품을 확인해보세요
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                전체 제품 보기
              </button>
            </div>
          )}
        </div>

        {/* 쇼핑몰 CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            더 많은 제품을 찾고 계신가요?
          </h2>
          <p className="text-orange-100 mb-6">
            인사랑돌봄 쇼핑몰에서 다양한 복지용구와 건강용품을 만나보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://insarangmall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              쇼핑몰 바로가기
            </a>
            <Link
              to="/welfare-consultation"
              className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-400 transition-colors duration-200 text-lg"
            >
              제품 상담받기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayProducts; 