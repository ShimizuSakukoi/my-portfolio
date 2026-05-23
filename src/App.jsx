import './App.css'
// 👇 头像图片放在 public/avatar.svg，想换图直接替换那个文件就行

function App() {
  // 👆 App 是这个页面的"主组件"（可以理解成"整个页面的模板"）

  // 👇 写在 return 外面的是"逻辑代码"，return 里面的是"界面代码"
  // 这里用一个数组存项目信息，方便以后增删改
  const projects = [
    {
      title: '个人作品集网站',
      desc: '就是你现在看到的这个页面。用 React + Vite 构建，部署在 GitHub Pages 上。',
      url: 'https://github.com/ShimizuSakukoi/my-portfolio',
    },
    {
      title: 'my-site 跳转页',
      desc: '我的第一个网页项目，简单的 HTML/CSS 页面，部署在 GitHub Pages。',
      url: 'https://github.com/ShimizuSakukoi/my-site',
    },
  ]

  // 👇 return 里的内容就是浏览器上能看到的东西

  return (
    <>
      {/* ========== 第一块：头像 + 名字 + 简介 ========== */}
      <section id="hero">
        {/* 头像：图片放在 public/avatar.svg，换图直接替换那个文件 */}
        <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="头像" className="avatar" />

        {/* h1 是最大号标题 */}
        <h1>清水咲く恋</h1>

        {/* p 是段落文字，className="tagline" 是用来写 CSS 的钩子 */}
        <p className="tagline">前端学习者 · React 入门中</p>
      </section>

      {/* ========== 第二块：技能标签 ========== */}
      <section id="skills">
        {/* 小标题 */}
        <h2>技能</h2>

        {/* 技能标签列表 */}
        <div className="skill-list">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git'].map(
            (skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            )
          )}
        </div>

        {/* 工具小标题：比 h2 小一级 */}
        <h3 className="sub-heading">工具</h3>

        {/* 工具标签列表 */}
        <div className="skill-list">
          {['VS Code', 'AI 辅助开发', 'GitHub', 'MCP 配置'].map(
            (tool) => (
              <span key={tool} className="tool-tag">
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      {/* ========== 第三块：项目卡片 ========== */}
      <section id="projects">
        <h2>项目</h2>

        <div className="project-list">
          {/*
            用 .map() 把 projects 数组里的每个项目对象
            变成一张卡片。project 是当前循环的项目对象。
            跟 Python 的:
              for project in projects:
                  <div>project['title']</div>
            一个意思
          */}
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              {/* 卡片里的项目标题 */}
              <h3 className="project-title">{project.title}</h3>

              {/* 卡片里的项目描述 */}
              <p className="project-desc">{project.desc}</p>

              {/* 卡片底部的链接：点击跳转到 GitHub */}
              {/* target="_blank" 是新标签页打开，rel="noreferrer" 是安全属性 */}
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                查看代码 →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 第四块：底部联系方式 ========== */}
      <footer id="contact">
        {/* 一条分割线 */}
        <hr className="divider" />

        {/* footer 是 HTML 原生标签，专门表示页脚 */}
        <p className="contact-text">
          {/* GitHub 链接 */}
          <a
            href="https://github.com/ShimizuSakukoi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="separator">|</span>
          {/* 邮箱：mailto: 开头会自动调起邮件客户端 */}
          <a href="mailto:tongshenzuigao@hotmail.com">Email</a>
        </p>

        {/* 版权声明，&copy; 是 © 符号的 HTML 写法 */}
        <p className="copyright">&copy; 2026 清水咲く恋</p>
      </footer>
    </>
  )
}

// 👇 把这整个组件"交出去"，让别的文件（main.jsx）能够使用它
export default App
