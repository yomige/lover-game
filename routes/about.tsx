export default function About() {
  return (
    <div class="text-shadow min-h-screen w-full bg-pink-300 p-2 text-lg leading-8 text-red-100">
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <div class="flex w-full items-center p-2">
          <a class="flex-1" href="/">
            <img src="/logo.png" class="h-12 w-12" />
          </a>
        </div>
        <div class="max-auto mt-8 max-w-lg leading-8 text-gray-900">
          <div class="text-lg text-gray-500">关于本站</div>
          <div class="my-4">识别码获取方法，关注公众号“独立开发乞讨日记”后，发送“情侣飞行棋识别码”自动获取</div>
        </div>
        <div>
          <img src="/jiaohuazi_gzh.jpg" class="my-4 max-w-xs rounded-lg" />
        </div>
      </div>
    </div>
  );
}
