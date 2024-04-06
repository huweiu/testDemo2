const path = require('path')
module.exports = {
  rootDir: path.resolve(__dirname),
  preset: '@vue/cli-plugin-unit-jest',
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.(js|vue)",
    "!src/main.js",
    "!src/router/index.js",
    "!**/node_modules/**"
  ],
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 别名设置
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    "swiper/css": "swiper/swiper.min.css",
    // "swiper/vue": "swiper/vue/swiper-vue.js",
  },
  // preset: 'js-jest',
  testEnvironment: 'jsdom',
  // 测试文件
  // testMatch: ['<rootDir>/src/__tests__/**/*.spec.(ts|tsx|js)'],
  // testPathIgnorePatterns: ['/node_modules/'],  
  transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7)"], 
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest', {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-typescript']
        ],
        plugins: ['@vue/babel-plugin-jsx']
      },      
    ],
    
  }
}
