import { Target, Compass, Sparkles, Heart, Lightbulb, Users } from 'lucide-react';

export default function Philosophy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Philosophy
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              思想に基づいた洗練された創造
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#FFCD35]/20 border border-[#FFCD35] rounded-full text-[#001E36] mb-6 font-semibold">
              PURPOSE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-8 leading-tight">
              あなたの心を踊らせ、<br />
              「やりたい」が「やる」に変わる瞬間を。
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              私たちは、あなたの内なる情熱を解き放ち、夢を現実へと変える触媒となります。
              想像力と実行力の架け橋として、新しい価値創造の瞬間に立ち会います。
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Value */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[#001E36]" />
              </div>
              <h3 className="text-3xl font-bold text-[#001E36] mb-4">MISSION</h3>
              <div className="w-16 h-1 bg-[#FFCD35] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                思想が形になり、<br />
                誰かのワクワクを<br />
                生み出す世界を創る。
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-10 h-10 text-[#001E36]" />
              </div>
              <h3 className="text-3xl font-bold text-[#001E36] mb-4">VISION</h3>
              <div className="w-16 h-1 bg-[#FFCD35] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                多様な価値が<br />
                繋がる世界へ
              </p>
            </div>

            {/* Core Value */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFCD35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-[#001E36]" />
              </div>
              <h3 className="text-3xl font-bold text-[#001E36] mb-4">CORE VALUE</h3>
              <div className="w-16 h-1 bg-[#FFCD35] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                「責任ある自由」と<br />
                「思想と面白さの体現」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Section */}
      <section className="py-24 bg-[#001E36] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-[#FFCD35]/20 border border-[#FFCD35] rounded-full text-[#FFCD35] mb-8 font-semibold">
            行動指針（憲章）
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            個性とは好き勝手することではなく、<br />
            <span className="text-[#FFCD35]">思想に基づいた洗練された創造である。</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            真の創造性は、単なる自由奔放さではなく、深い思想と洗練された実行の融合から生まれます。
            私たちは、責任ある自由の中で、思想と面白さを体現し、世界に新しい価値を提供します。
          </p>
        </div>
      </section>

      {/* Our Approach */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Intellectual */}
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#FFCD35]">
              <div className="w-14 h-14 bg-[#FFCD35]/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-[#FFCD35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">Intellectual</h3>
              <p className="text-gray-700 leading-relaxed">
                深い洞察と戦略的思考に基づいた、知的で洗練されたアプローチ。
                表面的な解決策ではなく、本質を見抜く力。
              </p>
            </div>

            {/* Playful */}
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#FFCD35]">
              <div className="w-14 h-14 bg-[#FFCD35]/20 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-[#FFCD35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">Playful</h3>
              <p className="text-gray-700 leading-relaxed">
                創造的で遊び心のある実行力。固定観念に縛られず、
                楽しみながら新しい価値を生み出す姿勢。
              </p>
            </div>

            {/* Collaborative */}
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#FFCD35]">
              <div className="w-14 h-14 bg-[#FFCD35]/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#FFCD35]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001E36] mb-4">Collaborative</h3>
              <p className="text-gray-700 leading-relaxed">
                ギルド型の協働体制。それぞれの専門性を尊重し、
                多様な価値観を統合して最高の結果を創出。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6 leading-tight">
            思想と実行の融合が、<br />
            新しい未来を創る
          </h2>
          <p className="text-xl text-[#001E36]/80">
            あなたのビジョンを、私たちと共に現実へ。
          </p>
        </div>
      </section>
    </div>
  );
}
