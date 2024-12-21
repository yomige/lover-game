import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        
        <script src="/js/jquery.min.js"></script>
        <script src="/about.js"></script>
      </Head>

      <div class="w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100 ">
        <div class="max-w-screen-md mx-auto ">
          <div class="p-2 flex items-center w-full">
            <a class="flex-1" href="/">
              <img src="/logo.png" class="w-12 h-12" />
            </a>
          </div>

        <div class="max-auto mt-8 px-4 max-w-lg leading-8 text-gray-900 my-4 flex-col items-center justify-center">
          <div class="text-lg text-gray-500">微信扫码获取最新识别码</div>
          <img src="/wechat-account.png.png" class="my-4 max-w-xs rounded-lg" />
          <div class="text-lg text-gray-500">获取识别码</div>
          <div class="my-4">添加微信获取(备注：识别码)</div>
          <div class="text-lg text-gray-500">解锁VIP姿势</div>
          <div>
          <div class="my-4">添加微信获取(备注：识别码)</div>
          <input class="shadow appearance-none border rounded w-full py-1 px-3 md:w-2/3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lockCode" type="text" placeholder="输入识别码">
          </input>

          <button type="button" onClick="unLockPositions()"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 px-4 rounded">解锁</button></div>
        </div>
        </div>

      </div>

    </>
  )
}
