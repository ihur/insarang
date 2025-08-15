import { useState } from 'react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const [selectedType, setSelectedType] = useState('NURSING_HOSPITAL');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const facilityTypes = [
    { id: 'NURSING_HOSPITAL', name: '요양병원', icon: '🏥' },
    { id: 'DAY_NIGHT_CARE', name: '주야간보호', icon: '🏠' },
    { id: 'VISIT_CARE', name: '방문요양', icon: '👨‍⚕️' },
    { id: 'NURSING_HOME', name: '요양원', icon: '🏘️' },
    { id: 'WELFARE_DEVICE', name: '복지용구기관', icon: '🦼' }
  ];

  const regions = [
    '서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', 
    '대전광역시', '울산광역시', '세종특별자치시', '경기도', '강원도',
    '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도'
  ];

  const mockFacilities = [
    {
      id: 1,
      name: '인사랑요양병원',
      type: '요양병원',
      address: '서울특별시 강남구 테헤란로 123',
      phone: '02-1234-5678',
      rating: 4.8,
      distance: '0.5km',
      image: 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=요양병원'
    },
    {
      id: 2,
      name: '행복한요양원',
      type: '요양원',
      address: '서울특별시 서초구 서초대로 456',
      phone: '02-2345-6789',
      rating: 4.6,
      distance: '1.2km',
      image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=요양원'
    },
    {
      id: 3,
      name: '사랑의주야간보호센터',
      type: '주야간보호',
      address: '서울특별시 송파구 올림픽로 789',
      phone: '02-3456-7890',
      rating: 4.9,
      distance: '0.8km',
      image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=주야간보호'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            요양시설찾기
          </h1>
          <p className="text-gray-600 text-lg">
            어르신을 위한 최적의 요양시설을 찾아보세요
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 필터 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              {/* 시설 유형 선택 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  요양시설 선택
                </h3>
                <div className="space-y-2">
                  {facilityTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        selectedType === type.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl mr-2">{type.icon}</span>
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 지역 선택 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  지역 선택
                </h3>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">전체 지역</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* 검색 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  시설명 검색
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="원하는 시설명을 검색해보세요"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <svg
                    className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* 필터 초기화 */}
              <button
                onClick={() => {
                  setSelectedType('NURSING_HOSPITAL');
                  setSelectedRegion('');
                  setSearchKeyword('');
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                필터 초기화
              </button>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            {/* 결과 헤더 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {facilityTypes.find(t => t.id === selectedType)?.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    총 {mockFacilities.length}개의 시설이 있어요
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    지도보기
                  </button>
                </div>
              </div>
            </div>

            {/* 시설 목록 */}
            <div className="space-y-6">
              {mockFacilities.map((facility) => (
                <div key={facility.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* 이미지 */}
                    <div className="md:col-span-1">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    {/* 정보 */}
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {facility.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {facility.type}
                            </span>
                            <span>⭐ {facility.rating}</span>
                            <span>📍 {facility.distance}</span>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="space-y-2 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {facility.address}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {facility.phone}
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Link to={`/facilities/${facility.id}`} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center">
                          상세보기
                        </Link>
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                          문의하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                  이전
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  다음
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities; 