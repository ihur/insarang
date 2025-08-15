import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/mockData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: '영양관리', name: '영양관리' },
    { id: '치매예방', name: '치매예방' },
    { id: '운동', name: '운동' },
    { id: '케어가이드', name: '케어가이드' }
  ];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            케어 정보
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            시니어 케어에 대한 전문적인 정보와 유용한 팁을 제공합니다. 
            어르신의 건강한 삶을 위한 다양한 정보를 확인해보세요.
          </p>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 블로그 목록 */}
      <section className="py-20">
        <div className="container-custom">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* 블로그 이미지 플레이스홀더 */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>

                  {/* 블로그 콘텐츠 */}
                  <div className="p-6">
                    {/* 카테고리 및 메타 정보 */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {blog.readTime}
                      </div>
                    </div>

                    {/* 제목 */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* 요약 */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 작성자 및 날짜 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary-600 font-semibold text-sm">
                            {blog.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                          <p className="text-xs text-gray-500">{formatDate(blog.date)}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${blog.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        자세히 보기 →
                      </Link>
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
                해당 카테고리의 글이 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 카테고리를 선택하거나 전체 글을 확인해보세요
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-primary"
              >
                전체 글 보기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            더 많은 케어 정보가 필요하신가요?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            전문 상담사에게 직접 문의하여 어르신에게 맞는 
            케어 방법에 대해 상담받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              상담 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="btn-secondary text-lg px-8 py-4"
            >
              전화 상담하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 