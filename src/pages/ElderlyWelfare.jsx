import { useState } from 'react';
import { Link } from 'react-router-dom';

const ElderlyWelfare = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const welfareServices = [
    {
      id: 1,
      title: '어르신용품 구매비 지원',
      subtitle: '신체활동이 불편하신 어르신이라면, 어르신용품을 신청하세요',
      description: '[국민건강보험]에서 어르신의 편안한 일상생활을 돕도록 용품 구매비를 지원합니다.',
      icon: '🦼',
      color: 'blue',
      details: {
        support: '거동, 생활 보조용품(복지용구) 지원금 연 160만원',
        qualification: '장기요양인정등급을 받으셔야 신청 가능',
        coverage: '전동침대부터 요실금팬티까지 대부분 생활용품 지원',
        notes: [
          '복지용구 구매시 6~15%의 본인부담금이 발생합니다. (단, 기초생활수급자는 전액 지원)',
          '시설에 모시는 어르신은 복지용구를 신청할 수 없어요.',
          '복지용구 구매비 지원을 받기 위한 절차가 간단하지 않아 국민건강보험공단에 먼저 상담 후 신청을 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 2,
      title: '요양시설 입소(시설급여) 이용비 지원',
      subtitle: '집에서 생활이 어려운 어르신이라면, 요양 전문 시설 입소를 신청하세요.',
      description: '[국민건강보험]에서 어르신의 삶을 위해 요양 시설 입소 비용을 지원합니다.',
      icon: '🏥',
      color: 'green',
      details: {
        support: '시설 입소에 따른 지원금 최대 연 3,364만원(월 280만원)',
        qualification: '장기요양인정등급 1, 2등급 판정을 받으셔야 신청 가능',
        notes: [
          '장기요양인정등급 3~5등급 어르신도 조건에 부합하면, 방문요양보호사 요청 대신 요양 시설에 모실 수 있습니다.',
          '등급외 판정의 경우 시설이나 재가, 복지용구 이용이 안됩니다.',
          '시설 이용비 지원을 받기 위한 절차가 간단하지 않아 국민건강보험공단에 먼저 상담을 진행하시길 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 3,
      title: '가정방문(재가급여) 이용비 지원',
      subtitle: '일상생활에서 부분적인 도움이 필요한 어르신이라면, 가정방문 서비스를 신청하세요.',
      description: '[국민건강보험]에서 어르신의 일상생활을 돕기 위해 가정방문 서비스 비용을 지원합니다.',
      icon: '🏠',
      color: 'purple',
      details: {
        support: '방문요양, 방문목욕, 방문간호, 주야간보호 서비스 지원',
        qualification: '장기요양인정등급 1~5등급 판정을 받으셔야 신청 가능',
        notes: [
          '등급별로 지원받을 수 있는 서비스와 시간이 다릅니다.',
          '등급외 판정의 경우 재가급여 이용이 안됩니다.',
          '가정방문 서비스 이용을 위해 국민건강보험공단에 먼저 상담을 진행하시길 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 4,
      title: '보청기 구매비 지원',
      subtitle: '청력이 저하된 어르신이라면, 보청기 구매비 지원을 신청하세요.',
      description: '[국민건강보험]에서 어르신의 청력 개선을 위해 보청기 구매비를 지원합니다.',
      icon: '👂',
      color: 'orange',
      details: {
        support: '보청기 구매비 연 40만원 지원',
        qualification: '만 65세 이상, 청력손실 60dB 이상',
        notes: [
          '보청기 구매시 본인부담금이 발생할 수 있습니다.',
          '의료기관에서 청력검사를 받은 후 신청 가능합니다.',
          '보청기 구매비 지원을 위해 국민건강보험공단에 먼저 상담을 진행하시길 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 5,
      title: '임플란트 이용 지원',
      subtitle: '치아 건강이 걱정되는 어르신이라면, 임플란트 지원을 신청하세요.',
      description: '[국민건강보험]에서 어르신의 구강 건강을 위해 임플란트 치료를 지원합니다.',
      icon: '🦷',
      color: 'teal',
      details: {
        support: '임플란트 치료비 일부 지원',
        qualification: '만 75세 이상, 특정 조건 충족 시',
        notes: [
          '임플란트 치료시 상당한 본인부담금이 발생합니다.',
          '의료기관에서 구강검사를 받은 후 신청 가능합니다.',
          '임플란트 지원을 위해 국민건강보험공단에 먼저 상담을 진행하시길 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 6,
      title: '틀니 비용 지원',
      subtitle: '틀니가 필요한 어르신이라면, 틀니 제작비 지원을 신청하세요.',
      description: '[국민건강보험]에서 어르신의 구강 건강을 위해 틀니 제작비를 지원합니다.',
      icon: '🦷',
      color: 'indigo',
      details: {
        support: '틀니 제작비 연 30만원 지원',
        qualification: '만 65세 이상, 틀니 제작이 필요한 경우',
        notes: [
          '틀니 제작시 본인부담금이 발생할 수 있습니다.',
          '의료기관에서 구강검사를 받은 후 신청 가능합니다.',
          '틀니 제작비 지원을 위해 국민건강보험공단에 먼저 상담을 진행하시길 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 7,
      title: '인공관절 수술비 지원',
      subtitle: '관절 통증이 심한 어르신이라면, 인공관절 수술비 지원을 신청하세요.',
      description: '[국민건강보험]에서 어르신의 관절 건강을 위해 인공관절 수술을 지원합니다.',
      icon: '🦴',
      color: 'red',
      details: {
        support: '인공관절 수술비 일부 지원',
        qualification: '만 65세 이상, 특정 관절 질환 진단 시',
        notes: [
          '인공관절 수술시 상당한 본인부담금이 발생합니다.',
          '의료기관에서 정밀검사를 받은 후 신청 가능합니다.',
          '인공관절 수술비 지원을 위해 국민건강보험공단에 먼저 상담을 진행하시길 권장합니다.'
        ],
        contact: '국민건강보험공단 (1577-1000, 발신자 부담)'
      }
    },
    {
      id: 8,
      title: '노인 개안 수술비 지원',
      subtitle: '눈에 문제가 있으신 어르신이라면, 안검진 및 개안수술비 지원을 신청하세요.',
      description: '[보건복지부]에서 어르신의 눈 건강을 지원합니다.',
      icon: '👁️',
      color: 'yellow',
      details: {
        support: '1안 당 본인 부담 수술비 및 사전 검사비 전액 1회 지원',
        qualification: '백내장, 망막질환, 녹내장 등 안질환 수술이 필요한 어르신 (만 60세 이상)',
        notes: [
          '해당 수술비외 검사비를 제외한 간병비, 입원비 등은 지원되지 않습니다.',
          '기초생활수급자 및 차상위계층 또는 한부모가족지원법에 따른 지원 대상자에게 우선 지원합니다.',
          '노인 개안 수술비 지원금을 받기 위해 가까운 주민센터 또는 보건소에 상담 후 진행을 권장합니다.'
        ],
        contact: '한국실명예방재단 (02-718-110), 보건복지부 (129)'
      }
    },
    {
      id: 9,
      title: '치매 검사비 지원',
      subtitle: '치매가 의심되는 어르신이라면, 치매검진비 지원을 신청하세요.',
      description: '[보건복지부]에서 어르신의 치매 여부를 조기에 발견하여 관리하도록 지원합니다.',
      icon: '🧠',
      color: 'pink',
      details: {
        support: '치매선별검사는 무료 (치매안심센터에서 진행), 진단/감별검사비 무료 (만 65세 이상, 저소득층에 해당)',
        qualification: '조기 치매로 선별검사, 진단/감별검사가 필요한 어르신 (만 60세 이상)',
        notes: [
          '보건소에서 1단계 치매선별검사를 무료로 실시하고, 그 중 인지기능저하 어르신을 대상으로 보건소와 지정, 연계한 거점병원에서 진단검사, 감별검사를 진행합니다.'
        ],
        contact: '보건복지부 (129)'
      }
    },
    {
      id: 10,
      title: '치매 치료비 지원',
      subtitle: '치매 치료가 필요한 어르신이라면, 치매치료관리비 지원을 신청하세요.',
      description: '[보건복지부]에서 어르신의 치매 증상을 초기에 치료함으로 행복한 노후를 지원합니다.',
      icon: '💊',
      color: 'gray',
      details: {
        support: '월 3만원(연 36만원) 상한 내 본인납부 실비 지원',
        qualification: '치매환자로 등록되고, 치매치료약을 복용하는 어르신 (만 60세 이상)',
        notes: [
          '치매진단코드 : F00~03, G30',
          '의료급여 수급권자는 월 3만원(연간 36만원) 한도 내에서 지원됩니다.'
        ],
        contact: '보건복지부 (129)'
      }
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      red: 'bg-red-600 hover:bg-red-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700',
      pink: 'bg-pink-600 hover:bg-pink-700',
      gray: 'bg-gray-600 hover:bg-gray-700'
    };
    return colorMap[color] || 'bg-blue-600 hover:bg-blue-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            어르신 복지 서비스
          </h1>
          <p className="text-gray-600 text-lg">
            어르신복지가 궁금하세요? 확인하기
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hot 10 서비스 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              어르신 복지 추천 Hot 10
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {welfareServices.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className={`${getColorClasses(service.color)} text-white p-4 text-center`}>
                    <div className="text-3xl mb-2">{service.icon}</div>
                                                   <div className="text-sm font-medium">인사랑 {String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-tight">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 상세 정보 모달 */}
          {selectedService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${getColorClasses(selectedService.color)} rounded-lg flex items-center justify-center text-white text-xl`}>
                        {selectedService.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{selectedService.title}</h2>
                        <p className="text-gray-600 text-sm">{selectedService.subtitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">서비스 개요</h3>
                      <p className="text-gray-600">{selectedService.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">지원내용 및 자격요건</h3>
                      <div className="space-y-3">
                        {selectedService.details.support && (
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <strong className="text-blue-900">지원내용:</strong>
                            <p className="text-blue-800 mt-1">{selectedService.details.support}</p>
                          </div>
                        )}
                        {selectedService.details.qualification && (
                          <div className="bg-green-50 p-3 rounded-lg">
                            <strong className="text-green-900">자격요건:</strong>
                            <p className="text-green-800 mt-1">{selectedService.details.qualification}</p>
                          </div>
                        )}
                        {selectedService.details.coverage && (
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <strong className="text-purple-900">지원범위:</strong>
                            <p className="text-purple-800 mt-1">{selectedService.details.coverage}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {selectedService.details.notes && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">숙지사항</h3>
                        <ul className="space-y-2">
                          {selectedService.details.notes.map((note, index) => (
                            <li key={index} className="text-gray-600 text-sm flex items-start">
                              <span className="text-gray-400 mr-2">•</span>
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">문의처</h3>
                      <p className="text-gray-600 font-medium">{selectedService.details.contact}</p>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-gray-200">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        문의처 바로가기
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                        내 인정등급 확인하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              어르신을 위한 복지 서비스를<br />
              더 쉽게 찾아보세요
            </h2>
            <p className="text-blue-100 mb-6">
              인사랑돌봄 앱에서 더 편리하게 복지 서비스를 확인하고 신청할 수 있습니다
            </p>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              앱 다운받고 신청하기
            </button>
          </div>
        </div>
      </div>

      {/* 앱 다운로드 모달 */}
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

export default ElderlyWelfare; 