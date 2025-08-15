import { useState } from 'react';
import { Link } from 'react-router-dom';

const WelfareConsultation = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const welfareEquipment = [
    {
      id: 'mobility',
      category: '이동용품',
      items: [
        { id: 'wheelchair', name: '휠체어', icon: '🦼' },
        { id: 'walker', name: '보행기', icon: '🚶‍♂️' },
        { id: 'cane', name: '지팡이', icon: '🦯' },
        { id: 'crutch', name: '목발', icon: '🦯' },
        { id: 'scooter', name: '전동스쿠터', icon: '🛴' }
      ]
    },
    {
      id: 'daily',
      category: '일상생활용품',
      items: [
        { id: 'bed', name: '침대', icon: '🛏️' },
        { id: 'chair', name: '의자', icon: '🪑' },
        { id: 'table', name: '테이블', icon: '🪑' },
        { id: 'bathroom', name: '욕실용품', icon: '🚿' },
        { id: 'kitchen', name: '주방용품', icon: '🍳' }
      ]
    },
    {
      id: 'sensory',
      category: '감각기능보조용품',
      items: [
        { id: 'hearing', name: '보청기', icon: '👂' },
        { id: 'glasses', name: '안경', icon: '👓' },
        { id: 'magnifier', name: '확대경', icon: '🔍' },
        { id: 'alarm', name: '알람시계', icon: '⏰' }
      ]
    },
    {
      id: 'rehabilitation',
      category: '재활용품',
      items: [
        { id: 'exercise', name: '운동용품', icon: '💪' },
        { id: 'therapy', name: '치료용품', icon: '🏥' },
        { id: 'massage', name: '마사지용품', icon: '💆‍♂️' }
      ]
    }
  ];

  const handleEquipmentToggle = (equipmentId) => {
    setSelectedEquipment(prev => 
      prev.includes(equipmentId)
        ? prev.filter(id => id !== equipmentId)
        : [...prev, equipmentId]
    );
  };

  const getSelectedEquipmentNames = () => {
    const names = [];
    welfareEquipment.forEach(category => {
      category.items.forEach(item => {
        if (selectedEquipment.includes(item.id)) {
          names.push(item.name);
        }
      });
    });
    return names;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            관심 복지용구 상담
          </h1>
          <p className="text-gray-600 text-lg">
            <strong>필요한 복지용구</strong>를 선택하고 상담하면<br />
            <strong>받을 수 있는 혜택</strong>을 알려드려요
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-6xl mx-auto">
          {/* 히어로 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  어머니 상태에 도움이 되는<br />
                  <strong>복지용구</strong>를 신청하고 싶어요
                </h2>
                <p className="text-blue-100 mb-6">
                  지팡이, 보행기가 필요한데<br />
                  받을 수 있는 <strong>복지용구를 알고 싶어요</strong>
                </p>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  앱 다운받고 신청하기
                </button>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🦼</div>
                <p className="text-blue-100">복지용구 상담 도와드려요</p>
              </div>
            </div>
          </div>

          {/* 혜택 안내 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                받을 수 있는 혜택 확인
              </h3>
              <p className="text-gray-600 text-sm">
                관심있는 <strong>복지용구</strong>를 바탕으로<br />
                <strong>85%~100% 지원 혜택</strong>을 받을 수 있는지 알려드려요
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                필요한 복지용구 추천
              </h3>
              <p className="text-gray-600 text-sm">
                다양한 복지용구 상품 중<br />
                <strong>어르신 상황</strong>에 적합한 <strong>상품을 추천해드려요</strong>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                간편한 구매 신청
              </h3>
              <p className="text-gray-600 text-sm">
                필요한 복지용구 상품을<br />
                <strong>간편하게 구매</strong>할 수 있도록 도와드려요
              </p>
            </div>
          </div>

          {/* 복지용구 선택 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              관심있는 복지용구를 선택해주세요
            </h2>
            
            <div className="space-y-8">
              {welfareEquipment.map((category) => (
                <div key={category.id}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleEquipmentToggle(item.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                          selectedEquipment.includes(item.id)
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-sm font-medium">{item.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 선택된 항목 표시 */}
            {selectedEquipment.length > 0 && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  선택된 복지용구 ({selectedEquipment.length}개)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getSelectedEquipmentNames().map((name, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 상담 신청 버튼 */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowModal(true)}
                disabled={selectedEquipment.length === 0}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                  selectedEquipment.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {selectedEquipment.length === 0 
                  ? '복지용구를 선택해주세요' 
                  : '상담 신청하기'
                }
              </button>
            </div>
          </div>

          {/* 사용자 시나리오 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👩</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                복지용구를 고르기 어려워서<br />
                <strong>추천 받고 싶어요</strong>
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👵</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                지팡이, 보행기가 필요한데<br />
                <strong>받을 수 있는 복지용구를 알고 싶어요</strong>
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👨</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                어머니 상태에 도움이 되는<br />
                <strong>복지용구를 신청하고 싶어요</strong>
              </h3>
            </div>
          </div>

          {/* 앱 다운로드 CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              필요한 복지용구를 선택한 후<br />
              받을 수 있는 혜택을 알려드려요
            </h2>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              앱 다운받고 신청하기
            </button>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">앱 다운로드</h3>
            <p className="text-gray-600 mb-6">
              앱으로 더 쉽고 편리하게 확인하세요<br />
              앱 다운로드 링크를 보내 드려요
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">휴대폰 번호 수집 및 이용동의</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 수집하는 개인정보 항목: 휴대폰 번호</li>
                  <li>• 개인정보 수집 목적: 인사랑돌봄 앱 다운로드 메시지 발송</li>
                  <li>• 개인정보 보유 기간: 수집 목적 달성 시 즉시 파기</li>
                </ul>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                동의하고 보내기
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelfareConsultation; 