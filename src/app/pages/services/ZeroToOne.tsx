import { Link } from 'react-router';
import { Sparkles, AlertCircle, CheckCircle, ArrowRight, TrendingUp, Users, Rocket, ArrowLeft } from 'lucide-react';

export default function ZeroToOne() {
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
              0→1 Development
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              あなたの心を踊らせ、<br />
              「やりたい」が「やる」に変わる瞬間を。
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              思想が形になり、誰かのワクワクを生み出す新規事業創出支援
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
              新規事業創出における典型的な課題
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                アイデアの具体化が困難
              </h3>
              <p className="text-gray-600">
                抽象的なビジョンを実行可能な計落とし込めない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                実行力の不足
              </h3>
              <p className="text-gray-600">
                戦略は立てられても、実際に動かすリソースやノウハウがない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                市場検証の遅れ
              </h3>
              <p className="text-gray-600">
                完璧を求めすぎて、市場投入が遅れ、機会を逃す
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                組織の壁
              </h3>
              <p className="text-gray-600">
                既存事業との利害調整や、社内承認プロセスで停滞
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                思想の欠如
              </h3>
              <p className="text-gray-600">
                単なる収益追求で、持続的な価値創造ができない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                孤独な挑戦
              </h3>
              <p className="text-gray-600">
                信頼できるパートナーがおらず、重要な判断を一人で抱え込む
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
              Guild-type Integration of Thought & Action
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-12 rounded-3xl mb-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FFCD35]">
              Strategy + Execution = Reality
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              私たちは、単なるコンサルティングでも、単なる実行支援でもありません。
              「知性ある遊び人」として、深い思想と遊び心のある実行力を融合させ、
              あなたのビジョンを現実へと変えます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">思想の明確化</h4>
                <p className="text-gray-300">
                  Why（なぜ）から始め、持続可能なビジネスの核となる思想を定義
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">迅速なプロトタイピング</h4>
                <p className="text-gray-300">
                  完璧を求めず、素早く市場で検証し、学びを得る
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">ギルド型協働</h4>
                <p className="text-gray-300">
                  各分野の専門家が対等に協力し、最高の結果を創出
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">伴走型支援</h4>
                <p className="text-gray-300">
                  計画だけでなく、実行まで一緒に走り、成功まで導く
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
              構造化されたロードマップ
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                01
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  思想の定義 & ビジョン設計
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Why（なぜこれをやるのか）を徹底的に掘り下げ、ビジネスの核となる思想を明確化。
                  単なる収益モデルではなく、世界にどんな価値を提供するかを定義します。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                02
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  市場分析 & 戦略立案
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  市場機会の特定、競合分析、ターゲット顧客の明確化。
                  データに基づいた戦略的アプローチで、成功確率を最大化します。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                03
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  MVP開発 & 市場検証
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  最小限の機能で素早く市場投入し、顧客からのフィードバックを収集。
                  仮説検証を繰り返し、品市場適合（PMF）を目指します。
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                04
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  成長戦略 & スケーリング
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  PMF達成後、事業を拡大するための成長戦略を策定・実行。
                  組織体制の構築、資金調達支援など、次のステージへの移行をサポートします。
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
              このような方に最適です
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Users className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">起業家 & スタートアップ創業者</h3>
              <p className="text-gray-300 leading-relaxed">
                明確なビジョンはあるが、実行に移す方法やリソースが不足している方。
                0から1を生み出す挑戦を、経験豊富なパートナーと共に進めたい方。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">企業の新規事業担当者</h3>
              <p className="text-gray-300 leading-relaxed">
                既存事業とは異なる新しい価値創造に挑戦したい企業。
                社内リソースだけでは限界があり、外部の専門家の力を借りたい組織。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Sparkles className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">ビジョナリー</h3>
              <p className="text-gray-300 leading-relaxed">
                世界を変える大きなアイデアを持っているが、どこから始めればいいかわからない方。
                思想を大切にし、意味のあるビジネスを創りたい方。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Rocket className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">成長フェーズの事業者</h3>
              <p className="text-gray-300 leading-relaxed">
                初期の成功を収めたが、次のステージへのスケーリングに課題を感じている方。
                戦略的なアドバイスと実行支援の両方が必要な方。
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
                  <Sparkles className="w-6 h-6 text-[#FFCD35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#001E36] mb-2">
                    Case A: SaaS スタートアップ × 0→1支援
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">業界: HR Tech | 期間: 6ヶ月</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>課題:</strong> 人事領域のDXを目指す創業者が、アイデアはあるものの具体的なプロダクト設計と市場検証の方法がわからず停滞。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>アプローチ:</strong> 思想の明確化から始め、ターゲット顧客へのインタビューを実施。MVP開発を3ヶ月で完了し、
                パイロット企業10社で検証。フィードバックを基に製品を改善。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成果:</strong> 6ヶ月でPMFを達成し、シードラウンドで資金調達に成功。現在は順調に成長中。
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#FFCD35]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#FFCD35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#001E36] mb-2">
                    Case B: 大手企業 × 新規事業創出
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">業界: 製造業 | 期間: 9ヶ月</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>課題:</strong> 既存事業の成長鈍化を受け、新規事業創出を目指すも、
                社内のリソースとマインドセットでは革新的な事業が生まれない。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>アプローチ:</strong> 外部視点で市場機会を特定し、社内の技術資産を活用した新サービスを設計。
                スピンアウト型の組織体制を構築し、迅速な意思決定を実現。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成果:</strong> 新規事業が立ち上がり、1年目で目標売上を達成。社内に新しい事業開発文化が根付く。
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
              プロジェクトの規模と期間に応じた柔軟な料金体系
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
                この機会に、あなたのビジョンを現実に変える第一歩を。
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
              <p className="text-gray-300 text-xs mb-4">戦略設計型</p>
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">¥1M〜</div>
                <div className="text-sm text-[#FFCD35]">1〜3ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                市場調査とビジネスモデル構築に特化。アイデアを「実行可能な設計図」に落とし込み、次のステップへのGO/NO-GO判定を明確にする戦略設計型。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>市場調査・競合分析</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>ビジネスモデル設計</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>実行可能な設計図の作成</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>GO/NO-GO判定資料</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>次ステップへの戦略提案</span>
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
              <p className="text-gray-300 text-xs mb-4">実行の司令塔型</p>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg text-gray-400 line-through">¥3M〜</span>
                  <span className="text-3xl font-bold text-[#FFCD35]">¥2.1M〜</span>
                </div>
                <div className="text-xs text-[#FFCD35] bg-[#FFCD35]/10 inline-block px-2 py-1 rounded">
                  30% OFF 特別価格
                </div>
                <div className="text-sm text-gray-300 mt-2">3〜9ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                アイデアの構造化からMVP開発、実装ディレクションまでを完遂する「実行の司令塔」。現場の専門家チームをハンドリングし、最短距離でPMFを目指す実行支援型。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>ビジネスモデル構造化</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>MVP開発ディレクション</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>専門家チームのハンドリング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>市場検証・PMF支援</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>グロース戦略設計</span>
                </li>
              </ul>
            </div>

            {/* プレミアムプラン */}
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#FFCD35] mb-2">プレミアムプラン</h3>
              <p className="text-gray-300 text-xs mb-4">共同経営者型</p>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg text-gray-400 line-through">¥10M〜</span>
                  <span className="text-3xl font-bold text-[#FFCD35]">¥7M〜</span>
                </div>
                <div className="text-xs text-[#FFCD35] bg-[#FFCD35]/10 inline-block px-2 py-1 rounded">
                  30% OFF 特別価格
                </div>
                <div className="text-xs text-gray-400 mt-2">+ 事業持分/成功報酬</div>
                <div className="text-sm text-gray-300 mt-1">6〜24ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                共同経営者として、資金調達、資本策、採用、投資家対応までを背負うフルコミット型。我々自身が事業のオーナーシップを持ち、成功を確約させるパートナーシッププラン。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>共同経営者としての参画</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>資金調達・資本政策支援</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>コア人材採用・チーム構築</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>投資家対応・IR戦略実行</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>PMF達成までの完全伴走</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>※本料金には専門家チームのアサイン費用と戦略ディレクション報酬が含まれます。</strong><br />
              柔軟なマイルストーン設定が可能です。プロジェクトの規模・複雑性・期間により価格は変動します。
            </p>
            <p className="text-gray-600 text-sm">
              ※本価格はギルド運営体制強化中の限定価格です。予告なく終了する場合がございます。<br />
              ※プレミアムプランは事業持分や成功報酬を含む柔軟なアレンジメントが可能です。まずはご相談ください。
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
                  <h3 className="text-xl font-bold mb-2">0→1の後は、1→10へ</h3>
                  <p className="text-gray-300">
                    事業を立ち上げた後の成長フェーズこそ、真の勝負。構築したビジネスモデルを、確実に運用・グロースさせるパートナーが必要です。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCD35] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#001E36]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">経営者の右腕として</h3>
                  <p className="text-gray-300">
                    KPI管理、オペレーション構築、チーム育成まで。日々の意思決定を高速化し、経営者の孤独を解消する参謀として機能します。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCD35] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#001E36]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">シームレスな移行</h3>
                  <p className="text-gray-300">
                    0→1フェーズで共に走ったSTUDIO SEALINKだからこそ、事業の思想と構造を深く理解。熱量を落とさず、次のステージへ。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#FFCD35]">
              <h3 className="text-2xl font-bold text-[#FFCD35] mb-4">Fractional COOで実現すること</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>週次定例での戦略策定・実行レビュー</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>KPI設計とデータドリブン経営の確立</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>オペレーション構築・業務効率化</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>採用支援・チームビルディング</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#FFCD35] mr-3 mt-1 flex-shrink-0" />
                  <span>AI活用・テクノロジー導入推進</span>
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
              💡 0→1フェーズから継続してご契約いただく場合、特別価格にてご提供いたします。詳細はお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6 leading-tight">
            あなた「やりたい」を<br />
            「やる」に変えましょう
          </h2>
          <p className="text-xl text-[#001E36]/80 mb-8">
            まずは無料相談から始めませんか？
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