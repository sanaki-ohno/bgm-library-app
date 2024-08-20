import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  publicDir: 'public', // 静的ファイルのディレクトリを明示的に指定
  server: {
    open: true, // 開発サーバー起動時にブラウザを自動で開く
    host: true, // ネットワーク上からのアクセスを許可
  },
});
