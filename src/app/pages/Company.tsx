import { Building2, Users, Target, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              思想と実行の融合で、新しい未来を創る
            </p>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-8">
              About STUDIO SEALINK
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              STUDIO SEALINKは、「知性ある遊び人」を体現する、
              新しいタイプの事業創造パートナーです。
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              従来のコンサルティングファームのように「戦略を提案して終わり」ではなく、
              実行支援会社のように「ただ手を動かすだけ」でもありません。
              私たちは、深い思想と遊び心のある実行力を融合させ、
              ギルド型の協働体制で、お客様と共に新しい価値を創造します。
            </p>
          </div>
        </div>
      </section>

      {/* Core Identity */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-4 border-[#FFCD35]">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[#001E36]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">PURPOSE</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                あなたの心を踊らせ、<br />
                「やりたい」が「やる」に<br />
                変わる瞬間を。
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-4 border-[#FFCD35]">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-[#001E36]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">MISSION</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                思想が形になり、<br />
                誰かのワクワクを<br />
                生み出す世界を創る。
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-4 border-[#FFCD35]">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#001E36]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">VISION</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                多様な価値が<br />
                繋がる世界へ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              事業概要
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="space-y-6">
              <div className="flex border-b border-gray-200 pb-6">
                <div className="w-48 font-semibold text-[#001E36]">事業名</div>
                <div className="flex-grow text-gray-700">STUDIO SEALINK</div>
              </div>

              <div className="flex border-b border-gray-200 pb-6">
                <div className="w-48 font-semibold text-[#001E36]">開始</div>
                <div className="flex-grow text-gray-700">2024年</div>
              </div>

              <div className="flex border-b border-gray-200 pb-6">
                <div className="w-48 font-semibold text-[#001E36]">事業内容</div>
                <div className="flex-grow text-gray-700">
                  <ul className="space-y-2">
                    <li>• 0→1 新規事業開発支援</li>
                    <li>• Fractional COO（経営参謀サービス）</li>
                    <li>• グローバル展開支援</li>
                    <li>• 戦略コンサルティング & 実行支援</li>
                  </ul>
                </div>
              </div>

              <div className="flex border-b border-gray-200 pb-6">
                <div className="w-48 font-semibold text-[#001E36]">コアバリュー</div>
                <div className="flex-grow text-gray-700">
                  「責任ある自由」と「思想と面白さの体現」
                </div>
              </div>

              <div className="flex">
                <div className="w-48 font-semibold text-[#001E36]">行動指針</div>
                <div className="flex-grow text-gray-700">
                  個性とは好き勝手することではなく、思想に基づいた洗練された創造である。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600">
              私たちが選ばれる理由
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">
                思想と実行の統合
              </h3>
              <p className="text-gray-700 leading-relaxed">
                戦略立案と実行支援を分けません。深い思想に基づいた戦略を、
                実際に形にするまで伴走します。コンサルタントであり、プレイヤーでもあります。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">
                ギルド型の協働
              </h3>
              <p className="text-gray-700 leading-relaxed">
                上から目線のアドバイスではなく、対等なパートナーとして協働します。
                それぞれの専門性を尊重し、最高の結果を共創します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">
                知性ある遊び人
              </h3>
              <p className="text-gray-700 leading-relaxed">
                知的で戦略的でありながら、遊び心と創造性を忘れません。
                固定観念に縛られず、新しい価値を生み出すことを楽しみます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">
                責任ある自由
              </h3>
              <p className="text-gray-700 leading-relaxed">
                自由な発想と挑戦を尊重しますが、それは無責任な行動ではありません。
                思想に基づいた、責任ある創造活動を追求します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6">
            あなたのビジョンを、<br />
            私たちと共に現実へ。
          </h2>
          <p className="text-xl text-[#001E36]/80 mb-8">
            一緒に、特別な何かを創り上げましょう。
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-[#001E36] text-white font-semibold rounded-lg hover:bg-[#002847] transition-all transform hover:scale-105"
          >
            お問い合わせ
          </a>
        </div>
      </section>
    </div>
  );
}