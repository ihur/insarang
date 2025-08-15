import { useState } from 'react';
import { Link } from 'react-router-dom';

const ChooseEquipment = () => {
  const [showModal, setShowModal] = useState(false);

  const faqItems = [
    {
      question: '복지용구 지원 대상자는 누구인가요?',
      answer: '노인장기요양인정등급 1~5등급 및 인지지원등급을 받은 어르신이 대상입니다.'
    },
    {
      question: '복지용구 지원 한도는 얼마인가요?',
      answer: '연 160만원 한도 내에서 지원받을 수 있습니다.'
    },
    {
      question: '본인부담금은 얼마인가요?',
      answer: '소득수준에 따라 6~15%의 본인부담금이 발생합니다. 기초생활수급자는 전액 지원됩니다.'
    },
    {
      question: '복지용구는 어디서 구매할 수 있나요?',
      answer: '국민건강보험공단에서 지정한 복지용구업체에서 구매할 수 있습니다.'
    },
    {
      question: '복지용구 신청 절차는 어떻게 되나요?',
      answer: '1. 장기요양인정 신청 → 2. 등급 판정 → 3. 복지용구 신청 → 4. 구매 및 설치 순서로 진행됩니다.'
    },
    {
      question: '복지용구는 언제까지 사용할 수 있나요?',
      answer: '복지용구의 종류에 따라 사용기간이 다릅니다. 일반적으로 3~5년 사용 후 교체가 필요합니다.'
    }
  ];

  const selectionMethods = [
    {
      id: 1,
      title: '어르신 상태 파악하기',
      description: '어르신의 신체적, 인지적 상태를 정확히 파악하여 필요한 복지용구를 선별합니다.',
      icon: '👴',
      steps: [
        '일상생활 동작 능력 평가',
        '보행 및 이동 능력 확인',
        '인지 기능 상태 점검',
        '가족의 돌봄 능력 고려'
      ]
    },
    {
      id: 2,
      title: '생활환경 분석하기',
      description: '어르신이 생활하는 공간의 구조와 환경을 분석하여 적합한 복지용구를 선택합니다.',
      icon: '🏠',
      steps: [
        '거주 공간의 크기와 구조 파악',
        '문과 복도의 폭 측정',
        '욕실과 화장실 구조 확인',
        '계단과 경사로 상태 점검'
      ]
    },
    {
      id: 3,
      title: '복지용구 종류 비교하기',
      description: '동일한 기능의 복지용구 중에서 어르신에게 가장 적합한 제품을 선택합니다.',
      icon: '🦼',
      steps: [
        '기능과 성능 비교',
        '안전성과 내구성 확인',
        '사용 편의성 평가',
        '가격과 품질 검토'
      ]
    },
    {
      id: 4,
      title: '전문가 상담 받기',
      description: '복지용구 전문가의 상담을 받아 최적의 선택을 도움받습니다.',
      icon: '👨‍⚕️',
      steps: [
        '복지용구업체 방문',
        '전문가 상담 및 평가',
        '시연 및 체험',
        '맞춤형 제품 추천'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: '연 160만원 지원',
      description: '거동, 생활 보조 용품 구매비 지원'
    },
    {
      icon: '📋',
      title: '인정등급 대상자',
      description: '1~5등급, 인지지원등급 누구나 동일'
    },
    {
      icon: '🏥',
      title: '6~15% 본인부담',
      description: '기초생활수급자는 전액 지원'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            똑똑하게 복지용구 선택하기<br />
            복지용구, 어떻게 합리적으로 선택할까요?
          </h1>
          <p className="text-gray-600 text-lg">
            합리적이고 효율적인 복지용구 선택 방법을 알려드립니다
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-6xl mx-auto">
          {/* 혜택 안내 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                <strong>복지용구는</strong><br />
                <strong>노인장기요양보험</strong><br />
                <strong>혜택 적용</strong>이 가능해요.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/90 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="bg-white/20 rounded-lg p-6 max-w-2xl mx-auto mb-6">
                <h3 className="text-xl font-bold mb-2">
                  <strong>연 160만원 한도액은</strong><br />
                  인정등급 대상자라면<br />
                  <strong>누구나 동일</strong>
                </h3>
              </div>
              <p className="text-white/90 mb-4">
                예상 인정등급이 궁금하시면 지금 바로 해보세요!
              </p>
              <Link
                to="/grade-test"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                내 인정등급 확인하기
              </Link>
            </div>
          </div>

          {/* 주의사항 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                단, <strong>100%</strong> 지원되지 않아요
              </h2>
              <p className="text-yellow-800 text-lg">
                <strong>본인부담금</strong>과 <strong>본인부담율</strong>을 꼭 확인하세요.
              </p>
            </div>
          </div>

          {/* 복지용구 선택 방법 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              복지용구 선택 방법
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectionMethods.map((method) => (
                <div key={method.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-4xl">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {method.id}. {method.title}
                      </h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {method.steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <p className="text-gray-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ 섹션 */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              복지용구 FAQ
            </h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Q. {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      A. {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 선택 가이드 */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                복지용구 선택이 어려우시다면?
              </h2>
              <p className="text-green-100 mb-6">
                전문가의 상담을 받아 어르신에게 가장 적합한 복지용구를 선택하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/welfare-consultation"
                  className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                >
                  복지용구 상담받기
                </Link>
                <Link
                  to="/welfare-equipment"
                  className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-400 transition-colors duration-200 text-lg"
                >
                  복지용구 알아보기
                </Link>
              </div>
            </div>
          </div>

          {/* 중요 안내사항 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">중요 안내사항</h3>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>복지용구는 국민건강보험공단에서 지정한 업체에서만 구매 가능합니다.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>복지용구 구매 전 반드시 전문가 상담을 받으시기 바랍니다.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>복지용구 사용 중 문제가 발생하면 즉시 업체에 연락하세요.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <p>복지용구 교체 시점을 정기적으로 확인하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseEquipment; 