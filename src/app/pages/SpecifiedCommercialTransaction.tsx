export default function SpecifiedCommercialTransaction() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              特定商取引法に基づく表記
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specified Commercial Transaction Act
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* 事業者名 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">事業者名</h2>
              <p className="text-gray-700 text-lg">STUDIO SEALINK</p>
            </div>

            {/* 運営統括責任者 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">運営統括責任者</h2>
              <p className="text-gray-700 text-lg">代表者名（お問い合わせにてご確認ください）</p>
            </div>

            {/* 所在地 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">所在地</h2>
              <p className="text-gray-700 text-lg">
                東京都渋谷区<br />
                （詳細な住所についてはお問い合わせください）
              </p>
            </div>

            {/* お問い合わせ */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">お問い合わせ</h2>
              <p className="text-gray-700 text-lg mb-2">
                お問い合わせフォームよりご連絡ください。
              </p>
              <p className="text-gray-600">
                ※営業時間：平日 10:00〜18:00（土日祝日を除く）<br />
                ※お問い合わせへの回答は、2営業日以内を目安に対応いたします。
              </p>
            </div>

            {/* 販売価格 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">販売価格</h2>
              <p className="text-gray-700 text-lg">
                各サービスページに記載の通り<br />
                ※価格は全て税込表示です
              </p>
            </div>

            {/* 支払方法 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">支払方法</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                <li>銀行振込</li>
                <li>クレジットカード決済（対応可能な場合）</li>
                <li>その他、契約時に個別に定める方法</li>
              </ul>
              <p className="text-gray-600 mt-4">
                ※振込手数料はお客様のご負担となります
              </p>
            </div>

            {/* 支払時期 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">支払時期</h2>
              <p className="text-gray-700 text-lg">
                契約締結後、請求書発行日から30日以内<br />
                ※個別契約により異なる場合があります
              </p>
            </div>

            {/* サービス提供時期 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">サービス提供時期</h2>
              <p className="text-gray-700 text-lg">
                契約成立後、個別に定める開始日より提供開始<br />
                ※具体的なスケジュールは契約時に協議の上、決定いたします
              </p>
            </div>

            {/* 返品・キャンセル */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">返品・キャンセルについて</h2>
              <p className="text-gray-700 text-lg mb-4">
                サービスの性質上、原則として契約成立後の返品・キャンセルはお受けできません。
              </p>
              <p className="text-gray-700 text-lg mb-2">
                <strong className="text-[#001E36]">キャンセル可能な場合：</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>サービス開始前で、契約成立から8日以内（クーリング・オフ期間）</li>
                <li>当社の責に帰すべき事由により、契約内容の履行が不可能となった場合</li>
              </ul>
              <p className="text-gray-600 mt-4">
                ※個別契約において別段の定めがある場合は、その定めに従います
              </p>
            </div>

            {/* 引渡し時期 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">成果物の引渡し時期</h2>
              <p className="text-gray-700 text-lg">
                契約で定める納期に従い、成果物を引き渡します。<br />
                ※具体的な納期は個別契約時に協議の上、決定いたします
              </p>
            </div>

            {/* 追加費用 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">追加費用について</h2>
              <p className="text-gray-700 text-lg">
                基本的に、契約時に提示した金額以外の追加費用は発生しません。<br />
                ただし、以下の場合には追加費用が発生する可能性があります：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>契約範囲外の業務を追加でご依頼いただいた場合</li>
                <li>お客様のご都合による大幅な仕様変更が発生した場合</li>
              </ul>
              <p className="text-gray-600 mt-4">
                ※追加費用が発生する場合は、事前にお見積りをご提示し、ご承認いただいた上で実施いたします
              </p>
            </div>

            {/* 免責事項 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">免責事項</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                <li>天災地変、戦争、暴動、その他の不可抗力により契約の履行が不可能となった場合</li>
                <li>お客様の提供する情報・資料に起因する問題について</li>
                <li>第三者の権利侵害に関する問題について（事前確認の範囲内で対応）</li>
              </ul>
            </div>

            {/* 準拠法 */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#FFCD35]">
              <h2 className="text-2xl font-bold text-[#001E36] mb-3">準拠法・管轄裁判所</h2>
              <p className="text-gray-700 text-lg mb-2">
                <strong className="text-[#001E36]">準拠法：</strong>日本法
              </p>
              <p className="text-gray-700 text-lg">
                <strong className="text-[#001E36]">管轄裁判所：</strong>東京地方裁判所を第一審の専属的合意管轄裁判所とします
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center mb-6">
              上記内容について、ご不明な点がございましたら、<br />
              お問い合わせフォームよりお気軽にご連絡ください。
            </p>
            <p className="text-gray-600 text-right">
              制定日：2024年1月1日<br />
              最終更新日：2026年3月11日
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
