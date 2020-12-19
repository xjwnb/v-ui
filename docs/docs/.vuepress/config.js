module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    sidebar: [
      {
        title: "介绍",
        path: "/index/",
        collapsable: false,
        sidebarDepth: 1, 
      },
      {
        title: "组件",
        path: "/components",
        collapsable: true,
        children: [
          {
            title: "按钮 Button",
            path: "/components/button"
          },
          {
            title: "输入框 Input",
            path: "/components/input"
          },
          {
            title: "单选框 Radio",
            path: "/components/radio"
          },
          {
            title: "表单 Form",
            path: "/components/form"
          },
          {
            title: "布局容器 Container",
            path: "/components/container"
          },
          {
            title: "多选框 Checkbox",
            path: "/components/checkbox"
          },
          {
            title: "加载 Loading",
            path: "/components/loading"
          },
          {
            title: "图片 Image",
            path: "/components/image"
          },
          {
            title: "消息提示 Message",
            path: "/components/message"
          },
          {
            title: "导航菜单 NavMenu",
            path: "/components/navmenu"
          },
          {
            title: "文字提示 Tooltip",
            path: "/components/tooltip"
          },
          {
            title: "分割线 Divider",
            path: "/components/divider"
          },
          {
            title: "置顶 BackTop",
            path: "/components/backtop"
          },
          {
            title: "进度条 Progress",
            path: "/components/progress"
          },
          {
            title: "表格 Table",
            path: "/components/table"
          },
          {
            title: "标签 Tag",
            path: "/components/tag"
          },
        ]
      }
    ]
  },
};
