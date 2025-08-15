import { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', icon: '📰' },
    { id: 'company', name: '회사소식', icon: '🏢' },
    { id: 'industry', name: '산업동향', icon: '📈' },
    { id: 'welfare', name: '복지정책', icon: '💝' },
    { id: 'health', name: '건강정보', icon: '🏥' },
    { id: 'event', name: '이벤트', icon: '🎉' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: '인사랑돌봄, 2024년 시니어 케어 혁신 기술 도입',
      category: 'company',
      excerpt: '인사랑돌봄이 최신 AI 기술을 활용한 시니어 케어 서비스를 도입하여 어르신들의 삶의 질 향상에 기여할 예정입니다.',
      content: '인사랑돌봄은 2024년 새로운 해를 맞이하여 최신 AI 기술과 IoT 기기를 활용한 스마트 케어 서비스를 도입한다고 발표했습니다. 이번 기술 도입을 통해 어르신들의 건강 상태를 실시간으로 모니터링하고, 맞춤형 케어 서비스를 제공할 수 있게 됩니다.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-15',
      readTime: '3분',
      tags: ['AI기술', '스마트케어', '혁신', '서비스개선'],
      isFeatured: true,
      isBreaking: false
    },
    {
      id: 2,
      title: '정부, 노인장기요양보험 혜택 확대 정책 발표',
      category: 'welfare',
      excerpt: '정부가 노인장기요양보험 혜택을 대폭 확대하여 더 많은 어르신들이 혜택을 받을 수 있도록 정책을 발표했습니다.',
      content: '보건복지부는 노인장기요양보험 혜택을 대폭 확대하는 새로운 정책을 발표했습니다. 이번 정책으로 인정등급 기준이 완화되어 더 많은 어르신들이 요양 서비스를 받을 수 있게 되며, 지원 금액도 증가할 예정입니다.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-14',
      readTime: '4분',
      tags: ['복지정책', '장기요양보험', '혜택확대', '정부지원'],
      isFeatured: false,
      isBreaking: true
    },
    {
      id: 3,
      title: '시니어 케어 산업, 디지털 전환 가속화',
      category: 'industry',
      excerpt: '시니어 케어 산업에서 디지털 전환이 가속화되어 더욱 편리하고 효율적인 서비스가 제공되고 있습니다.',
      content: '코로나19 이후 시니어 케어 산업의 디지털 전환이 가속화되고 있습니다. 원격 상담, 디지털 헬스케어, 스마트 홈 케어 등 다양한 디지털 서비스가 도입되어 어르신들의 편의성을 크게 향상시키고 있습니다.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-13',
      readTime: '5분',
      tags: ['디지털전환', '원격상담', '스마트홈', '산업동향'],
      isFeatured: false,
      isBreaking: false
    },
    {
      id: 4,
      title: '어르신 건강관리를 위한 새로운 운동 프로그램 출시',
      category: 'health',
      excerpt: '인사랑돌봄이 어르신들의 건강관리를 위한 새로운 운동 프로그램을 출시하여 큰 호응을 얻고 있습니다.',
      content: '인사랑돌봄은 어르신들의 건강관리를 위한 새로운 운동 프로그램을 출시했습니다. 이 프로그램은 어르신들의 신체 조건을 고려하여 안전하고 효과적인 운동을 제공하며, 전문 트레이너의 지도 하에 진행됩니다.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-12',
      readTime: '3분',
      tags: ['운동프로그램', '건강관리', '전문지도', '안전운동'],
      isFeatured: true,
      isBreaking: false
    },
    {
      id: 5,
      title: '인사랑돌봄, 사회공헌 활동 확대',
      category: 'company',
      excerpt: '인사랑돌봄이 사회공헌 활동을 확대하여 지역사회 어르신들을 위한 다양한 봉사활동을 진행하고 있습니다.',
      content: '인사랑돌봄은 지역사회 어르신들을 위한 사회공헌 활동을 확대했습니다. 무료 건강검진, 복지용구 지원, 문화행사 개최 등 다양한 봉사활동을 통해 지역사회에 기여하고 있습니다.',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-11',
      readTime: '4분',
      tags: ['사회공헌', '봉사활동', '지역사회', '무료검진'],
      isFeatured: false,
      isBreaking: false
    },
    {
      id: 6,
      title: '치매 예방을 위한 새로운 연구 결과 발표',
      category: 'health',
      excerpt: '최신 연구 결과에 따르면 규칙적인 운동과 건강한 식습관이 치매 예방에 매우 효과적이라는 것이 밝혀졌습니다.',
      content: '국내 연구진이 치매 예방을 위한 새로운 연구 결과를 발표했습니다. 이 연구에 따르면 규칙적인 운동, 건강한 식습관, 사회적 활동이 치매 예방에 매우 효과적이며, 특히 조기 발견과 치료의 중요성이 강조되었습니다.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-10',
      readTime: '6분',
      tags: ['치매예방', '연구결과', '운동', '건강식습관'],
      isFeatured: false,
      isBreaking: true
    },
    {
      id: 7,
      title: '인사랑돌봄, 고객 만족도 조사 결과 발표',
      category: 'company',
      excerpt: '인사랑돌봄의 2023년 고객 만족도 조사 결과가 발표되어 높은 만족도를 기록했습니다.',
      content: '인사랑돌봄이 2023년 고객 만족도 조사 결과를 발표했습니다. 조사 결과 서비스 품질, 직원 친절도, 시설 환경 등 모든 항목에서 높은 만족도를 기록했으며, 특히 어르신들의 안전과 편의성에 대한 만족도가 가장 높았습니다.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-09',
      readTime: '3분',
      tags: ['고객만족도', '서비스품질', '안전성', '편의성'],
      isFeatured: false,
      isBreaking: false
    },
    {
      id: 8,
      title: '어르신을 위한 문화행사 개최 안내',
      category: 'event',
      excerpt: '인사랑돌봄이 어르신들을 위한 다양한 문화행사를 개최하여 활기찬 노후 생활을 지원합니다.',
      content: '인사랑돌봄은 어르신들을 위한 다양한 문화행사를 개최합니다. 전통 공연, 미술 전시, 음악회 등 다양한 문화 활동을 통해 어르신들이 활기찬 노후 생활을 즐길 수 있도록 지원하고 있습니다.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&crop=center',
      date: '2024-01-08',
      readTime: '4분',
      tags: ['문화행사', '전통공연', '미술전시', '음악회'],
      isFeatured: false,
      isBreaking: false
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredArticles = newsArticles.filter(article => article.isFeatured);
  const breakingNews = newsArticles.filter(article => article.isBreaking);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            인사랑 뉴스
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            인사랑돌봄의 최신 소식과 시니어 케어 관련 뉴스를 확인하세요.<br />
            어르신들을 위한 다양한 정보와 업데이트를 제공합니다.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* 속보 뉴스 */}
        {breakingNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
              🔥 속보 뉴스
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              {breakingNews.map((article) => (
                <div key={article.id} className="flex items-start space-x-4 mb-4 last:mb-0">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mt-1">
                    속보
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                    <p className="text-gray-600 text-sm">{article.excerpt}</p>
                    <p className="text-red-600 text-xs mt-1">{formatDate(article.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 주요 뉴스 */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              📰 주요 뉴스
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        주요뉴스
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">{formatDate(article.date)}</p>
                      <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                        자세히 보기 →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 카테고리 필터 */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            뉴스 카테고리
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 뉴스 목록 */}
        <div className="mb-12">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* 이미지 */}
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    {article.isBreaking && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                          속보
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 콘텐츠 */}
                  <div className="p-6">
                    {/* 카테고리 및 메타 정보 */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {article.readTime}
                      </div>
                    </div>

                    {/* 제목 */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* 요약 */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 날짜 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">{formatDate(article.date)}</p>
                      <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                        자세히 보기 →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                해당 카테고리의 뉴스가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 카테고리를 선택하거나 전체 뉴스를 확인해보세요
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                전체 뉴스 보기
              </button>
            </div>
          )}
        </div>

        {/* 뉴스 구독 CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            최신 뉴스를 놓치지 마세요!
          </h2>
          <p className="text-blue-100 mb-6">
            인사랑돌봄의 최신 소식과 시니어 케어 관련 뉴스를 이메일로 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 