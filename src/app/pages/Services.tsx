import { Link } from 'react-router';
import { ArrowRight, Sparkles, Target, Globe, CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Service
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              思想と実行を統合し、あなたのビジョンを現実へと変える
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              3つのコアサービス
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              STUDIO SEALINKは、「知性ある遊び人」として、
              深い思想と遊び心のある実行力を融合させた3つのサービスを提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* 0→1 Development */}
            <Link
              to="/services/zero-to-one"
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#FFCD35] hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#001E36] to-[#003050] p-8 text-white">
                <div className="w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Sparkles className="w-8 h-8 text-[#001E36]" />
                </div>
                <h3 className="text-3xl font-bold mb-3">0→1 Development</h3>
                <p className="text-gray-300 mb-4">新規事業創出支援</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  「やりたい」を「やる」に変える。アイデアから実現まで、
                  思想を形にする伴走型支援で、新規事業創出を成功に導きます。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>思想定義 & ビジョン設計</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>MVP開発 & 市場検証</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>PMF達成までの伴走支援</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#FFCD35] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>詳しく見る</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Link>

            {/* Fractional COO */}
            <Link
              to="/services/fractional-coo"
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#FFCD35] hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#001E36] to-[#003050] p-8 text-white">
                <div className="w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Target className="w-8 h-8 text-[#001E36]" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Fractional COO</h3>
                <p className="text-gray-300 mb-4">経営参謀サービス</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  戦略立案から実行までを統合的にサポート。
                  必要な時に必要なだけの経営レベルの専門性を提供します。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>戦略策定 & 実行支援</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>オペレーション最適化</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>組織体制構築サポート</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#FFCD35] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>詳しく見る</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Link>

            {/* Global Expansion */}
            <Link
              to="/services/global-expansion"
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#FFCD35] hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#001E36] to-[#003050] p-8 text-white">
                <div className="w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Globe className="w-8 h-8 text-[#001E36]" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Global Expansion</h3>
                <p className="text-gray-300 mb-4">グローバル展開支援</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  多様な価値が繋がる世界へ。グローバル市場への参入戦略と実行支援で、
                  世界に新しい価値を届けます。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>市場調査 & 参入戦略策定</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>現地パートナーシップ構築</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                    <span>ローカライゼーション支援</span>
                  </li>
                </ul>
                <div className="flex items-center text-[#FFCD35] font-semibold group-hover:translate-x-2 transition-transform">
                  <span>詳しく見る</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              The STUDIO SEALINK Way
            </h2>
            <p className="text-xl text-gray-600">
              私たちが選ばれる理由
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                思想と実行の統合
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                戦略立案と実行支援を分けず、思想を形にするまで伴走します
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                ギルド型協働
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                対等なパートナーとして、それぞれの専門性を尊重して協力
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                知性ある遊び人
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                知的で戦略的でありながら、遊び心と創造性を大切に
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#FFCD35]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#FFCD35]" />
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                責任ある自由
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                思想に基づいた、責任ある創造活動を追求します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              共通アプローチ
            </h2>
            <p className="text-xl text-gray-600">
              すべてのサービスで共有される基本プロセス
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6 text-[#001E36] font-bold text-3xl">
                01
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">理解</h3>
              <p className="text-gray-600 leading-relaxed">
                あなたのビジョン、課題、思想を深く理解する
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6 text-[#001E36] font-bold text-3xl">
                02
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">設計</h3>
              <p className="text-gray-600 leading-relaxed">
                思想に基づいた戦略とロードマップを策定
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6 text-[#001E36] font-bold text-3xl">
                03
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">実行</h3>
              <p className="text-gray-600 leading-relaxed">
                一緒に走りながら、形にしていく
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6 text-[#001E36] font-bold text-3xl">
                04
              </div>
              <h3 className="text-xl font-bold text-[#001E36] mb-3">成長</h3>
              <p className="text-gray-600 leading-relaxed">
                継続的な改善と次のステージへ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6">
            どのサービスが最適か、<br />
            ご相談ください
          </h2>
          <p className="text-xl text-[#001E36]/80 mb-8">
            無料相談で、あなたに最適なソリューションをご提案します
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#001E36] text-white font-semibold rounded-lg hover:bg-[#002847] transition-all transform hover:scale-105"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}