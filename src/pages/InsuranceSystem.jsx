import { useState } from 'react';
import { Link } from 'react-router-dom';

const InsuranceSystem = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const applicationSteps = [
    {
      step: 1,
      title: '신청 서류 준비',
      description: '본인과 대리인 모두 신청가능해요.',
      details: [
        '어르신 신분증',
        '장기요양인정신청서',
        '대리인 신분증과 대리인 지정서 (대리인이 신청할 때)'
      ],
      note: '자세한 서류 상담은 국민건강보험공단에서 가능해요. (1577-1000 발신자 부담)',
      important: '신청 전, 치매 검사 이력 또는 병원 진료 이력이 있어야 해요.'
    },
    {
      step: 2,
      title: '등급 인정 신청',
      description: '인정 등급 신청까지 한 번에 하실 수 있어요!',
      details: [
        '국민건강보험 홈페이지 또는 모바일 앱 (The 건강보험) 신청',
        '국민건강보험공단 지사 방문, 우편, 팩스 신청'
      ],
      note: '여기를 눌러 예상등급을 확인해보세요.'
    },
    {
      step: 3,
      title: '어르신 건강 상태 심사',
      description: '담당 심사 직원이 가정에 방문해요.',
      details: [
        '어르신의 일상생활과 심신상태를 관찰하고',
        '어느 정도의 도움이 필요하신지 심사해요.'
      ],
      note: '병력, 병원 진료 이력이 있다면 심사에 반영돼요.'
    },
    {
      step: 4,
      title: '의사 소견서 제출',
      description: '국민건강보험공단 지정 병원에서 발급받아요.',
      details: [
        '정확한 소견을 위해 어르신과 함께 방문해주세요.'
      ],
      note: '어르신 상태에 따라 제출이 생략될 수도 있어요.',
      additional: '인근 지정 병원은 여기를 눌러 확인하실 수 있어요.'
    },
    {
      step: 5,
      title: '신청 결과 확인',
      description: '신청 결과는 30일 이내 국민건강보험공단으로부터 안내 받으실 거예요.',
      details: [
        '인정서를 포함한 관련 서류도 보내드려요.'
      ]
    },
    {
      step: 6,
      title: '장기요양보험 이용',
      description: '등급에 따른 지원 혜택을 누리실 수 있어요.',
      details: [
        '장기요양기관을 선택하신 후, 혜택 이용이 가능해요.',
        '기관과 계약을 체결하고, 자세한 상담을 받아보세요.'
      ]
    }
  ];

  const benefits = [
    {
      id: 'home',
      title: '방문 요양보호사를 요청할 수 있어요',
      tag: '재가급여',
      description: '목욕, 간호, 요양서비스를 제공받아요. 필요에 따라 희망 시간대에 보호해 드리는 서비스도 있어요.',
      icon: '🏠'
    },
    {
      id: 'facility',
      title: '어르신을 시설에 모실 수 있어요',
      tag: '시설급여',
      description: '요양 전문 시설 또는 소수 어르신이 생활하는 공동생활 가정에 모실 수 있어요.',
      icon: '🏥'
    },
    {
      id: 'cash',
      title: '요양 비용을 지원받을 수 있어요',
      tag: '특별현금급여',
      description: '가족이나 친족이 직접 돌보시는 경우 일정 금액을 지원해 드려요.',
      icon: '💰'
    },
    {
      id: 'equipment',
      title: '거동, 생활에 도움 되는 용품을 지원받아요',
      tag: '복지용구',
      description: '어르신의 편안한 거동과 일상생활을 돕는 용품을 구매, 대여할 수 있어요.',
      icon: '🦼'
    }
  ];

  const grades = [
    {
      grade: '1등급',
      description: '일상생활 중, 인지, 신체적으로 심각한 도움이 필요해요.',
      services: [
        '월 280만원 내에서 방문 요양보호사 또는 주야간센터를 이용할 수 있어요.',
        '연 160만원 내에서 거동, 생활 보조 용품(복지용구)을 신청할 수 있어요.'
      ],
      notes: [
        '6~15%의 본인부담금이 발생해요.',
        '1~2등급 어르신은 요양보호사 방문 대신 시설 입소를 선택할 수 있어요.',
        '시설에 모시는 어르신은 복지용구를 신청할 수 없어요.'
      ]
    },
    {
      grade: '2등급',
      description: '일상생활 중, 인지, 신체적으로 상당한 도움이 필요해요.',
      services: [
        '월 280만원 내에서 방문 요양보호사 또는 주야간센터를 이용할 수 있어요.',
        '연 160만원 내에서 거동, 생활 보조 용품(복지용구)을 신청할 수 있어요.'
      ],
      notes: [
        '6~15%의 본인부담금이 발생해요.',
        '1~2등급 어르신은 요양보호사 방문 대신 시설 입소를 선택할 수 있어요.',
        '시설에 모시는 어르신은 복지용구를 신청할 수 없어요.'
      ]
    },
    {
      grade: '3등급',
      description: '일상생활 중, 인지, 신체적으로 부분적 도움이 필요해요.',
      services: [
        '월 148만원 내에서 방문 요양보호사 또는 주야간센터를 이용할 수 있어요.',
        '연 160만원 내에서 거동, 생활 보조 용품(복지용구)을 신청할 수 있어요.'
      ],
      notes: [
        '6~15%의 본인부담금이 발생해요.',
        '3~4등급 어르신도 조건에 부합하면, 방문 요양보호사 요청 대신 시설에 모실 수 있어요.',
        '시설에 모시는 어르신은 복지용구를 신청할 수 없어요.'
      ]
    },
    {
      grade: '4등급',
      description: '일상생활 중, 인지, 신체적으로 다소 도움이 필요해요.',
      services: [
        '월 137만원 내에서 방문 요양보호사 또는 주야간센터를 이용할 수 있어요.',
        '연 160만원 내에서 거동, 생활 보조 용품(복지용구)을 신청할 수 있어요.'
      ],
      notes: [
        '6~15%의 본인부담금이 발생해요.',
        '3~4등급 어르신도 조건에 부합하면, 방문 요양보호사 요청 대신 시설에 모실 수 있어요.',
        '시설에 모시는 어르신은 복지용구를 신청할 수 없어요.'
      ]
    },
    {
      grade: '5등급',
      description: '신체 건강은 양호하지만, 중증 치매 증세가 있어요.',
      services: [
        '월 117만원 내에서 방문 요양보호사 또는 주야간센터를 이용할 수 있어요.',
        '연 160만원 내에서 거동, 생활 보조 용품(복지용구)을 신청할 수 있어요.'
      ],
      notes: [
        '6~15%의 본인부담금이 발생해요.',
        '5등급 어르신도 조건에 부합하면, 방문 요양보호사 요청 대신 시설에 모실 수 있어요.',
        '시설에 모시는 어르신은 복지용구를 신청할 수 없어요.'
      ]
    },
    {
      grade: '인지지원등급',
      description: '신체 건강은 양호하지만, 경미한 치매 증세가 있어요.',
      services: [
        '월 65만원 내에서 주야간센터를 이용할 수 있어요.',
        '연 160만원 내에서 거동, 생활 보조 용품(복지용구)을 신청할 수 있어요.'
      ],
      notes: [
        '6~15%의 본인부담금이 발생해요.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            신청방법부터 등급별 혜택까지<br />
            어르신 요양, 혼자 고민하지 마세요!
          </h1>
          <p className="text-gray-600 text-lg">
            모두에게 인사랑, <strong>노인장기요양보험</strong>
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-6xl mx-auto">
          {/* 소개 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                100만명이 혜택을 누리는<br />
                '노인장기요양보험' 알고 계셨나요?
              </h2>
              <div className="bg-white/20 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg mb-4">
                  국가에서 지원하는 착한 제도로,<br />
                  <strong>65세 이상</strong> 또는 <strong>노인성 질병</strong>을 앓는<br />
                  65세 미만 어르신이 지원받으실 수 있어요
                </p>
                <p className="text-sm opacity-90">
                  ※ 노인성 질병이란? 이곳을 클릭해 알아보세요!
                </p>
              </div>
            </div>
          </div>

          {/* 신청 절차 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              노인장기요양보험 신청 절차,<br />
              생각보다 간단해요
            </h2>
            <p className="text-center text-gray-600 mb-8">
              <strong>버튼</strong>을 눌러 <strong>단계별 절차</strong>를 확인하세요.
            </p>

            {/* 단계 탭 */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {applicationSteps.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentStep === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {step.step}단계
                </button>
              ))}
            </div>

            {/* 단계별 상세 내용 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                  {applicationSteps[currentStep].step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {applicationSteps[currentStep].title}
                </h3>
                <p className="text-gray-600">{applicationSteps[currentStep].description}</p>
              </div>

              <div className="space-y-4">
                {applicationSteps[currentStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}

                {applicationSteps[currentStep].note && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">{applicationSteps[currentStep].note}</p>
                  </div>
                )}

                {applicationSteps[currentStep].important && (
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800 text-sm font-medium">{applicationSteps[currentStep].important}</p>
                  </div>
                )}

                {applicationSteps[currentStep].additional && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">{applicationSteps[currentStep].additional}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 혜택 안내 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              대상자는 어떤 혜택을 받을 수 있나요?<br />
              쉽게 설명해 드릴게요
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                          {benefit.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 주의사항 */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">중요한 안내사항</h3>
              <div className="space-y-2">
                <p className="text-yellow-800 text-sm">
                  • 중복 수급이 불가하고, 유형별 지원금액이 달라요
                </p>
                <p className="text-yellow-800 text-sm">
                  • 15%~6%의 본인부담금이 있어요 (기초생활수급자는 전액 지원돼요)
                </p>
              </div>
            </div>
          </div>

          {/* 등급별 혜택 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              등급별 지원 혜택
            </h2>

            <div className="space-y-6">
              {grades.map((grade) => (
                <div key={grade.grade} className="bg-white rounded-lg shadow-md p-6">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      노인장기요양인정 {grade.grade}
                    </h3>
                    <p className="text-gray-600 mt-2">{grade.description}</p>
                  </div>

                  <div className="space-y-4">
                    {grade.services.map((service, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-medium">{service}</p>
                      </div>
                    ))}

                    <div className="space-y-2">
                      {grade.notes.map((note, index) => (
                        <p key={index} className="text-gray-600 text-sm flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              예상 인정등급을 확인해 보세요!
            </h2>
            <Link
              to="/grade-test"
              className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              지금 등급 확인하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceSystem; 