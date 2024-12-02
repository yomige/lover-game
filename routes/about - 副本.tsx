




import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        
        <script src="/js/jquery.min.js"></script>
        <script src="/card_version.js"></script>
      </Head>

      <div class="w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
        <div class="max-w-screen-md text-center mx-auto ">
          <div class="p-2 flex items-center w-full">
            <a class="flex-1" href="/">
              <img src="/logo.png" class="w-12 h-12" />
            </a>
          </div>

        <div class="max-auto mt-8 max-w-lg leading-8 text-gray-900 items-center justify-center">
          <div class="text-lg text-gray-500">关注公众号</div>
          <img src="/jiaohuazi_gzh.jpg" class="my-4 max-w-xs rounded-lg" />
          <div class="text-lg text-gray-500">获取识别码</div>
          <div class="my-4">识别码获取方法，关注公众号后，发送“情侣飞行棋识别码”自动获取</div>
          <div class="text-lg text-gray-500">解锁VIP姿势</div>
          <div class="my-4">

          <input class="shadow appearance-none border rounded w-full py-1 px-3 md:w-2/3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lockCode" type="text" placeholder="输入识别码">
          </input>

          <button type="button" onClick="unLockPositions()"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">解锁</button></div>
        </div>
        </div>

      </div>

    </>
  )
}
