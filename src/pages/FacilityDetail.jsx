import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FacilityDetail = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState(null);
  const [loading, setLoading] = useState(true);

  // 실제 시설 데이터 (더 상세한 정보 포함)
  const facilityData = {
    1: {
      id: 1,
      name: '인사랑요양병원',
      type: '요양병원',
      address: '서울특별시 강남구 테헤란로 123',
      phone: '02-1234-5678',
      fax: '02-1234-5679',
      email: 'info@insarang-hospital.co.kr',
      website: 'https://insarang-hospital.co.kr',
      rating: 4.8,
      reviewCount: 127,
      distance: '0.5km',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center'
      ],
      description: '인사랑요양병원은 30년간 시니어 케어 분야에서 축적된 노하우와 전문성을 바탕으로, 어르신들의 건강하고 행복한 삶을 지원합니다. 최신 의료장비와 전문 의료진을 통해 최고의 케어 서비스를 제공합니다.',
      services: [
        '재활치료', '간호서비스', '의료진료', '영양관리', '상담서비스', '문화활동'
      ],
      facilities: [
        '물리치료실', '작업치료실', '언어치료실', '운동치료실', '휴게실', '식당', '정원'
      ],
      staff: {
        doctors: 8,
        nurses: 25,
        therapists: 12,
        caregivers: 30
      },
      capacity: 120,
      currentPatients: 98,
      admissionRate: 82,
      operatingHours: '24시간 운영',
      visitingHours: '09:00-18:00',
      parking: '무료 주차 가능 (50대)',
      transportation: '지하철 2호선 강남역 3번 출구에서 도보 5분',
      insurance: ['국민건강보험', '노인장기요양보험', '실비보험'],
      specialFeatures: [
        '치매전문센터', '재활전문센터', '통증관리센터', '영양관리센터'
      ],
      reviews: [
        {
          id: 1,
          name: '김**',
          rating: 5,
          date: '2024-01-15',
          comment: '의료진이 매우 친절하고 전문적입니다. 어머니가 많이 좋아하세요.'
        },
        {
          id: 2,
          name: '이**',
          rating: 4,
          date: '2024-01-14',
          comment: '시설이 깔끔하고 쾌적합니다. 재활치료도 체계적으로 진행됩니다.'
        },
        {
          id: 3,
          name: '박**',
          rating: 5,
          date: '2024-01-13',
          comment: '간호사들이 정말 친절하고 세심하게 케어해주세요.'
        }
      ]
    },
    2: {
      id: 2,
      name: '행복한요양원',
      type: '요양원',
      address: '서울특별시 서초구 서초대로 456',
      phone: '02-2345-6789',
      fax: '02-2345-6790',
      email: 'info@happy-nursing.co.kr',
      website: 'https://happy-nursing.co.kr',
      rating: 4.6,
      reviewCount: 89,
      distance: '1.2km',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center'
      ],
      description: '행복한요양원은 가족같은 마음으로 어르신들을 돌보는 요양원입니다. 편안하고 안전한 환경에서 어르신들이 행복한 노후를 보낼 수 있도록 최선을 다하고 있습니다.',
      services: [
        '일상생활지원', '간호서비스', '재활치료', '영양관리', '상담서비스', '여가활동'
      ],
      facilities: [
        '휴게실', '식당', '정원', '운동실', '도서관', '미용실', '목욕실'
      ],
      staff: {
        doctors: 3,
        nurses: 15,
        therapists: 8,
        caregivers: 25
      },
      capacity: 80,
      currentPatients: 65,
      admissionRate: 81,
      operatingHours: '24시간 운영',
      visitingHours: '09:00-18:00',
      parking: '무료 주차 가능 (30대)',
      transportation: '지하철 2호선 서초역 1번 출구에서 도보 8분',
      insurance: ['국민건강보험', '노인장기요양보험'],
      specialFeatures: [
        '치매전문케어', '재활치료', '문화활동', '가족상담'
      ],
      reviews: [
        {
          id: 1,
          name: '최**',
          rating: 4,
          date: '2024-01-15',
          comment: '시설이 깔끔하고 직원들이 친절합니다.'
        },
        {
          id: 2,
          name: '정**',
          rating: 5,
          date: '2024-01-14',
          comment: '어머니가 정말 행복해하세요. 감사합니다.'
        }
      ]
    },
    3: {
      id: 3,
      name: '사랑의주야간보호센터',
      type: '주야간보호',
      address: '서울특별시 송파구 올림픽로 789',
      phone: '02-3456-7890',
      fax: '02-3456-7891',
      email: 'info@love-care.co.kr',
      website: 'https://love-care.co.kr',
      rating: 4.9,
      reviewCount: 156,
      distance: '0.8km',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
      images: [
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center'
      ],
      description: '사랑의주야간보호센터는 어르신들이 낮에는 활발한 활동을, 밤에는 편안한 휴식을 취할 수 있는 공간입니다. 전문적인 케어와 다양한 프로그램을 통해 어르신들의 삶의 질을 향상시킵니다.',
      services: [
        '일상생활지원', '재활치료', '영양관리', '여가활동', '상담서비스', '가족지원'
      ],
      facilities: [
        '활동실', '휴게실', '식당', '정원', '운동실', '도서관', '목욕실'
      ],
      staff: {
        doctors: 2,
        nurses: 12,
        therapists: 6,
        caregivers: 20
      },
      capacity: 60,
      currentPatients: 45,
      admissionRate: 75,
      operatingHours: '08:00-20:00',
      visitingHours: '09:00-18:00',
      parking: '무료 주차 가능 (20대)',
      transportation: '지하철 2호선 잠실역 2번 출구에서 도보 10분',
      insurance: ['국민건강보험', '노인장기요양보험'],
      specialFeatures: [
        '치매예방프로그램', '재활치료', '문화활동', '가족상담'
      ],
      reviews: [
        {
          id: 1,
          name: '강**',
          rating: 5,
          date: '2024-01-15',
          comment: '프로그램이 다양하고 재미있어서 어머니가 좋아하세요.'
        },
        {
          id: 2,
          name: '윤**',
          rating: 5,
          date: '2024-01-14',
          comment: '직원들이 정말 친절하고 전문적입니다.'
        },
        {
          id: 3,
          name: '임**',
          rating: 4,
          date: '2024-01-13',
          comment: '시설이 깔끔하고 프로그램도 좋습니다.'
        }
      ]
    }
  };

  useEffect(() => {
    // 시설 데이터 로드 시뮬레이션
    setTimeout(() => {
      const facilityInfo = facilityData[id];
      if (facilityInfo) {
        setFacility(facilityInfo);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-custom py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">시설 정보를 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!facility) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-custom py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">시설을 찾을 수 없습니다</h1>
            <p className="text-gray-600 mb-6">요청하신 시설 정보가 존재하지 않습니다.</p>
            <Link to="/facilities" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              시설 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/facilities" className="text-blue-600 hover:text-blue-700">
              ← 시설 목록으로 돌아가기
            </Link>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {facility.name}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {facility.type}
            </span>
            <span className="flex items-center">
              ⭐ {facility.rating} ({facility.reviewCount}개 리뷰)
            </span>
            <span>📍 {facility.distance}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2">
            {/* 이미지 갤러리 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={facility.images[selectedImage]}
                  alt={facility.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {facility.images.length}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {facility.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${facility.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 시설 소개 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">시설 소개</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {facility.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">제공 서비스</h3>
                  <div className="space-y-2">
                    {facility.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">시설 구성</h3>
                  <div className="space-y-2">
                    {facility.facilities.map((facilityItem, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {facilityItem}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 지도 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">위치 정보</h2>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{facility.address}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>🚇 {facility.transportation}</div>
                  <div>🅿️ {facility.parking}</div>
                </div>
              </div>
              
              {/* 카카오맵 임베드 (실제 주소 사용) */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-600 mb-2">카카오맵</p>
                  <p className="text-sm text-gray-500">{facility.address}</p>
                  <a
                    href={`https://map.kakao.com/link/search/${encodeURIComponent(facility.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    카카오맵에서 보기
                  </a>
                </div>
              </div>
            </div>

            {/* 리뷰 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">고객 리뷰</h2>
              <div className="space-y-4">
                {facility.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* 연락처 정보 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처 정보</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${facility.phone}`} className="text-blue-600 hover:text-blue-700">
                      {facility.phone}
                    </a>
                  </div>
                  {facility.fax && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-gray-700">{facility.fax}</span>
                    </div>
                  )}
                  {facility.email && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${facility.email}`} className="text-blue-600 hover:text-blue-700">
                        {facility.email}
                      </a>
                    </div>
                  )}
                  {facility.website && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                      <a href={facility.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        홈페이지 방문
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* 운영 정보 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">운영 정보</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">운영시간</span>
                    <p className="font-medium">{facility.operatingHours}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">면회시간</span>
                    <p className="font-medium">{facility.visitingHours}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">수용 인원</span>
                    <p className="font-medium">{facility.capacity}명 (현재 {facility.currentPatients}명)</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">입원률</span>
                    <p className="font-medium">{facility.admissionRate}%</p>
                  </div>
                </div>
              </div>

              {/* 의료진 정보 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">의료진 구성</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>의사</span>
                    <span className="font-medium">{facility.staff.doctors}명</span>
                  </div>
                  <div className="flex justify-between">
                    <span>간호사</span>
                    <span className="font-medium">{facility.staff.nurses}명</span>
                  </div>
                  <div className="flex justify-between">
                    <span>치료사</span>
                    <span className="font-medium">{facility.staff.therapists}명</span>
                  </div>
                  <div className="flex justify-between">
                    <span>간병인</span>
                    <span className="font-medium">{facility.staff.caregivers}명</span>
                  </div>
                </div>
              </div>

              {/* 보험 정보 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">보험 적용</h3>
                <div className="space-y-2">
                  {facility.insurance.map((insurance, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {insurance}
                    </div>
                  ))}
                </div>
              </div>

              {/* 특별 기능 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">특별 기능</h3>
                <div className="space-y-2">
                  {facility.specialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* 문의하기 버튼 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                    📞 전화 문의하기
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                    📝 상담 신청하기
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                    ❤️ 찜하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail; 