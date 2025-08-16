import { Link } from 'react-router-dom';
import { companyData } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">인</span>
              </div>
              <span className="text-xl font-bold">인사랑돌봄</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              어르신들의 건강한 삶을 위한 최고의 파트너. 30년간 축적된 노하우로 
              전문적이고 따뜻한 케어 서비스를 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a
                href={companyData.socialMedia.facebook}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={companyData.socialMedia.instagram}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>
              <a
                href={companyData.socialMedia.youtube}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  방문 케어
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  주야간 보호
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  재활 케어
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  치매 케어
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  응급 케어
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">{companyData.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">상담전화: {companyData.phone}</p>
                  <p className="text-gray-300 text-sm">대표전화: {companyData.phoneSecondary}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300 text-sm">{companyData.email}</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFE812" d="M2500,0v2500H0V0H2500z"/>
                  <path fill="#000000" d="M1250,351.6c-560.9,0-1015.6,358.5-1015.6,800.8c0,285.9,190.1,536.8,476.1,678.5c-15.6,53.7-100,345.2-103.3,368.1
                    c0,0-2,17.2,9.1,23.8c11.1,6.6,24.2,1.5,24.2,1.5c32-4.5,370.5-242.3,429.1-283.6c58.5,8.3,118.8,12.6,180.4,12.6
                    c560.9,0,1015.6-358.5,1015.6-800.8C2265.6,710.1,1810.9,351.6,1250,351.6L1250,351.6z"/>
                  <path fill="#FFE812" d="M688.5,1431.9c-32.3,0-58.6-25.1-58.6-56v-348.1h-91.4c-31.7,0-57.5-25.7-57.5-57.4s25.8-57.4,57.5-57.4h300
                    c31.7,0,57.5,25.7,57.5,57.4s-25.8,57.4-57.5,57.4h-91.4v348.1C747.1,1406.8,720.8,1431.9,688.5,1431.9z M1202.3,1431.1
                    c-24.4,0-43.1-9.9-48.8-25.9l-29-76l-178.7,0l-29,76c-5.6,15.9-24.3,25.8-48.7,25.8c-12.9,0-25.6-2.7-37.2-8.1
                    c-16.2-7.5-31.7-27.9-13.9-83.2l140.2-368.9c9.9-28.1,39.9-57,78-57.8c38.3,0.9,68.3,29.8,78.2,57.9l140.1,368.7
                    c17.8,55.4,2.3,75.9-13.8,83.3C1227.8,1428.4,1215.1,1431.1,1202.3,1431.1C1202.3,1431.1,1202.3,1431.1,1202.3,1431.1L1202.3,1431.1
                    z M1093.7,1225.5l-58.5-166.3l-58.5,166.3H1093.7L1093.7,1225.5z M1347.7,1423.3c-31,0-56.2-24.1-56.2-53.7V971.7
                    c0-32.3,26.8-58.6,59.8-58.6s59.8,26.3,59.8,58.6v344.2h124.5c31,0,56.2,24.1,56.2,53.7s-25.2,53.7-56.2,53.7H1347.7z
                     M1673.2,1431.1c-32.3,0-58.6-26.3-58.6-58.6V971.7c0-32.3,26.3-58.6,58.6-58.6s58.6,26.3,58.6,58.6v125.9l163.5-163.5
                    c8.4-8.4,20-13,32.5-13c14.6,0,29.3,6.3,40.3,17.3c10.3,10.3,16.4,23.4,17.2,37.1c0.8,13.8-3.8,26.5-12.9,35.7l-133.5,133.5
                    l144.2,191.1c9.4,12.4,13.5,28,11.2,43.4c-2.1,15.4-10.3,29.3-22.7,38.6c-10.1,7.7-22.5,11.9-35.2,11.8
                    c-18.4,0.1-35.8-8.6-46.8-23.3l-137.4-182.1l-20.3,20.3v127.8C1731.8,1404.9,1705.5,1431.1,1673.2,1431.1L1673.2,1431.1z"/>
                </svg>
                <p className="text-gray-300 text-sm">카카오톡: {companyData.kakaoTalk}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} {companyData.name}. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                고객센터
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 