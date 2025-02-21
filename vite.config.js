import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtoviewport from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // 'process.env': {
    //   'VITE_APP_BASE_API': '/api'
    // }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/variable.scss";'
      }
    },
    postcss: {
      plugins: [
        postcsspxtoviewport({
          // 要转化的单位
          unitToConvert: 'px',
          // UI设计稿的大小
          viewportWidth: 2560,
          // 转换后的精度
          unitPrecision: 2,
          // 转换后的单位
          viewportUnit: 'vw',
          // 字体转换后的单位
          fontViewportUnit: 'vw',
          // 能转换的属性，*表示所有属性，!border表示border不转
          propList: ['*'],
          // 指定不转换为视窗单位的类名，
          selectorBlackList: ['ignore-'],
          // 最小转换的值，小于等于1不转
          minPixelValue: 1,
          // 是否在媒体查询的css代码中也进行转换，默认false
          mediaQuery: false,
          // 是否转换后直接更换属性值
          replace: true,
          // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          exclude: [],
          // 包含那些文件或者特定文件
          include: [],
          // 是否处理横屏情况
          landscape: false
        }),
      ]
    }
  },
  build: {
    target: 'es2020'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  server: {
    // 服务器主机名
    host: '0.0.0.0',
    // host: 'localhost',
    // 指定开发服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口
    port: 3000,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: true,
    // 自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://192.168.2.7:8000/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '/')
      }
    }
  }
})
