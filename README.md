js 的设计模式是经常使用的,但是最近在转 ts,所以就打算用 ts 重写 js 的设计模式. 说是重写其实也是模仿.

主要技术点: [webpack](https://webpack.docschina.org/) + [typescrpt](https://www.tslang.cn/) + [jest](https://jestjs.io/docs/zh-Hans/getting-started) + [ts-jest](https://github.com/kulshekhar/ts-jest)

使用 jest 测试的原因是使用和配置相对简单,并且支持 ts 文件(不需要编译成 js 文件后测试),也是 react 的推荐测试框架(毕竟 facebook 自己产品).

好了开始我们的旅程.

# 创建 package.json 文件及配置

```
npm init
```

如下:

```json
{
  "name": "ts-design-pattern",
  "version": "1.0.0",
  "description": "ts design pattern",
  "main": "index.js",
  "scripts": {},
  "keywords": ["ts", "design", "pattern"],
  "author": "wwmin",
  "license": "ISC",
  "devDependencies": {}
}
```

_更多配置请查看[npm init](https://www.npmjs.com.cn/cli/init/)_

# 安装依赖

```
cnpm i typescript jest ts-jest @types/jest --save-dev
```

并设置 script 后 package.json 文件如下:

```json
{
  "name": "ts-design-pattern",
  "version": "1.0.0",
  "description": "ts design pattern",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": ["ts", "design", "pattern"],
  "author": "wwmin",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^23.3.10",
    "jest": "^23.6.0",
    "ts-jest": "^23.10.5",
    "typescript": "^3.2.1"
  }
}
```

# 配置 typescript

```
tsc --init
```

后生成 tsconfig.json 文件内容如下

```json
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "strict": true,
    "noImplicitAny": true
  }
}
```

_更多配置请查看[tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)_

# 配置 jest

```
npx ts-jest config:init
```

后生成 jest.test.js 文件内容如下

```JavaScript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

_更多配置请查看[ts-jest](https://github.com/kulshekhar/ts-jest)_

# 创建文件夹及文件

```
|   .gitignore
|   jest.config.js
|   package.json
|   README.md
|   tsconfig.json
|
+---src
|       Adapter.ts
|
\---test
        Adapter.test.ts
```

整体文件夹结构大致就是这样,
这里也把.gitignore 内容放上,方便大家参考

```json
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.map
```

src 下和 test 的文件是完成的代码

# 创建第一个设计模式 adapter

在 src 下新建 Adapter.ts

代码如下:

```typescript
interface MediaPlayer {
  play(type: string, fileName: string): void;
}

interface AdvanceMediaPlayer {
  playVlc?(fileName: string): void;
  playMp4?(fileName: string): void;
}

class VlcPlayer implements AdvanceMediaPlayer {
  playVlc(fileName: string) {
    console.log("playing vlc file......." + fileName);
  }
}

class Mp4Player implements AdvanceMediaPlayer {
  playMp4(fileName: string) {
    console.log("playing mp4 file......." + fileName);
  }
}

class MediaAdapter implements MediaPlayer {
  player: AdvanceMediaPlayer;
  constructor(type: string) {
    // 根据type 生成哪一个播放类
    if (type === "vlc") {
      this.player = new VlcPlayer();
    } else if (type === "mp4") {
      this.player = new Mp4Player();
    } else {
      this.player = new Mp4Player(); // 默认使用mp4player
    }
  }
  play(type: string, fileName: string) {
    // 因为特定的播放类有特定的播放方法，所以还需要再根据type调用特定的播放类
    if (type === "vlc") {
      if (this.player.playVlc) this.player.playVlc(fileName);
    } else if (type === "mp4") {
      if (this.player.playMp4) this.player.playMp4(fileName);
    } else {
      return null;
    }
  }
}

export class AudioPlayer implements MediaPlayer {
  play(type: "mp3" | "mp4" | "vlc", fileName: string): boolean {
    if (type === "mp3") {
      console.log("播放器内置支持mp3, " + fileName + "已开始播放.");
      return true;
    } else if (type === "vlc" || type === "mp4") {
      let ma = new MediaAdapter(type);
      ma.play(type, fileName);
      return true;
    } else {
      console.log("不支持当前格式");
      return false;
    }
  }
}
```

然后创建测试文件 在 test 文件夹下新建 Adapter.test.ts
内容如下:

```typescript
import { AudioPlayer } from "../src/Adapter";
test("playing to be true", () => {
  let player = new AudioPlayer();
  expect(player.play("mp3", "aa.mp3")).toBe(true);
  expect(player.play("mp4", "bb.mp4")).toBe(true);
  expect(player.play("vlc", "cc.vlc")).toBe(true);
});
```

_关于 jest 的使用请参考 [jest](https://jestjs.io/docs/zh-Hans/using-matchers)_

# 完成代码后开始测试

```
npm run test 或 npm test
```

内容如下

```
 PASS  test/Adapter.test.ts
  √ playing to be true (18ms)

  console.log src/Adapter.ts:49
    播放器内置支持mp3, aa.mp3已开始播放.

  console.log src/Adapter.ts:18
    playing mp4 file.......bb.mp4

  console.log src/Adapter.ts:12
    playing vlc file.......cc.vlc

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.002s, estimated 2s
Ran all test suites.
```

可以看到绿色的 passed 字样,如果测试没有通过则会有红色的错误提示.

好了,这就完成了 ts 版的设计模式库的搭建,后面就要继续将设计模式慢慢补充完整,
代码可以参考我的[github](https://github.com/wwmin/ts-design-pattern) `https://github.com/wwmin/ts-design-pattern`
