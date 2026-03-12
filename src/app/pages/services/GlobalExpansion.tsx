import { Link } from 'react-router';
import { Globe, AlertCircle, CheckCircle, ArrowRight, Map, Users, TrendingUp, ArrowLeft } from 'lucide-react';

export default function GlobalExpansion() {
  return (
    <div className="bg-white">
      {/* Main Visual / Hero */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFCD35] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services"
            className="inline-flex items-center text-[#FFCD35] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>サービス一覧に戻る</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block px-6 py-2 bg-[#FFCD35]/20 border border-[#FFCD35] rounded-full text-[#FFCD35] mb-6">
              Service
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Global Expansion
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              多様な価値が繋がる世界へ
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              グローバル市場への参入戦略と実行支援で、世界に新しい価値を届ける
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Market Hurdles
            </h2>
            <p className="text-xl text-gray-600">
              グローバル展開における典型的な課題
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                市場理解の不足
              </h3>
              <p className="text-gray-600">
                ターゲット市場の文化、商習慣、規制を十分に理解していない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                現地ネットワークの欠如
              </h3>
              <p className="text-gray-600">
                信頼できるパートナー、顧客、人材とのコネクションがない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                ローカライゼーションの失敗
              </h3>
              <p className="text-gray-600">
                単なる翻訳ではなく、文化に合わせた適応が必要だが方法がわからない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                法規制・税務の複雑さ
              </h3>
              <p className="text-gray-600">
                各国の法律、制、コンプライアンス要件への対応が困難
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                リソースの分散
              </h3>
              <p className="text-gray-600">
                国内事業と海外展開の両立が難しく、どちらも中途半端に
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                コミュニケーションの壁
              </h3>
              <p className="text-gray-600">
                言語だけでなく、文化的コンテキストの違いによる誤解が発生
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              The STUDIO SEALINK Way
            </h2>
            <p className="text-xl text-gray-600">
              グローバルネットワークと現地知見を活用した展開支援
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-12 rounded-3xl mb-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FFCD35]">
              Think Global, Act Local
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              私たちは、グローバルな視点と現地の深い理解を融合させた支援を提供します。
              単なるアドバイスではなく、現地パートナーとのネットワーク、
              実行支援まで含めた包括的なサポートで、成功確率を最大化します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">市場参入戦略</h4>
                <p className="text-gray-300">
                  データと現地知見に基づいた、実行可能な市場参入計画を策定
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">現地ネットワーク</h4>
                <p className="text-gray-300">
                  信頼できる現地パートナー、顧客、人材とのコネクション提供
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">ローカライゼーション</h4>
                <p className="text-gray-300">
                  文化に適応した製品・サービス・マーケティングの最適化
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">実行伴走</h4>
                <p className="text-gray-300">
                  計画から実行、PMFまで、現地で一緒に走るパートナー
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Process
            </h2>
            <p className="text-xl text-gray-600">
              段階的なグローバル展開ロードマップ
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                01
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  市場調査 & 参入戦略策定
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ターゲット市場の詳細分析（市場規模、成長性、競合、規制環境）を実施。
                  自社の強みを活かせる参入戦略と、優先順位付けされたアクションプランを策定します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                02
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  現地パートナーシップ構築
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  販売代理店、技術パートナー、法務・会計専門家など、
                  信頼できる現地パートナーとのネットワークを構築。デューデリジェンスも支援します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                03
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  ローカライゼーション & パイロット
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  製品・サ���ビス・マーケティングを現地市場に適応。
                  小規模なパイロットプログラムで市場反応を検証し、本格展開前に最適化します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                04
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  本格展開 & スケーリング
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  パイロットの学びを基に、本格的な市場展開を実施。
                  現地チームの構築、マーケティング・セールス活動の拡大、継続的な最適化をサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Recommended For
            </h2>
            <p className="text-xl text-gray-600">
              このような企業に最適です
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">スタートアップ</h3>
              <p className="text-gray-300 leading-relaxed">
                国内でPMFを達成し、次の成長ステージとしてグローバル展開を検討している企業。
                初めての海外展開で、現地知見とネットワークが必要な企業。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Map className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">中小企業</h3>
              <p className="text-gray-300 leading-relaxed">
                日本市場で確立したビジネスモデルを、アジア・欧米などの新市場に展開したい企業。
                海外事業部の立ち上げを検討している企業。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Globe className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">グローバル志向の起業家</h3>
              <p className="text-gray-300 leading-relaxed">
                最初からグローバル市場を狙っているスタートアップ。
                現地の深い理解と、実行を支援してくれるパートナーが必要な企業。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Users className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">海外展開経験企業</h3>
              <p className="text-gray-300 leading-relaxed">
                既に一部の海外市場に進出しているが、新たな地域への展開や、
                既存市場でのスケーリングに課題を感じている企業。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Scenarios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Case Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              Success Stories
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#FFCD35]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#FFCD35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#001E36] mb-2">
                    Case A: SaaS × 東南アジア展開
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">業界: EdTech | ターゲット: シンガポール・ベトナム | 期間: 12ヶ月</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>課題:</strong> 日本で成功したオンライン学習プラットフォームを東南アジアに展開したいが、
                市場理解、現地パートナー、教育システムの違いへの対応方法がわからない。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>アプローチ:</strong> シンガポールとベトナムの市場調査を実施し、教育制度・文化の違いを分析。
                現地の教育機関・販売代理店とパートナーシップを構築。UIローカライゼーションとコンテンツの現地化を支援。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成果:</strong> 12ヶ月でシンガポールとベトナムで5,000人のユーザーを獲得。
                現地法人を設立し、さらなる拡大フェーズへ。
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#FFCD35]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6 text-[#FFCD35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#001E36] mb-2">
                    Case B: D2Cブランド × 北米展開
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">業界: ライフスタイル・消費財 | ターゲット: アメリカ | 期間: 18ヶ月</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>課題:</strong> 日本で人気のD2Cライフスタイルブランドが北米市場に挑戦したいが、
                ブランドメッセージの適応、物流、マーケティングチャネルで課題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>アプローチ:</strong> 北米の消費者インサイト調査を実施し、ブランドストーリーとメッセージを再構築。
                Amazon・Shopify活用戦略を策定し、インフルエンサーマーケティングを展開。
                物流パートナーを選定し、効率的な配送体制を構築。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成果:</strong> 18ヶ月で北米売上が全体の30%に到達。複数のメディアに取り上げられ、
                ブランド認知が急拡大。次はヨーロッパ展開を計画中。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              Investment Structure
            </h2>
            <p className="text-xl text-gray-600">
              市場規模とプロジェクトスコープに応じた柔軟な料金体系
            </p>
          </div>

          {/* 創業パートナー特別枠バナー */}
          <div className="mb-12 bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] p-10 rounded-3xl text-center border-2 border-[#FFCD35] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFCD35] rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <div className="inline-block px-6 py-2 bg-[#FFCD35] text-[#001E36] text-sm font-bold rounded-full mb-4 shadow-lg">
                🌟 創業パートナー特別枠（先着3社限定）
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ギルド運営体制強化中につき<br />特別価格でご提供
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                共に成長するパートナーとして、事業投資価値を最大化する戦略的価格設定。<br />
                グローバル市場への第一歩を、この機会に踏み出しませんか。
              </p>
            </div>
          </div>

          {/* 初回相談無料バナー */}
          <div className="mb-12 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F] p-8 rounded-2xl text-center border-4 border-[#001E36] shadow-xl">
            <div className="inline-block px-4 py-1 bg-[#001E36] text-[#FFCD35] text-sm font-bold rounded-full mb-3">
              🎉 今だけ限定
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#001E36] mb-3">
              初回相談〜ご提案まで完全無料
            </h3>
            <p className="text-lg text-[#001E36]/80">
              ご契約までの相談・戦略提案に一切費用はかかりません。<br />
              まずはお気軽にあなたのビジョンをお聞かせください。
            </p>
          </div>

          {/* 3プランのグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* エントリープラン */}
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#FFCD35] mb-2">エントリープラン</h3>
              <p className="text-gray-300 text-xs mb-4">参入可能性診断型</p>
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">¥1M〜/月</div>
                <div className="text-xs text-gray-400">着手金</div>
                <div className="text-sm text-[#FFCD35] mt-1">1〜3ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                地政学リスク、競合調査、法的規制調査に特化。実行の前段階として、確実なデータと戦略シナリオを提示する参入可能性診断プラン。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>地政学リスク分析</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>競合環境・市場規模調査</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>法的規制・コンプライアンス調査</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>戦略シナリオ複数案の提示</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>GO/NO-GO判定レポート作成</span>
                </li>
              </ul>
            </div>

            {/* スタンダードプラン - 目立たせる */}
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-6 rounded-2xl border-4 border-[#FFCD35] shadow-2xl transform md:scale-105 relative ring-4 ring-[#FFCD35]/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 bg-[#FFCD35] text-[#001E36] text-xs font-bold rounded-full whitespace-nowrap shadow-lg">
                  RECOMMENDED
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#FFCD35] mb-2 mt-2">スタンダードプラン</h3>
              <p className="text-gray-300 text-xs mb-4">実行完遂型</p>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg text-gray-400 line-through">¥1.5M/月</span>
                  <span className="text-3xl font-bold text-[#FFCD35]">¥1.05M/月</span>
                </div>
                <div className="text-xs text-[#FFCD35] bg-[#FFCD35]/10 inline-block px-2 py-1 rounded">
                  30% OFF 特別価格
                </div>
                <div className="text-xs text-gray-400 mt-2">着手金</div>
                <div className="text-sm text-gray-300 mt-1">4〜12ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                現地市場調査、ローカライズ戦略の立案、UI/UX調整、現地パートナー開拓までを包括支援する実行完遂型。貴社の海外展開を専門の「事業部」として機能させる。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>現地市場調査・競合分析</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>ローカライズ戦略立案</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>UI/UX・マーケティング調整</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>現地パートナー開拓・交渉</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>実行フェーズまでの伴走支援</span>
                </li>
              </ul>
            </div>

            {/* 戦略的パートナープラン */}
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#FFCD35] mb-2">戦略的パートナープラン</h3>
              <p className="text-gray-300 text-xs mb-4">共同経営者型</p>
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">要相談</div>
                <div className="text-sm text-[#FFCD35] mt-2">6〜18ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                現地リサーチから提携交渉、ローカライズ、独占販売権やレベニューシェアを含む共同事業化プラン。海外という未知の領域をSTUDIO SEALINKのネットワークで攻略する共同経営者型。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>現地リサーチ・市場調査完全実施</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>提携交渉・契約締結</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>ローカライゼーション実行</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>独占販売権・レベニューシェア設計</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>共同事業化アレンジメント</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>※本料金には専門家チームのアサイン費用と戦略ディレクション報酬が含まれます。</strong><br />
              柔軟なマイルストーン設定が可能です。ターゲット市場の数・プロジェクトの複雑性により価格は変動します。
            </p>
            <p className="text-gray-600 text-sm">
              ※本価格はギルド運営体制強化中の限定価格です。予告なく終了する場合がございます。<br />
              ※戦略的パートナープランは、レベニューシェアや成功報酬を含む柔軟なアレンジメントが可能です。まずはご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 構築後の運用サポート：Fractional COO */}
      <section className="py-24 bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFCD35] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#FFCD35]/20 border border-[#FFCD35] rounded-full text-[#FFCD35] mb-6">
              Next Step
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              構築後の運用サポート：<br />
              <span className="text-[#FFCD35]">Fractional COO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              成功した事業を、そのままの熱量で運用・グロースさせる
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCD35] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#001E36]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">海外展開後は、現地運用へ</h3>
                  <p className="text-gray-300">
                    市場参入後の本当の勝負は、現地での継続的な運用・改善。立ち上げた海外事業を確実に成長軌道に乗せるパートナーが必要です。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCD35] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#001E36]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">両拠点を統合管理</h3>
                  <p className="text-gray-300">
                    国内事業と海外事業の両立は困難。KPI統合管理、リソース配分、クロスボーダーのオペレーション構築まで、参謀として支えます。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCD35] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#001E36]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">グローバル知見の継続活用</h3>
                  <p className="text-gray-300">
                    海外展開フェーズで築いたネットワークと知見を、運用フェーズでも継続活用。市場変化への迅速な対応を実現します。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#FFCD35]">
              <h3 className="text-2xl font-bold text-[#FFCD35] mb-4">Fractional COOで実現すること</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>国内外のKPI統合管理とモニタリング</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>クロスボーダーのオペレーション設計</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>現地チームとの連携・育成支援</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>市場変化への戦略アジャスト</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>次の展開国への拡大戦略策定</span>
                </li>
              </ul>
              <Link
                to="/services/fractional-coo"
                className="inline-flex items-center px-8 py-4 bg-[#FFCD35] text-[#001E36] font-semibold rounded-lg hover:bg-[#FFD95F] transition-all transform hover:scale-105 w-full justify-center"
              >
                <span>Fractional COOの詳細を見る</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <p className="text-gray-300 text-sm">
              💡 海外展開フェーズから継続してご契約いただく場合、特別価格にてご提供いたします。詳細はお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6 leading-tight">
            世界に新しい価値を<br />
            届けませんか？
          </h2>
          <p className="text-xl text-[#001E36]/80 mb-8">
            グローバル展開の第一歩を、一緒に踏み出しましょう。
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