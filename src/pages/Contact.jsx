import { useState } from 'react';
import { companyData } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('문의 내용:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            고객센터
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            어르신의 케어 서비스에 대한 궁금한 점이나 상담이 필요하시면 
            언제든지 연락주세요. 전문 상담사가 친절하게 도와드리겠습니다.
          </p>
        </div>
      </section>

      {/* 문의 폼 및 연락처 정보 */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 문의 폼 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">문의하기</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">문의가 성공적으로 접수되었습니다</h3>
                  <p className="text-green-700 mb-4">
                    빠른 시일 내에 연락드리겠습니다.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      전화번호 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      관심 서비스
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">서비스를 선택해주세요</option>
                      <option value="visit-care">방문 케어 서비스</option>
                      <option value="daycare">주야간 보호 서비스</option>
                      <option value="rehab">재활 케어 서비스</option>
                      <option value="dementia">치매 케어 서비스</option>
                      <option value="hospice">호스피스 케어 서비스</option>
                      <option value="emergency">응급 케어 서비스</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      문의 내용 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="어르신의 상황이나 궁금한 점을 자세히 적어주세요."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    문의하기
                  </button>
                </form>
              )}
            </div>

            {/* 연락처 정보 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">상담전화</h3>
                      <p className="text-gray-600 mb-2">{companyData.phone}</p>
                      <p className="text-sm text-gray-500">{companyData.businessHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">이메일</h3>
                      <p className="text-gray-600">{companyData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">주소</h3>
                      <p className="text-gray-600">{companyData.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">대표전화</h3>
                      <p className="text-red-600 font-semibold">{companyData.phoneSecondary}</p>
                      <p className="text-sm text-gray-500">추가 상담 문의</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFE812" d="M2500,0v2500H0V0H2500z"/>
                        <path fill="#000000" d="M1250,351.6c-560.9,0-1015.6,358.5-1015.6,800.8c0,285.9,190.1,536.8,476.1,678.5c-15.6,53.7-100,345.2-103.3,368.1
                          c0,0-2,17.2,9.1,23.8c11.1,6.6,24.2,1.5,24.2,1.5c32-4.5,370.5-242.3,429.1-283.6c58.5,8.3,118.8,12.6,180.4,12.6
                          c560.9,0,1015.6-358.5,1015.6-800.8C2265.6,710.1,1810.9,351.6,1250,351.6L1250,351.6z"/>
                        <path fill="#FFE812" d="M688.5,1431.9c-32.3,0-58.6-25.1-58.6-56v-348.1h-91.4c-31.7,0-57.5-25.7-57.5-57.4s25.8-57.4,57.5-57.4h300
                          c31.7,0,57.5,25.7,57.5,57.4s-25.8,57.4-57.5,57.4h-91.4v348.1C747.1,1406.8,720.8,1431.9,688.5,1431.9z M1202.3,1431.1
                          c-24.4,0-43.1-9.9-48.8-25.9l-29-76l-178.7,0l-29,76c-5.6,15.9-24.3,25.8-48.7,25.8c-12.9,0-25.6-2.7-37.2-8.1
                          c-16.2-7.5-31.7-27.9-13.9-83.2l140.2-368.9c9.9-28.1,39.9-57,78-57.8c38.3,0.9,68.3,29.8,78.2,57.9l140.1,368.7
                          c17.8,55.4,2.3,75.9-13.8,83.3C1227.8,1428.4,1215.1,1431.1,1202.3,1431.1C1202.3,1431.1,1202.3,1431.1,1202.3,1431.1L1202.3,1431.1
                          z M1093.7,1225.5l-58.5-166.3l-58.5,166.3H1093.7L1093.7,1225.5z M1347.7,1423.3c-31,0-56.2-24.1-56.2-53.7V971.7
                          c0-32.3,26.8-58.6,59.8-58.6s59.8,26.3,59.8,58.6v344.2h124.5c31,0,56.2,24.1,56.2,53.7s-25.2,53.7-56.2,53.7H1347.7z
                           M1673.2,1431.1c-32.3,0-58.6-26.3-58.6-58.6V971.7c0-32.3,26.3-58.6,58.6-58.6s58.6,26.3,58.6,58.6v125.9l163.5-163.5
                          c8.4-8.4,20-13,32.5-13c14.6,0,29.3,6.3,40.3,17.3c10.3,10.3,16.4,23.4,17.2,37.1c0.8,13.8-3.8,26.5-12.9,35.7l-133.5,133.5
                          l144.2,191.1c9.4,12.4,13.5,28,11.2,43.4c-2.1,15.4-10.3,29.3-22.7,38.6c-10.1,7.7-22.5,11.9-35.2,11.8
                          c-18.4,0.1-35.8-8.6-46.8-23.3l-137.4-182.1l-20.3,20.3v127.8C1731.8,1404.9,1705.5,1431.1,1673.2,1431.1L1673.2,1431.1z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">카카오톡</h3>
                      <p className="text-gray-600">{companyData.kakaoTalk}</p>
                      <p className="text-sm text-gray-500">실시간 상담 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 지도 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">오시는 길</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600">지도 API 키: YOUR_API_KEY</p>
                    <p className="text-sm text-gray-500 mt-2">카카오맵 또는 네이버맵 연동 예정</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 