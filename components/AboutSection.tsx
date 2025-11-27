import React from 'react';
import { INSIGHT_STEPS, INSIGHT_TREND_DATA, INSIGHT_STARTUP_DATA } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-24 pt-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-3">인사이트 & 트렌드</h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          화학 산업의 최신 AI 기술 동향과 우리 연구소가 나아가야 할 방향에 대해<br className="hidden md:block"/>
          수집한 정보들을 공유하는 공간입니다.
        </p>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h3 className="text-xl font-bold text-white mb-8 text-center">신사업 발굴 아이데이션 프로세스</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHT_STEPS.map((step) => (
            <div key={step.id} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Card: Global Trends */}
        <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-lg border border-teal-100 flex flex-col">
          <h3 className="text-2xl font-bold text-[#005e54] mb-4">{INSIGHT_TREND_DATA.title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed flex-1">
            {INSIGHT_TREND_DATA.desc}
          </p>
          
          <ul className="space-y-3 mb-8">
            {INSIGHT_TREND_DATA.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                {item}
              </li>
            ))}
          </ul>

          <button className="w-full py-3 bg-white border border-teal-200 text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
            트렌드 리포트 보기
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Card: Innovation & Startups */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{INSIGHT_STARTUP_DATA.title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {INSIGHT_STARTUP_DATA.desc}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-auto">
            {INSIGHT_STARTUP_DATA.sections.map((section, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 text-center hover:bg-teal-50 transition-colors border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-1">{section.title}</h4>
                <p className="text-xs text-gray-500">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;