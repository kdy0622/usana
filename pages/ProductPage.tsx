import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import { PRODUCT_VITAMIN, PRODUCT_SKINCARE, PRODUCT_DIET } from '../images/assets';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nutrition' | 'skincare' | 'diet'>('nutrition');

  const products = {
    nutrition: {
      tabMain: "뉴트리션",
      tabSub: "(영양제)",
      title: "뉴트리션 (영양제)",
      desc: "세계 최고의 기술력, 인셀리전스 테크놀로지가 적용된 종합 비타민과 미네랄. (인셀리전스 : 구글검색 10632101, 수명연장관련조성물 미국특허 취득)",
      img: PRODUCT_VITAMIN,
      items: ["헬스팩: 국가대표 선수들이 섭취하는 종합 영양제", "프로후라바놀C300: 강력한 항산화 포뮬러", "헤파실: 간 건강을 위한 선택"],
      catalogUrl: "https://issuu.com/usanakorea/docs/2025_ver.3"
    },
    skincare: {
      tabMain: "셀라비브",
      tabSub: "(화장품)",
      title: "셀라비브 (화장품)",
      desc: "피부 본연의 힘을 깨우는 유사나의 독점적인 과학 기술이 담긴 스킨케어.",
      img: PRODUCT_SKINCARE,
      items: ["퍼펙팅 토너: 수분 밸런스 유지", "바이탈라이징 세럼: 탄력 있는 피부 관리", "하이드레이팅 아이 에센스: 눈가 피부 관리"],
      catalogUrl: "https://issuu.com/usanakorea/docs/2025_27fcde3a78e679"
    },
    diet: {
      tabMain: "액티브 뉴트리션",
      tabSub: "(다이어트)",
      title: "액티브 뉴트리션 (다이어트)",
      desc: "건강한 체중 조절과 에너지 대사를 돕는 과학적인 다이어트 프로그램.",
      img: PRODUCT_DIET,
      items: ["뉴트리밀: 균형 잡힌 식사 대용 쉐이크", "화이버지 플러스: 장 건강을 위한 식이섬유", "단백질 쉐이크: 근육 건강 지원"],
      catalogUrl: "https://issuu.com/usanakorea/docs/2025_ver.3"
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-bold mb-4"
          >
            세상에서 가장 건강한 가족
          </motion.h1>
          <p className="text-xl text-blue-200">타협하지 않는 품질, 과학에 기반한 제품력</p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Container - Scrollable on very small screens, centered otherwise */}
          <div className="flex justify-center mb-12 overflow-x-auto py-2">
            <div className="flex space-x-2 md:space-x-4 min-w-max px-2">
              {(Object.keys(products) as Array<keyof typeof products>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-primary text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center leading-tight md:space-x-1">
                    <span className="text-sm md:text-base font-bold">{products[key].tabMain}</span>
                    <span className={`text-xs md:text-base ${activeTab === key ? 'text-blue-100' : 'text-gray-500'}`}>
                      {products[key].tabSub}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="h-64 md:h-auto relative"
              >
                <img 
                  src={products[activeTab].img} 
                  alt={products[activeTab].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                   key={`${activeTab}-content`}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-primary mb-4">{products[activeTab].title}</h3>
                  <p className="text-gray-600 text-lg mb-8">{products[activeTab].desc}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {products[activeTab].items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href={products[activeTab].catalogUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">제품 카탈로그 보기</Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionTitle title="믿을 수 있는 품질" subtitle="전 세계 24개국에서 검증받은 안전성" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for Logos */}
            {['FDA 등록 시설', 'NSF 인터내셔널', 'ConsumerLab 인증', 'USP 약전 준수'].map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm h-32">
                <div className="text-primary font-bold text-xl mb-2">CERTIFIED</div>
                <span className="text-sm text-gray-500">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;