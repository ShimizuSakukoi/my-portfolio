import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 GitHub Pages 项目站点需要加仓库名作为基础路径
  //    这样所有资源路径（CSS/JS/图片）才能正确加载
  base: '/my-portfolio/',
})
