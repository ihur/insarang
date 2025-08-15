import { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/mockData';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'in-home', name: '방문 케어' },
    { id: 'facility', name: '시설 케어' },
    { id: 'rehabilitation', name: '재활 케어' },
    { id: 'specialized', name: '전문 케어' },
    { id: 'emergency', name: '응급 케어' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            전문적인 케어 서비스
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            어르신의 상황과 필요에 맞는 맞춤형 케어 서비스를 제공합니다. 
            각 서비스는 전문 인력에 의해 체계적으로 관리됩니다.
          </p>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 목록 */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="card hover:shadow-xl transition-all duration-300 group">
                {/* 서비스 이미지 플레이스홀더 */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>

                {/* 서비스 정보 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* 서비스 특징 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">주요 서비스</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-primary-600 font-medium">
                          +{service.features.length - 3}개 더 보기
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* 가격 및 기간 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">{service.price}</p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="btn-primary group-hover:bg-primary-700 transition-colors"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 서비스가 없을 때 */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                해당 카테고리의 서비스가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 카테고리를 선택하거나 전체 서비스를 확인해보세요
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-primary"
              >
                전체 서비스 보기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            맞춤형 케어 서비스가 필요하신가요?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            전문 상담사가 어르신의 상황을 정확히 파악하여 
            최적의 케어 서비스를 제안해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              무료 상담 신청
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="btn-secondary text-lg px-8 py-4"
            >
              전화 상담하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 