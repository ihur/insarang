import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/mockData';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">서비스를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-8">요청하신 서비스가 존재하지 않거나 삭제되었을 수 있습니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="btn-secondary"
            >
              이전 페이지로
            </button>
            <Link to="/services" className="btn-primary">
              모든 서비스 보기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-6">
            <Link to="/services" className="text-primary-200 hover:text-white transition-colors">
              ← 서비스 목록으로
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* 서비스 상세 정보 */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-2 space-y-12">
              {/* 서비스 개요 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">서비스 개요</h2>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">서비스 가격</h3>
                      <p className="text-2xl font-bold text-primary-600">{service.price}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">서비스 시간</h3>
                      <p className="text-lg text-gray-700">{service.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">서비스 카테고리</h3>
                      <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category === 'in-home' && '방문 케어'}
                        {service.category === 'facility' && '시설 케어'}
                        {service.category === 'rehabilitation' && '재활 케어'}
                        {service.category === 'specialized' && '전문 케어'}
                        {service.category === 'emergency' && '응급 케어'}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">서비스 지역</h3>
                      <p className="text-gray-700">전국 서비스 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 서비스 특징 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">주요 서비스 내용</h2>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 서비스 프로세스 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">서비스 이용 절차</h2>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">1</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">상담 신청</h3>
                      <p className="text-sm text-gray-600">전화 또는 온라인으로 상담 신청</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">2</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">상담 및 평가</h3>
                      <p className="text-sm text-gray-600">전문가가 방문하여 상담 및 평가</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">3</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">서비스 계획 수립</h3>
                      <p className="text-sm text-gray-600">맞춤형 케어 계획 수립</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">4</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">서비스 시작</h3>
                      <p className="text-sm text-gray-600">계획에 따른 케어 서비스 시작</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 사이드바 */}
            <div className="space-y-6">
              {/* 상담 신청 카드 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">상담 신청</h3>
                <p className="text-gray-600 mb-6">
                  전문 상담사가 어르신의 상황에 맞는 최적의 케어 서비스를 제안해드립니다.
                </p>
                <div className="space-y-3">
                  <Link to="/contact" className="btn-primary w-full text-center">
                    무료 상담 신청
                  </Link>
                  <a 
                    href="tel:02-1234-5678" 
                    className="btn-secondary w-full text-center"
                  >
                    전화 상담하기
                  </a>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">연락처</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">02-1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">info@seniorcare.co.kr</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">평일 09:00-18:00</span>
                  </div>
                </div>
              </div>

              {/* 관련 서비스 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">관련 서비스</h3>
                <div className="space-y-3">
                  {servicesData
                    .filter(s => s.id !== service.id)
                    .slice(0, 3)
                    .map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        to={`/services/${relatedService.id}`}
                        className="block p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">{relatedService.title}</h4>
                        <p className="text-sm text-gray-600">{relatedService.price}</p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail; 