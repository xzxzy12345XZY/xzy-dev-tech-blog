import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "个人简历",
      icon: "id-card",
      prefix: "md/",
      collapsible: true,  // 🔥 这个属性让它变成可折叠组
      children: ["resume.md", "科研.md", "竞赛.md", "荣誉.md"],
    },
    {
      text: "若愚智慧养老 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      collapsible: true,  // 🔥 这个属性让它变成可折叠组
      // children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
      children: ["若愚智慧养老.md"]
    },
    {
      text: "支付商城系统 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      collapsible: true,  // 🔥 这个属性让它变成可折叠组
      // children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
      children: ["支付商城系统.md"]
    },
    {
      text: "DeepSeek RAG 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      collapsible: true,  // 🔥 这个属性让它变成可折叠组
      // children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
      children: ["评审组件.md"]
    },

  ],
});
