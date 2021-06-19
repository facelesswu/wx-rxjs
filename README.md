# wx-rxjs

[![Travis](https://github.com/facelesswu/wx-rxjs/rxjs.svg)](https://github.com/ReactiveX/rxjs)

主要用于 **微信小程序**，由于微信开发者工具npm构建的问题，导致rxjs中的operators无法构建。
所以提供该包，将operators也从入口文件导入，一起打包。

## 安装

```bash
npm install --save wx-rxjs
```

## 使用

```typescript
import { of, Observable, Operators } from 'wx-rxjs';

const o: Observable<number> = of(1, 2, 3);

o.pipe(
  Operators.map((x) => x + 1)
).subscribe((x) => console.log(x));
```
