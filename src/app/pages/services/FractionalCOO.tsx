import { Link } from 'react-router';
import { Target, AlertCircle, CheckCircle, ArrowRight, TrendingUp, Users, BarChart, ArrowLeft } from 'lucide-react';

export default function FractionalCOO() {
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
              Fractional COO
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              思想が形になり、<br />
              誰かのワクワクを生み出す世界を創る。
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              戦略立案から実行までを統合的にサポートする経営参謀サービス
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
              成長企業が直面する典型的な課題
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                戦略と実行の乖離
              </h3>
              <p className="text-gray-600">
                素晴らしい戦略を立てても、実行段階で形骸化してしまう
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                オペレーションの非効率
              </h3>
              <p className="text-gray-600">
                急成長に組織が追いつかず、業務フローが混乱している
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                フルタイムCOOは高コスト
              </h3>
              <p className="text-gray-600">
                優秀なCOOを採用したいが、予算やタイミングが合わない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                経営陣の孤独
              </h3>
              <p className="text-gray-600">
                重要な意思決定を相談できる、信頼できるパートナーがいない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                スケーリングの壁
              </h3>
              <p className="text-gray-600">
                次のステージへの成長に必要な組織体制が構築できない
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                データ活用の不足
              </h3>
              <p className="text-gray-600">
                データはあるが、意思決定に活用できていない
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
              戦略的思考と実行力を兼ね備えた経営参謀
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-12 rounded-3xl mb-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FFCD35]">
              Fractional（部分的）だからこその価値
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              フルタイムのCOOを雇う予算やタイミングではないが、経営レベルのオペレーション支援が必要な企業に、
              必要な時に必要なだけの専門性を提供します。コストを抑えながら、最高レベルの経営参謀を得られます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">戦略と実行の統合</h4>
                <p className="text-gray-300">
                  机上の空論ではなく、実行可能な戦略を設計し、実装まで伴走
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">柔軟なエンゲージメント</h4>
                <p className="text-gray-300">
                  週2-3日、月次など、ニーズに合わせた関与度をカスタマイズ
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">客観的な視点</h4>
                <p className="text-gray-300">
                  外部者だからこそ提供できる、バイアスのない戦略的アドバイス
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#FFCD35]/30">
                <CheckCircle className="w-8 h-8 text-[#FFCD35] mb-4" />
                <h4 className="text-xl font-bold mb-3">コスト効率</h4>
                <p className="text-gray-300">
                  フルタイムCOOの1/3〜1/2のコストで、トップレベルの専門性
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
              構造化された支援プロセス
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                01
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  現状診断 & 課題抽出
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  経営陣・主要メンバーへのヒアリング、データ分析を通じて、
                  組織の強みと課題を明確化。優先順位の高い課題領域を特定します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                02
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  戦略策定 & ロードマップ設計
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  3〜6ヶ月のアクションプランを策定。目標達成に必要な施策、
                  組織体制、リソース配分を明確にし、実行可能なロードマップを作成します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                03
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  実行支援 & オペレーション改善
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  戦略の実行をリードし、業務フロー改善、KPI設定、チームマネジメント支援を実施。
                  定期的なレビューを通じて、PDCAサイクルを回します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FFCD35] rounded-full flex items-center justify-center text-[#001E36] font-bold text-2xl">
                04
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#001E36] mb-3">
                  組織能力の内製化
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  長期的には社内でオペレーションを回せるよう、メンバーの育成、
                  プロセスの標準化を推進。自律的な組織への移行をサポートします。
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
              このような企業・経営者に最適です
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">成長フェーズのスタートアップ</h3>
              <p className="text-gray-300 leading-relaxed">
                PMFを達成し、スケーリングを目指すスタートアップ。
                フルタイムCOOを雇う前段階、またはその代替として。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <BarChart className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">中小企業の経営者</h3>
              <p className="text-gray-300 leading-relaxed">
                事業は安定しているが、次の成長ステージに進むための
                戦略とオペレーション改革が必要な企業。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Target className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">事業転換期の企業</h3>
              <p className="text-gray-300 leading-relaxed">
                市場環境の変化や事業ピボットに伴い、
                オペレーションの大幅な見直しが必要な企業。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
              <Users className="w-10 h-10 text-[#FFCD35] mb-4" />
              <h3 className="text-2xl font-bold mb-4">ファウンダーCEO</h3>
              <p className="text-gray-300 leading-relaxed">
                プロダクトやビジョンには自信があるが、
                オペレーションや組織マネジメントに課題を感じている創業者。
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
                  <TrendingUp className="w-6 h-6 text-[#FFCD35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#001E36] mb-2">
                    Case A: SaaS企業 × スケーリング支援
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">業界: マーケティングテック | 期間: 12ヶ月</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>課題:</strong> ARR 5億円を突破したが、組織の混乱で成長が鈍化。
                営業・CS・開発の連携が取れず、顧客満足度も低下傾向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>アプローチ:</strong> 週3日のエンゲージメントで、部門間のワークフロー再設計、
                KPI体系の整備、定例会議体の刷新を実施。データドリブンな意思決定文化を醸成。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成果:</strong> 12ヶ月でARR 10億円達成。NRR（ネット・レベニュー・リテンション）が120%に改善。
                社内COOを採用し、スムーズに引き継ぎ。
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#FFCD35]">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-[#FFCD35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#001E36] mb-2">
                    Case B: EC企業 × オペレーション改革
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">業界: D2C / EC | 期間: 9ヶ月</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>課題:</strong> 急成長で業務が属人化し、ミスが頻発。在庫管理、配送、CSの効率が悪く、
                利益率が圧迫されていた。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>アプローチ:</strong> 週2日のエンゲージメントで、業務プロセスの可視化と標準化、
                システム導入による自動化、チームメンバーのトレーニングを実施。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成果:</strong> オペレーションコストを30%削減。ミス率が80%減少。
                利益率が改善し、次の成長投資が可能に。
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
              エンゲージメントレベルに応じた柔軟な料金体系
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
                この機会に、経営参謀としての伴走を始めませんか。
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
            {/* フォーカスプラン */}
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#FFCD35] mb-2">フォーカスプラン</h3>
              <p className="text-gray-300 text-xs mb-4">実務効率化特化型</p>
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">¥100K〜/月</div>
                <div className="text-sm text-[#FFCD35]">3〜6ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                月2回の定例にてオペレーション設計やマニュアル整備に集中し、実務のブラックボックス化を防ぐ実務効率化特化型。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>月2回の定例ミーティング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>オペレーション設計・改善</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>業務マニュアル整備</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>ツール導入・活用支援</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>実務のブラックボックス化防止</span>
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
              <p className="text-gray-300 text-xs mb-4">参謀型</p>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg text-gray-400 line-through">¥300K/月</span>
                  <span className="text-3xl font-bold text-[#FFCD35]">¥210K/月</span>
                </div>
                <div className="text-xs text-[#FFCD35] bg-[#FFCD35]/10 inline-block px-2 py-1 rounded">
                  30% OFF 特別価格
                </div>
                <div className="text-sm text-gray-300 mt-2">3〜12ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                週1回の定例とチャット対応を通じ、KPI管理からオペレーション構築までを指揮する参謀プラン。経営者の孤独を解消し、実務を回す最も選ばれているプラン。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>週1回の定例ミーティング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>チャット相談対応（営業時間内）</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>KPI設計・モニタリング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>オペレーション構築支援</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>経営課題の整理・優先順位付け</span>
                </li>
              </ul>
            </div>

            {/* フルサポートプラン */}
            <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#FFCD35] mb-2">フルサポートプラン</h3>
              <p className="text-gray-300 text-xs mb-4">フルコミットメント型</p>
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">¥500K〜/月</div>
                <div className="text-sm text-[#FFCD35]">6〜12ヶ月</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                週2回の定例に加え、チャット常時相談、チーム構築、採用支援、AI活用推進までを行うフルコミットメント型。経営者の脳内を外出しし、事業の意思決定を高速化させるプラン。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>週2回の定例ミーティング</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>チャット常時対応</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>チーム構築・組織設計支援</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>採用面接・人材評価サポート</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#FFCD35] mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI活用・業務効率化推進</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>※本料金には専門家チームのアサイン費用と戦略ディレクション報酬が含まれます。</strong><br />
              柔軟なマイルストーン設定が可能です。エンゲージメント内容・企業規模により価格は調整可能です。
            </p>
            <p className="text-gray-600 text-sm">
              ※本価格はギルド運営体制強化中の限定価格です。予告なく終了する場合がございます。<br />
              ※3ヶ月のトライアル期間も設定可能です。まずはご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6 leading-tight">
            戦略を実行に変える<br />
            パートナーを得ませんか？
          </h2>
          <p className="text-xl text-[#001E36]/80 mb-8">
            無料の初回相談で、あなたの課題を一緒に整理しましょう。
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