import { useState } from 'react';
import { Link } from 'react-router-dom';

const GradeTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showLoginModal, setShowLoginModal] = useState(false);

  const testSteps = [
    {
      id: 'physical',
      title: '신체기능',
      description: '어르신의 신체 기능 상태를 확인합니다',
      questions: [
        '일상생활에서 혼자서 옷을 입고 벗을 수 있나요?',
        '화장실을 혼자서 이용할 수 있나요?',
        '목욕을 혼자서 할 수 있나요?',
        '식사를 혼자서 할 수 있나요?',
        '침대에서 일어나거나 앉을 수 있나요?',
        '실내에서 혼자서 걸을 수 있나요?',
        '계단을 오르내릴 수 있나요?',
        '외출할 때 혼자서 걸을 수 있나요?',
        '대소변을 스스로 조절할 수 있나요?',
        '약을 혼자서 먹을 수 있나요?',
        '전화를 혼자서 걸 수 있나요?',
        '가벼운 집안일을 할 수 있나요?'
      ]
    },
    {
      id: 'cognitive',
      title: '인지기능',
      description: '어르신의 기억력과 판단력을 확인합니다',
      questions: [
        '현재 날짜와 시간을 알 수 있나요?',
        '자신의 이름과 나이를 기억하나요?',
        '가족이나 친구를 알아볼 수 있나요?',
        '일상적인 대화가 가능한가요?',
        '간단한 계산을 할 수 있나요?',
        '새로운 것을 배우거나 기억할 수 있나요?',
        '위험한 상황을 인식할 수 있나요?'
      ]
    },
    {
      id: 'behavior',
      title: '행동변화',
      description: '어르신의 행동 변화를 확인합니다',
      questions: [
        '갑자기 화를 내거나 짜증을 내나요?',
        '밤에 잠을 잘 자지 못하나요?',
        '음식을 거부하거나 식욕이 없나요?',
        '갑자기 울거나 웃나요?',
        '의심이 많아지거나 불안해하나요?',
        '집을 나가려고 하거나 길을 잃나요?',
        '반복적인 행동을 하나요?',
        '다른 사람에게 폭력을 행사하나요?',
        '부적절한 행동을 하나요?',
        '의사소통이 어려워졌나요?',
        '사회적 활동에 관심이 없어졌나요?',
        '개인위생에 신경 쓰지 않나요?',
        '의복을 부적절하게 입나요?',
        '음식을 제대로 씹지 못하나요?'
      ]
    },
    {
      id: 'nursing',
      title: '간호처치',
      description: '어르신이 받고 있는 간호나 처치를 확인합니다',
      questions: [
        '인공호흡기를 사용하나요?',
        '산소요법을 받고 있나요?',
        '관류식이나 비위관 영양을 받고 있나요?',
        '도뇨관을 사용하나요?',
        '장루를 사용하나요?',
        '인슐린 주사를 맞나요?',
        '혈압을 자주 측정하나요?',
        '혈당을 자주 측정하나요?',
        '기타 특별한 처치를 받고 있나요?'
      ]
    },
    {
      id: 'rehabilitation',
      title: '재활',
      description: '어르신의 재활 상태를 확인합니다',
      questions: [
        '물리치료를 받고 있나요?',
        '작업치료를 받고 있나요?',
        '언어치료를 받고 있나요?',
        '인지재활치료를 받고 있나요?',
        '보행훈련을 받고 있나요?',
        '일상생활동작 훈련을 받고 있나요?',
        '호흡재활을 받고 있나요?',
        '심장재활을 받고 있나요?',
        '기타 재활치료를 받고 있나요?',
        '재활치료가 필요한 상태인가요?'
      ]
    }
  ];

  const handleAnswer = (questionIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentStep]: {
        ...prev[currentStep],
        [questionIndex]: answer
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < testSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // 테스트 완료
      console.log('Test completed:', answers);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = testSteps[currentStep];
  const currentAnswers = answers[currentStep] || {};

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            노인장기요양보험 인정등급 예상 테스트
          </h1>
          <p className="text-gray-600 text-lg">
            테스트로 받을 수 있는 혜택 확인하고<br />
            <strong>인사랑돌봄 앱에서</strong> 장기요양 <strong>인정등급 신청하세요</strong>
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* 진행률 표시 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {currentStepData.title} ({currentStep + 1}/{testSteps.length})
              </h2>
              <div className="text-sm text-gray-600">
                약 5분 소요
              </div>
            </div>
            
            {/* 진행바 */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / testSteps.length) * 100}%` }}
              ></div>
            </div>
            
            <p className="text-gray-600">{currentStepData.description}</p>
          </div>

          {/* 테스트 질문 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {currentStepData.questions.map((question, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {index + 1}. {question}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['매우 잘함', '잘함', '보통', '어려움', '매우 어려움'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(index, option)}
                        className={`p-3 rounded-lg border transition-colors duration-200 ${
                          currentAnswers[index] === option
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 네비게이션 버튼 */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                이전
              </button>
              
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                {currentStep === testSteps.length - 1 ? '테스트 완료' : '다음'}
              </button>
            </div>
          </div>

          {/* 혜택 안내 */}
          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              테스트로 받을 수 있는 혜택
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-blue-600 text-2xl mb-2">📊</div>
                <h4 className="font-medium text-gray-900 mb-2">예상 인정등급 확인</h4>
                <p className="text-sm text-gray-600">어르신의 예상 인정등급을 알 수 있어요.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-blue-600 text-2xl mb-2">💰</div>
                <h4 className="font-medium text-gray-900 mb-2">등급별 지원 금액</h4>
                <p className="text-sm text-gray-600">해당 등급에 제공되는 혜택을 알려드려요.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-blue-600 text-2xl mb-2">🦼</div>
                <h4 className="font-medium text-gray-900 mb-2">예상 복지용구</h4>
                <p className="text-sm text-gray-600">선택하신 답변에 맞춰 예상 복지용구를 알려드려요.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-blue-600 text-2xl mb-2">👨‍⚕️</div>
                <h4 className="font-medium text-gray-900 mb-2">전문가 상담</h4>
                <p className="text-sm text-gray-600">무료 전문가 상담으로 등급 신청까지 의뢰 가능해요.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-blue-600 text-2xl mb-2">📄</div>
                <h4 className="font-medium text-gray-900 mb-2">결과지 제공</h4>
                <p className="text-sm text-gray-600">분석된 결과를 저장, 출력하거나 가족에게 공유할 수 있어요.</p>
              </div>
            </div>
          </div>

          {/* 주의사항 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <div className="flex items-start">
              <div className="text-yellow-600 text-xl mr-3">⚠️</div>
              <div>
                <h3 className="font-medium text-yellow-900 mb-2">주의사항</h3>
                <p className="text-yellow-800 text-sm">
                  보건복지부에서 고시한 장기 요양 등급 판정 기준을 근거로 만들어진 테스트로, 
                  <strong>실제 등급 판정 결과와 상이할 수 있어요.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 로그인 모달 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">로그인</h3>
            <p className="text-gray-600 mb-6">
              로그인해주세요.<br />
              테스트를 진행하고 인사랑돌봄 앱에서 장기요양 인정등급을 신청하세요.
            </p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                로그인하기
              </button>
              <button 
                onClick={() => setShowLoginModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
              >
                테스트만 진행하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradeTest; 