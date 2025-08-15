import { useState } from 'react';
import { Link } from 'react-router-dom';

const WelfareEquipment = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const equipmentCategories = [
    {
      id: 'all',
      name: '전체',
      icon: '🛠️'
    },
    {
      id: 'mobility',
      name: '이동용품',
      icon: '🦼'
    },
    {
      id: 'daily',
      name: '일상생활용품',
      icon: '🏠'
    },
    {
      id: 'safety',
      name: '안전용품',
      icon: '🛡️'
    },
    {
      id: 'bathroom',
      name: '욕실용품',
      icon: '🚿'
    },
    {
      id: 'bedroom',
      name: '침실용품',
      icon: '🛏️'
    }
  ];

  const equipmentList = [
    {
      id: 1,
      name: '성인용보행기',
      category: 'mobility',
      image: 'https://via.placeholder.com/200x150/4F46E5/FFFFFF?text=성인용보행기',
      description: '안정적인 보행을 도와주는 보행기'
    },
    {
      id: 2,
      name: '수동휠체어',
      category: 'mobility',
      image: 'https://via.placeholder.com/200x150/10B981/FFFFFF?text=수동휠체어',
      description: '이동이 불편한 분들을 위한 휠체어'
    },
    {
      id: 3,
      name: '지팡이',
      category: 'mobility',
      image: 'https://via.placeholder.com/200x150/F59E0B/FFFFFF?text=지팡이',
      description: '보행 시 균형을 잡아주는 지팡이'
    },
    {
      id: 4,
      name: '안전손잡이',
      category: 'safety',
      image: 'https://via.placeholder.com/200x150/EF4444/FFFFFF?text=안전손잡이',
      description: '계단이나 복도에서 안전을 위한 손잡이'
    },
    {
      id: 5,
      name: '미끄럼방지 매트',
      category: 'safety',
      image: 'https://via.placeholder.com/200x150/8B5CF6/FFFFFF?text=미끄럼방지매트',
      description: '바닥에서 미끄러짐을 방지하는 매트'
    },
    {
      id: 6,
      name: '미끄럼방지 양말',
      category: 'safety',
      image: 'https://via.placeholder.com/200x150/06B6D4/FFFFFF?text=미끄럼방지양말',
      description: '실내에서 미끄러짐을 방지하는 양말'
    },
    {
      id: 7,
      name: '욕창예방 매트리스',
      category: 'bedroom',
      image: 'https://via.placeholder.com/200x150/84CC16/FFFFFF?text=욕창예방매트리스',
      description: '욕창을 예방하는 특수 매트리스'
    },
    {
      id: 8,
      name: '욕창예방 방석',
      category: 'bedroom',
      image: 'https://via.placeholder.com/200x150/F97316/FFFFFF?text=욕창예방방석',
      description: '욕창을 예방하는 특수 방석'
    },
    {
      id: 9,
      name: '자세변환용구',
      category: 'daily',
      image: 'https://via.placeholder.com/200x150/EC4899/FFFFFF?text=자세변환용구',
      description: '자세를 바꿀 때 도움을 주는 용구'
    },
    {
      id: 10,
      name: '요실금 팬티',
      category: 'daily',
      image: 'https://via.placeholder.com/200x150/6366F1/FFFFFF?text=요실금팬티',
      description: '요실금 증상에 도움을 주는 팬티'
    },
    {
      id: 11,
      name: '목욕의자',
      category: 'bathroom',
      image: 'https://via.placeholder.com/200x150/14B8A6/FFFFFF?text=목욕의자',
      description: '안전하고 편안한 목욕을 위한 의자'
    },
    {
      id: 12,
      name: '이동변기',
      category: 'bathroom',
      image: 'https://via.placeholder.com/200x150/F43F5E/FFFFFF?text=이동변기',
      description: '이동이 가능한 변기'
    },
    {
      id: 13,
      name: '간이변기',
      category: 'bathroom',
      image: 'https://via.placeholder.com/200x150/A855F7/FFFFFF?text=간이변기',
      description: '간편하게 사용할 수 있는 변기'
    },
    {
      id: 14,
      name: '경사로',
      category: 'mobility',
      image: 'https://via.placeholder.com/200x150/22C55E/FFFFFF?text=경사로',
      description: '휠체어나 보행기 이동을 위한 경사로'
    }
  ];

  const livingSpaces = [
    {
      id: 'bathroom',
      title: '안전한 욕실생활',
      subtitle: '사고 위험이 높은 욕실 공간, 안전을 위한 복지용구를 만나보세요.',
      icon: '🚿',
      color: 'blue',
      equipment: ['목욕의자', '이동변기', '간이변기', '안전손잡이', '미끄럼방지 매트']
    },
    {
      id: 'living',
      title: '편안한 거실생활',
      subtitle: '가장 많이 활동하는 거실 공간, 편리한 이동을 위한 복지용구를 만나보세요.',
      icon: '🛋️',
      color: 'green',
      equipment: ['성인용보행기', '지팡이', '경사로', '미끄럼방지 매트']
    },
    {
      id: 'bedroom',
      title: '안락한 침실생활',
      subtitle: '편안한 수면을 위한 침실 공간, 휴식을 위한 복지용구를 만나보세요.',
      icon: '🛏️',
      color: 'purple',
      equipment: ['욕창예방 매트리스', '욕창예방 방석', '자세변환용구']
    },
    {
      id: 'outdoor',
      title: '건강한 야외생활',
      subtitle: '건강한 활동을 위한 야외 공간, 활력을 위한 복지용구를 만나보세요.',
      icon: '🌳',
      color: 'orange',
      equipment: ['수동휠체어', '성인용보행기', '지팡이', '경사로']
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700'
    };
    return colorMap[color] || 'bg-blue-600 hover:bg-blue-700';
  };

  const filteredEquipment = selectedCategory === 'all' 
    ? equipmentList 
    : equipmentList.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            부모님의 생활을 한층 편하게<br />
            복지용구가 일상생활에서 꼭 필요한 이유
          </h1>
          <p className="text-gray-600 text-lg">
            복지용구 선택방법 확인하기
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-7xl mx-auto">
          {/* 복지용구 목록 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              복지용구 종류
            </h2>

            {/* 카테고리 필터 */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {equipmentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* 복지용구 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredEquipment.map((equipment) => (
                <div key={equipment.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {equipment.name}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {equipment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 생활공간별 복지용구 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-blue-600">야외</span> <span className="text-green-600">욕실</span> <span className="text-purple-600">침실</span> <span className="text-orange-600">거실</span>에서도 <strong>안전하게</strong>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              집안에서도, 집밖에서도<br />
              불편함을 편함으로 해결해 드릴게요
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {livingSpaces.map((space) => (
                <div key={space.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`${getColorClasses(space.color)} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{space.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{space.title}</h3>
                        <p className="text-white/90 text-sm">{space.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">주요 복지용구</h4>
                      <div className="flex flex-wrap gap-2">
                        {space.equipment.map((item, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className={`w-full ${getColorClasses(space.color)} text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200`}>
                      복지용구 알아보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 혜택 안내 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                복지용구 지원 혜택
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-semibold mb-2">연 160만원 지원</h3>
                  <p className="text-sm text-white/90">
                    거동, 생활 보조 용품 구매비 지원
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">📋</div>
                  <h3 className="font-semibold mb-2">장기요양인정등급</h3>
                  <p className="text-sm text-white/90">
                    1~5등급, 인지지원등급 대상자
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">🏥</div>
                  <h3 className="font-semibold mb-2">6~15% 본인부담</h3>
                  <p className="text-sm text-white/90">
                    기초생활수급자는 전액 지원
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              필요한 복지용구를 찾아보세요
            </h2>
            <p className="text-green-100 mb-6">
              어르신의 상황에 맞는 최적의 복지용구를 추천해드립니다
            </p>
            <Link
              to="/welfare-consultation"
              className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              복지용구 상담받기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelfareEquipment; 