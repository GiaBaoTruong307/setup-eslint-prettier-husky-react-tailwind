# Setup React + ESLint + Prettier + Husky + Tailwind

## Bước 1: Cài các package cần thiết

npm install -D eslint prettier eslint-config-prettier eslint-plugin-react-refresh husky lint-staged globals typescript-eslint

## Bước 2: Tạo file .prettierrc (root dự án)

{
"semi": false,
"singleQuote": true,
"trailingComma": "es5",
"tabWidth": 2,
"printWidth": 100
}

## Bước 3: Tạo file eslint.config.js (root dự án) – copy nguyên xi filee eslint.config.js

## Bước 4: Thêm script vào package.json

"scripts": {
"dev": "vite",
"build": "tsc -b && vite build",
"preview": "vite preview",
"lint": "eslint .",
"lint:fix": "eslint . --fix",
"format": "prettier --write .",
"prepare": "husky"
},
"lint-staged": {
"src/\*_/_.{ts,tsx}": "eslint --fix",
"\*.{ts,tsx,js,jsx,json,css,md}": "prettier --write"
}

## Bước 5: Cài Husky + lint-staged

npx husky init

Sau đó sửa file .husky/pre-commit thành đúng 1 dòng này:
npm exec lint-staged

## Bước 6: Tạo file .lintstagedrc.json (tùy chọn, nhưng gọn hơn)

{
"src/\*_/_.{ts,tsx}": "eslint --fix",
"\*.{ts,tsx,js,jsx,json,css,md}": "prettier --write"
}

## Bước 7: Cài Tailwind v3 + plugin sort class (chỉ chạy 1 lần)

Tạo/Copy 3 file config (nguyên xi)

tailwind.config.js:
/** @type {import('tailwindcss').Config} \*/
export default {
content: ["./index.html", "./src/**/\*.{js,ts,jsx,tsx}"],
theme: { extend: {} },
plugins: []
}

postcss.config.js:
export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}

src/index.css (hoặc src/main.css – thêm 3 dòng này vào đầu file)
@tailwind base;
@tailwind components;
@tailwind utilities;

Sửa .prettierrc (để class tự sort khi save)
Thêm dòng "plugins" vào file .prettierrc hiện tại của bạn:
{
"semi": false,
"singleQuote": true,
"trailingComma": "es5",
"tabWidth": 2,
"printWidth": 100,
"plugins": ["prettier-plugin-tailwindcss"]
}

Sửa eslint.config.js (thêm 2 dòng duy nhất)
JavaScript// Thêm dòng import này lên đầu cùng các import khác
import tailwind from 'eslint-plugin-tailwindcss'

// Trong phần extends của src/\*_/_.{ts,tsx} thêm 1 dòng:
...tailwind.configs['flat/recommended'],

→ File eslint.config.js hoàn chỉnh sẽ có đoạn extends giống thế này:
JavaScriptextends: [
js.configs.recommended,
...tseslint.configs.recommended,
reactRefresh.configs.vite,
prettierConfig,
...tailwind.configs['flat/recommended'], // ← thêm dòng này
],

Xong!
