import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001E36] via-[#002847] to-[#001E36] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#FFCD35] mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            お探しのページは見つかりませんでした
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-[#FFCD35] text-[#001E36] font-semibold rounded-lg hover:bg-[#FFCD35]/90 transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            <span>ホームへ戻る</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 border-2 border-[#FFCD35] text-[#FFCD35] font-semibold rounded-lg hover:bg-[#FFCD35]/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>前のページに戻る</span>
          </button>
        </div>

        <div className="mt-16 text-gray-400">
          <p className="italic">
            「個性とは好き勝手することではなく、思想に基づいた洗練された創造である。」
          </p>
        </div>
      </div>
    </div>
  );
}
