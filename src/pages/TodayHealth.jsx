import { useState } from 'react';
import { Link } from 'react-router-dom';

const TodayHealth = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', icon: '🏥' },
    { id: 'nutrition', name: '영양관리', icon: '🥗' },
    { id: 'exercise', name: '운동', icon: '🏃‍♂️' },
    { id: 'dementia', name: '치매예방', icon: '🧠' },
    { id: 'chronic', name: '만성질환', icon: '💊' },
    { id: 'mental', name: '정신건강', icon: '😊' }
  ];

  const healthArticles = [
    {
      id: 1,
      title: '어르신을 위한 올바른 영양 섭취 방법',
      category: 'nutrition',
      excerpt: '나이가 들면서 변화하는 영양 요구량과 건강한 식습관에 대해 알아보세요.',
      content: '어르신의 건강한 삶을 위해서는 균형 잡힌 영양 섭취가 매우 중요합니다. 단백질, 비타민, 미네랄이 풍부한 식사를 통해 근육량 유지와 면역력 강화에 도움을 받을 수 있습니다.',
      image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=영양관리',
      date: '2024-01-15',
      readTime: '5분',
      tags: ['영양', '건강식', '단백질', '비타민']
    },
    {
      id: 2,
      title: '실내에서 할 수 있는 어르신 운동법',
      category: 'exercise',
      excerpt: '집에서도 안전하게 할 수 있는 간단한 운동들을 소개합니다.',
      content: '규칙적인 운동은 어르신의 근력과 균형감각을 향상시키는 데 도움이 됩니다. 의자에 앉아서 할 수 있는 운동부터 시작하여 점진적으로 강도를 높여가세요.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=운동',
      date: '2024-01-14',
      readTime: '7분',
      tags: ['운동', '근력강화', '균형감각', '실내운동']
    },
    {
      id: 3,
      title: '치매 예방을 위한 일상생활 팁',
      category: 'dementia',
      excerpt: '치매 예방에 도움이 되는 생활 습관과 인지 훈련 방법을 알아보세요.',
      content: '치매 예방을 위해서는 규칙적인 운동, 균형 잡힌 식사, 충분한 수면, 그리고 지속적인 학습과 사회적 활동이 중요합니다.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=치매예방',
      date: '2024-01-13',
      readTime: '6분',
      tags: ['치매예방', '인지훈련', '뇌건강', '사회활동']
    },
    {
      id: 4,
      title: '고혈압 관리의 중요성과 방법',
      category: 'chronic',
      excerpt: '고혈압의 위험성과 일상에서 실천할 수 있는 관리 방법을 알아보세요.',
      content: '고혈압은 심장병, 뇌졸중 등 심각한 질환의 원인이 될 수 있습니다. 소금 섭취 줄이기, 규칙적인 운동, 스트레스 관리가 중요합니다.',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=고혈압관리',
      date: '2024-01-12',
      readTime: '8분',
      tags: ['고혈압', '만성질환', '혈압관리', '예방']
    },
    {
      id: 5,
      title: '어르신의 우울증 예방과 관리',
      category: 'mental',
      excerpt: '노년기 우울증의 증상과 예방 방법, 치료에 대해 알아보세요.',
      content: '노년기 우울증은 흔하지만 치료 가능한 질환입니다. 가족의 관심과 사회적 지원, 전문의 상담을 통해 개선할 수 있습니다.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=정신건강',
      date: '2024-01-11',
      readTime: '6분',
      tags: ['우울증', '정신건강', '치료', '예방']
    },
    {
      id: 6,
      title: '당뇨병 관리의 핵심 포인트',
      category: 'chronic',
      excerpt: '당뇨병 환자를 위한 식이요법과 생활 관리 방법을 알아보세요.',
      content: '당뇨병 관리는 식이요법, 운동, 약물치료의 균형이 중요합니다. 정기적인 혈당 체크와 의료진과의 상담이 필수입니다.',
      image: 'https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=당뇨관리',
      date: '2024-01-10',
      readTime: '7분',
      tags: ['당뇨병', '혈당관리', '식이요법', '운동']
    },
    {
      id: 7,
      title: '관절염 예방과 관리 방법',
      category: 'chronic',
      excerpt: '관절염의 원인과 증상, 일상에서 실천할 수 있는 관리법을 알아보세요.',
      content: '관절염은 적절한 운동과 체중 관리, 올바른 자세로 예방할 수 있습니다. 통증이 심할 때는 전문의와 상담하세요.',
      image: 'https://via.placeholder.com/400x250/84CC16/FFFFFF?text=관절염관리',
      date: '2024-01-09',
      readTime: '5분',
      tags: ['관절염', '통증관리', '운동', '예방']
    },
    {
      id: 8,
      title: '어르신을 위한 수면 건강 가이드',
      category: 'mental',
      excerpt: '나이가 들면서 변화하는 수면 패턴과 건강한 수면을 위한 팁을 알아보세요.',
      content: '충분한 수면은 면역력 강화와 기억력 향상에 도움이 됩니다. 규칙적인 생활습관과 편안한 수면 환경 조성이 중요합니다.',
      image: 'https://via.placeholder.com/400x250/F97316/FFFFFF?text=수면건강',
      date: '2024-01-08',
      readTime: '6분',
      tags: ['수면', '면역력', '기억력', '생활습관']
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? healthArticles 
    : healthArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const healthTips = [
    {
      icon: '💧',
      title: '충분한 수분 섭취',
      description: '하루 8잔 이상의 물을 마시는 것이 중요합니다.'
    },
    {
      icon: '🚶‍♂️',
      title: '규칙적인 운동',
      description: '주 3회 이상, 30분씩 가벼운 운동을 하세요.'
    },
    {
      icon: '🥗',
      title: '균형 잡힌 식사',
      description: '다양한 영양소가 포함된 식사를 섭취하세요.'
    },
    {
      icon: '😴',
      title: '충분한 수면',
      description: '하루 7-8시간의 충분한 수면을 취하세요.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            오늘의 건강
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            어르신의 건강한 삶을 위한 전문적인 건강 정보와 유용한 팁을 제공합니다.<br />
            매일 실천할 수 있는 건강 관리 방법을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* 건강 팁 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            오늘의 건강 팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            건강 정보 카테고리
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 건강 정보 목록 */}
        <div className="mb-12">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* 이미지 */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* 콘텐츠 */}
                  <div className="p-6">
                    {/* 카테고리 및 메타 정보 */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                해당 카테고리의 건강 정보가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 카테고리를 선택하거나 전체 건강 정보를 확인해보세요
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                전체 건강 정보 보기
              </button>
            </div>
          )}
        </div>

        {/* 건강 상담 CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            건강에 대해 궁금한 점이 있으신가요?
          </h2>
          <p className="text-blue-100 mb-6">
            전문 의료진에게 직접 상담받아 어르신의 건강을 관리하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              건강 상담받기
            </Link>
            <a
              href="tel:02-1234-5678"
              className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-400 transition-colors duration-200 text-lg"
            >
              전화 상담하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayHealth; 