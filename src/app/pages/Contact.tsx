import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              あなたのビジョンを、私たちと共に現実へ
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-[#001E36] mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                まずは無料相談から始めませんか？<br />
                あなたの課題やビジョンをお聞かせください。
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    送信完了！
                  </h3>
                  <p className="text-green-600">
                    お問い合わせありがとうございます。<br />
                    担当者より2営業日以内にご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#001E36] mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFCD35] focus:outline-none transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#001E36] mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFCD35] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#001E36] mb-2">
                      会社名・組織名（任意）
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFCD35] focus:outline-none transition-colors"
                      placeholder="株式会社〇〇 / 個人事業主の場合は空欄でOK"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[#001E36] mb-2">
                      ご興味のあるサービス
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFCD35] focus:outline-none transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="zero-to-one">0→1 Development</option>
                      <option value="fractional-coo">Fractional COO</option>
                      <option value="global-expansion">Global Expansion</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#001E36] mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFCD35] focus:outline-none transition-colors resize-none"
                      placeholder="���相談内容、課題、ビジョンなどをお聞かせください"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFCD35] text-[#001E36] font-semibold py-4 px-8 rounded-lg hover:bg-[#FFCD35]/90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>送信する</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-4xl font-bold text-[#001E36] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#FFCD35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001E36] mb-1">Email</h3>
                    <p className="text-gray-700">contact@studiosealink.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FFCD35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001E36] mb-1">Phone</h3>
                    <p className="text-gray-700">+81-3-XXXX-XXXX</p>
                    <p className="text-sm text-gray-500 mt-1">（平日 10:00 - 18:00）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFCD35]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FFCD35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001E36] mb-1">Office</h3>
                    <p className="text-gray-700">
                      東京都渋谷区<br />
                      （詳細はお問い合わせください）
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Values Box */}
              <div className="bg-gradient-to-br from-[#001E36] to-[#003050] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-[#FFCD35]">
                  Our Promise
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  すべてのお問い合わせに、真摯に向き合います。
                  あなたのビジョンや課題を深く理解し、
                  最適なソリューションをご提案します。
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">2営業日以内に必ずご返信</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">初回相談は完全無料</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#FFCD35] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">守秘義務を厳守</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-4">
              よくある質問
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                Q. 相談は本当に無料ですか？
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A. はい、初回の相談は完全無料です。まずはあなたの課題やビジョンをお聞かせください。
                その上で、私たちがどのようにお手伝いできるかをご提案させていただきます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                Q. どのくらいの規模の企業が対象ですか？
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A. スタートアップから中堅企業まで、幅広く対応しています。
                重要なのは規模ではなく、新しい価値を創造したいという強い想いです。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                Q. プロジェクトの期間はどのくらいですか？
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A. プロジェクトの内容により異なりますが、一般的には3〜12ヶ月です。
                まずは短期のエンゲージメントから始め、必要に応じて延長することも可能です。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#001E36] mb-3">
                Q. オンラインでの対応は可能ですか？
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A. はい、オンラインでの対応も可能です。ただし、プロジェクトの性質によ��ては、
                定期的な対面でのミーティングをお願いする場合もございます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[#FFCD35] to-[#FFD95F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001E36] mb-6 leading-tight">
            「やりたい」を「やる」に<br />
            変える第一歩を
          </h2>
          <p className="text-xl text-[#001E36]/80">
            今すぐお問い合わせください
          </p>
        </div>
      </section>
    </div>
  );
}