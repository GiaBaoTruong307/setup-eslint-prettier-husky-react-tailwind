# Setup ESLint + Prettier + Husky (chuẩn 2025 – chỉ làm 1 lần là xong mãi mãi)

Dành cho dự án **Vite + React 19 + TypeScript** (cách này chạy ngon với cả React 18 nữa)

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

Xong!
