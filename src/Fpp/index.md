
## 💬 常见问题

<details>
<summary><strong>Q: 安装插件后服务器无法启动？</strong></summary>

A: 请按顺序检查：
1. 确保已安装 [LeviLamina](https://github.com/LiteLDev/LeviLamina) 框架
2. 确认已安装 [legacy-script-engine-quickjs](https://github.com/LiteLDev/LegacyScriptEngine) 引擎
3. 检查插件文件是否放置在正确的 `plugins` 目录
4. 查看服务器日志中的具体报错信息
</details>

<details>
<summary><strong>Q: 假人(clp)功能无法正常使用？</strong></summary>

A: 尝试以下解决方案：
1. 执行 `clp op false` 关闭权限验证（测试环境）
2. 确认假人名称不含特殊字符
3. 检查玩家是否拥有 OP 权限
4. 使用 `clp gui` 通过图形界面操作
</details>

<details>
<summary><strong>Q: HUD信息显示异常？</strong></summary>

A: 可能原因：
1. 参数错误：确认使用 `hud gui mspt,tps` 正确格式
2. 版本冲突：确保所有组件均为最新版本
3. 渲染冲突：尝试关闭其他显示类插件
4. 使用 `clrule` 重置相关功能规则
</details>

<details>
<summary><strong>Q: 游戏加速(tick)功能无效？</strong></summary>

A: 操作建议：
1. 确认已输入完整命令 `tick rate 20`（默认值）
2. 过高值可能导致卡顿，建议不超过 `100`
3. 使用 `tick free` 解除加速状态
4. 需要OP权限执行
</details>

<details>
<summary><strong>Q: 如何反馈BUG或建议？</strong></summary>

A: 请通过以下渠道：
1. GitHub Issues： [插件仓库地址]
2. 官方QQ群： [群号]
3. 邮件联系： support@copperlamp.org
4. 反馈时请附上：
   - 服务器日志
   - 复现步骤
   - 相关截图/视频
</details>

## 🐛 已知问题
| 问题描述 | 影响版本 | 临时解决方案 |
|———|———|————|
| 投影(clip)多层渲染崩溃 | v1.2.0以下 | 使用 `clip show` 单层渲染 |
| 空手开盒与部分插件冲突 | 全版本 | 禁用其他实体交互插件 |
| 自由视角(fcc)坐标偏移 | v1.1.5 | 退出重进世界 |
| 史莱姆区块(slime)显示延迟 | 全版本 | 等待区块加载完成 |

> 📢 **问题追踪**：最新问题状态请查看 [GitHub Projects](https://github.com/.../projects/1)
