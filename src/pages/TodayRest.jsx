import { useState } from 'react';
import { Link } from 'react-router-dom';

const TodayRest = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', icon: '🌙' },
    { id: 'sleep', name: '수면', icon: '😴' },
    { id: 'relaxation', name: '이완', icon: '🧘‍♀️' },
    { id: 'hobby', name: '취미', icon: '🎨' },
    { id: 'social', name: '사회활동', icon: '👥' },
    { id: 'travel', name: '여행', icon: '✈️' }
  ];

  const restActivities = [
    {
      id: 1,
      title: '편안한 수면을 위한 환경 조성법',
      category: 'sleep',
      excerpt: '어르신을 위한 최적의 수면 환경을 만드는 방법을 알아보세요.',
      content: '충분한 수면은 어르신의 건강과 면역력에 매우 중요합니다. 적절한 온도, 조명, 소음 관리로 편안한 수면을 취할 수 있도록 도와드립니다.',
      image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=수면환경',
      date: '2024-01-15',
      readTime: '5분',
      tags: ['수면', '환경', '건강', '휴식'],
      tips: [
        '침실 온도를 18-22도로 유지하세요',
        '부드러운 조명과 차분한 색상을 사용하세요',
        '외부 소음을 차단하는 방음 처리를 하세요',
        '편안한 침구와 베개를 선택하세요'
      ]
    },
    {
      id: 2,
      title: '스트레스 해소를 위한 명상법',
      category: 'relaxation',
      excerpt: '일상의 스트레스를 해소하고 마음을 진정시키는 명상 방법을 소개합니다.',
      content: '명상은 스트레스 해소와 정신 건강에 매우 효과적입니다. 간단한 호흡법부터 시작하여 점진적으로 명상 시간을 늘려가세요.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=명상',
      date: '2024-01-14',
      readTime: '7분',
      tags: ['명상', '스트레스해소', '호흡법', '이완'],
      tips: [
        '편안한 자세로 앉아 깊은 호흡을 하세요',
        '마음을 비우고 현재에 집중하세요',
        '하루 10분씩 명상 시간을 가지세요',
        '자연의 소리를 들으며 명상하세요'
      ]
    },
    {
      id: 3,
      title: '어르신을 위한 실내 취미 활동',
      category: 'hobby',
      excerpt: '집에서도 즐길 수 있는 다양한 취미 활동을 소개합니다.',
      content: '취미 활동은 정신 건강과 삶의 질 향상에 도움이 됩니다. 어르신의 관심사와 능력에 맞는 취미를 찾아보세요.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=취미활동',
      date: '2024-01-13',
      readTime: '6분',
      tags: ['취미', '실내활동', '창작', '학습'],
      tips: [
        '그림 그리기나 색칠하기를 시도해보세요',
        '퍼즐이나 보드게임을 즐겨보세요',
        '독서나 글쓰기를 통해 정신을 활성화하세요',
        '요리나 정원 가꾸기를 통해 성취감을 느껴보세요'
      ]
    },
    {
      id: 4,
      title: '사회적 활동의 중요성과 방법',
      category: 'social',
      excerpt: '어르신의 사회적 활동이 건강에 미치는 긍정적 영향과 참여 방법을 알아보세요.',
      content: '사회적 활동은 우울증 예방과 인지 기능 향상에 도움이 됩니다. 가족, 친구, 이웃과의 교류를 통해 활기찬 노후를 보내세요.',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=사회활동',
      date: '2024-01-12',
      readTime: '8분',
      tags: ['사회활동', '교류', '우울증예방', '인지기능'],
      tips: [
        '가족과 정기적으로 만나 대화를 나누세요',
        '이웃과의 교류를 통해 소통의 기회를 만드세요',
        '동호회나 모임에 참여해보세요',
        '봉사활동을 통해 의미 있는 시간을 보내세요'
      ]
    },
    {
      id: 5,
      title: '어르신을 위한 가벼운 여행 가이드',
      category: 'travel',
      excerpt: '어르신이 안전하고 편안하게 여행할 수 있는 팁과 추천 여행지를 소개합니다.',
      content: '여행은 새로운 경험과 추억을 만들어주는 좋은 활동입니다. 어르신의 건강 상태를 고려한 맞춤형 여행 계획을 세워보세요.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=여행',
      date: '2024-01-11',
      readTime: '6분',
      tags: ['여행', '휴양', '경험', '추억'],
      tips: [
        '여행 전 건강검진을 받으세요',
        '편안한 교통수단을 선택하세요',
        '충분한 휴식 시간을 계획에 포함하세요',
        '응급상황에 대비한 준비를 하세요'
      ]
    },
    {
      id: 6,
      title: '요가와 스트레칭으로 몸과 마음 휴식',
      category: 'relaxation',
      excerpt: '어르신도 쉽게 할 수 있는 요가와 스트레칭으로 몸과 마음을 이완시켜보세요.',
      content: '요가와 스트레칭은 근육 이완과 스트레스 해소에 효과적입니다. 무리하지 않는 선에서 천천히 시작해보세요.',
      image: 'https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=요가',
      date: '2024-01-10',
      readTime: '7분',
      tags: ['요가', '스트레칭', '이완', '건강'],
      tips: [
        '의자에 앉아서 할 수 있는 간단한 동작부터 시작하세요',
        '호흡에 집중하며 천천히 동작을 수행하세요',
        '통증이 느껴지면 즉시 중단하세요',
        '규칙적으로 연습하여 효과를 높이세요'
      ]
    },
    {
      id: 7,
      title: '음악을 통한 휴식과 힐링',
      category: 'relaxation',
      excerpt: '음악의 힐링 효과와 어르신을 위한 음악 감상법을 알아보세요.',
      content: '음악은 스트레스 해소와 감정 안정에 매우 효과적입니다. 좋아하는 음악을 들으며 마음을 진정시켜보세요.',
      image: 'https://via.placeholder.com/400x250/84CC16/FFFFFF?text=음악',
      date: '2024-01-09',
      readTime: '5분',
      tags: ['음악', '힐링', '감정안정', '스트레스해소'],
      tips: [
        '차분한 클래식 음악을 감상해보세요',
        '좋아하는 노래를 따라 불러보세요',
        '자연의 소리(비 소리, 바다 소리)를 들어보세요',
        '음악과 함께 명상이나 요가를 해보세요'
      ]
    },
    {
      id: 8,
      title: '독서를 통한 정신적 휴식',
      category: 'hobby',
      excerpt: '독서의 다양한 효과와 어르신을 위한 독서 방법을 소개합니다.',
      content: '독서는 인지 기능 향상과 스트레스 해소에 도움이 됩니다. 편안한 환경에서 좋아하는 책을 읽어보세요.',
      image: 'https://via.placeholder.com/400x250/F97316/FFFFFF?text=독서',
      date: '2024-01-08',
      readTime: '6분',
      tags: ['독서', '학습', '인지기능', '정신활동'],
      tips: [
        '충분한 조명 아래에서 읽으세요',
        '편안한 자세로 앉아서 읽으세요',
        '자주 휴식을 취하며 읽으세요',
        '읽은 내용을 가족과 나누어보세요'
      ]
    }
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? restActivities 
    : restActivities.filter(activity => activity.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const restTips = [
    {
      icon: '😴',
      title: '충분한 수면',
      description: '하루 7-8시간의 충분한 수면을 취하세요.'
    },
    {
      icon: '🧘‍♀️',
      title: '정기적인 휴식',
      description: '하루 중 정기적으로 휴식 시간을 가지세요.'
    },
    {
      icon: '🎵',
      title: '음악 감상',
      description: '좋아하는 음악을 들으며 마음을 진정시키세요.'
    },
    {
      icon: '👥',
      title: '사회적 교류',
      description: '가족, 친구와의 대화를 통해 스트레스를 해소하세요.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            오늘의 휴식
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            어르신의 마음과 몸을 편안하게 해주는 휴식 방법을 소개합니다.<br />
            스트레스 해소와 건강한 노후를 위한 다양한 휴식 활동을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* 휴식 팁 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            오늘의 휴식 팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restTips.map((tip, index) => (
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
            휴식 활동 카테고리
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 휴식 활동 목록 */}
        <div className="mb-12">
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <article key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* 이미지 */}
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* 콘텐츠 */}
                  <div className="p-6">
                    {/* 카테고리 및 메타 정보 */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === activity.category)?.name}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {activity.readTime}
                      </div>
                    </div>

                    {/* 제목 */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {activity.title}
                    </h3>

                    {/* 요약 */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {activity.excerpt}
                    </p>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 실천 팁 */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">실천 팁</h4>
                      <ul className="space-y-1">
                        {activity.tips.slice(0, 2).map((tip, index) => (
                          <li key={index} className="text-gray-600 text-xs flex items-start">
                            <span className="text-indigo-400 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 날짜 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
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
                해당 카테고리의 휴식 활동이 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 카테고리를 선택하거나 전체 휴식 활동을 확인해보세요
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                전체 휴식 활동 보기
              </button>
            </div>
          )}
        </div>

        {/* 휴식 상담 CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            휴식에 대해 더 알고 싶으신가요?
          </h2>
          <p className="text-teal-100 mb-6">
            전문 상담사에게 어르신에게 맞는 휴식 방법에 대해 상담받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              휴식 상담받기
            </Link>
            <a
              href="tel:02-1234-5678"
              className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-400 transition-colors duration-200 text-lg"
            >
              전화 상담하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayRest; 