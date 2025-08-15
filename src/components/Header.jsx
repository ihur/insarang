import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const location = useLocation();

  // 디버깅용 콘솔 로그
  useEffect(() => {
    console.log('Mobile menu state:', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: '인사랑돌봄 서비스', 
      path: '/services',
      submenu: [
        { name: '인사랑돌봄', path: '/services' },
        { name: '인정등급 예상 테스트', path: '/grade-test' },
        { name: '관심 복지용구 상담', path: '/welfare-consultation' },
        { name: '어르신 복지 서비스', path: '/elderly-welfare' }
      ]
    },
    { 
      name: '요양시설찾기', 
      path: '/facilities',
      submenu: [
        { name: '요양시설찾기', path: '/facilities' }
      ]
    },
    { 
      name: '시니어길잡이', 
      path: '/guide',
      submenu: [
        { name: '노인장기요양보험제도', path: '/insurance-system' },
        { name: '복지용구 알아보기', path: '/welfare-equipment' },
        { name: '복지용구 선택하기', path: '/choose-equipment' }
      ]
    },
    { 
      name: '인사랑 정보', 
      path: '/about',
      submenu: [
        { name: '오늘의 복지', path: '/today-welfare' },
        { name: '오늘의 건강', path: '/today-health' },
        { name: '오늘의 제품', path: '/today-products' },
        { name: '오늘의 휴식', path: '/today-rest' },
        { name: '브랜드 인사랑', path: '/brand' },
        { name: '인사랑 뉴스', path: '/news' }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 로고 */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">인</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              인사랑돌봄
            </span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.path}
                  className={`text-xl font-medium transition-colors duration-200 pb-6 ${
                    location.pathname === item.path || hoveredMenu === item.name
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* 드롭다운 메뉴 */}
                {hoveredMenu === item.name && item.submenu && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 rounded-lg py-4 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA 버튼 */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://insarangmall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-xl"
            >
              인사랑몰
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-300"
            onClick={() => {
              console.log('Button clicked! Current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="메뉴 열기/닫기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      console.log('Menu item clicked:', item.name);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => {
                            console.log('Submenu item clicked:', subItem.name);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          • {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <a
                  href="https://insarangmall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 w-full text-center block"
                  onClick={() => {
                    console.log('Insarangmall button clicked');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  인사랑몰
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 