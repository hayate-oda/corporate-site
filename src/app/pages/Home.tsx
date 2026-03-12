import { Link } from 'react-router';
import { ArrowRight, Target, Compass, Globe, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFCD35] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCD35] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-[#FFCD35]/20 border border-[#FFCD35] rounded-full text-[#FFCD35] mb-6">
              知性ある遊び人
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              あなたの心を踊らせ、<br />
              「やりたい」が「やる」に変わる瞬間を。
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              思想が形になり、誰かのワクワクを生み出す世界を創る。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/zero-to-one"
                className="px-8 py-4 bg-[#FFCD35] text-[#001E36] font-semibold rounded-lg hover:bg-[#FFCD35]/90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/philosophy"
                className="px-8 py-4 border-2 border-[#FFCD35] text-[#FFCD35] font-semibold rounded-lg hover:bg-[#FFCD35]/10 transition-all"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Identity Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Our Core Identity
            </h2>
            <div className="w-24 h-1 bg-[#FFCD35] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFCD35] hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">MISSION</h3>
              <p className="text-gray-700 leading-relaxed">
                思想が形になり、誰かのワクワクを生み出す世界を創る。
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFCD35] hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">VISION</h3>
              <p className="text-gray-700 leading-relaxed">
                多様な価値が繋がる世界へ
              </p>
            </div>

            {/* Core Value */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFCD35] hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">CORE VALUE</h3>
              <p className="text-gray-700 leading-relaxed">
                「責任ある自由」と「思想と面白さの体現」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guild-type integration of thought & action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 0→1 Development */}
            <Link
              to="/services/zero-to-one"
              className="group bg-gradient-to-br from-[#001E36] to-[#003050] p-8 rounded-2xl text-white hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-[#FFCD35] rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Sparkles className="w-6 h-6 text-[#001E36]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">0→1 Development</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                新規事業創出支援。アイデアから実現まで、思想を形にする伴走型支援。
              </p>
              <div className="flex items-center text-[#FFCD35] group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            {/* Fractional COO */}
            <Link
              to="/services/fractional-coo"
              className="group bg-gradient-to-br from-[#001E36] to-[#003050] p-8 rounded-2xl text-white hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-[#FFCD35] rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Target className="w-6 h-6 text-[#001E36]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fractional COO</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                経営参謀サービス。戦略立案から実行までを統合的にサポート。
              </p>
              <div className="flex items-center text-[#FFCD35] group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            {/* Global Expansion */}
            <Link
              to="/services/global-expansion"
              className="group bg-gradient-to-br from-[#001E36] to-[#003050] p-8 rounded-2xl text-white hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-[#FFCD35] rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Globe className="w-6 h-6 text-[#001E36]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Expansion</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                グローバル展開支援。多様な市場への参入戦略と実行支援。
              </p>
              <div className="flex items-center text-[#FFCD35] group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-24 bg-[#001E36] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            個性とは好き勝手することではなく、<br />
            <span className="text-[#FFCD35]">思想に基づいた洗練された創造である。</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            私たちの行動指針（憲章）は、すべての活動の根幹をなしています。
          </p>
          <Link
            to="/philosophy"
            className="inline-flex items-center px-8 py-4 bg-[#FFCD35] text-[#001E36] font-semibold rounded-lg hover:bg-[#FFCD35]/90 transition-all transform hover:scale-105"
          >
            <span>Discover Our Philosophy</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6">
            あなたのビジョンを<br />
            現実に変えませんか？
          </h2>
          <p className="text-xl text-[#001E36]/80 mb-8">
            一緒に、特別な何かを創り上げましょう。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#001E36] text-white font-semibold rounded-lg hover:bg-[#002847] transition-all transform hover:scale-105"
          >
            <span>お問い合わせ</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}