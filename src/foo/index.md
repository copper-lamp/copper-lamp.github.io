
# [LSE] CopperLamp - 轻量化高版本生电辅助插件

## 前置组件
- **LeviLamina**: [https://github.com/LiteLDev/LeviLamina](https://github.com/LiteLDev/LeviLamina)
- **legacy-script-engine-quickjs**: [https://github.com/LiteLDev/LegacyScriptEngine](https://github.com/LiteLDev/LegacyScriptEngine)



## 功能介绍

### `village` - 显示村庄可视化
- `village show` - 开启所有显示
- `village gui` - 村庄显示面板

### `clp` (CLplayer) - 假人功能
- `clp gui` - 假人控制面板
- `clp <name> spawn/despawn` - 假人上下线
- `clp op <IsOpen: Boolean>` - 是否需要管理员权限

### `fcc` (free camera for CopperLamp) - 自由视角
- `fcc` - 启用/关闭自由视角

### `spawn` - 统计实体
- `spawn self` - 统计自身加载范围内的实体
- `spawn all` - 统计所有加载区块的实体

### `hsa` - 显示生物生成点
- `hsa <IsOpen: Boolean>` - 启用或关闭显示

### `hud` - 在屏幕显示一些信息
- `hud gui <mspt,tps,base,village>` - 显示
- `hud list gui` - 简单排行榜

### `log` - 显示部分游戏运行数据
- `log levelseed` - 打印存档种子
- `log pt` - 打印玩家所在区块的计划刻信息
- `log rpt` - 打印玩家所在区块的随机计划刻信息

### `slime` - 查看史莱姆区块
- `slime <IsOpen: Boolean>` - 开启或关闭显示

### `tick` - 加速游戏运行
- `tick rate <int>` - 设置游戏运行速率
- `tick free` - 取消所有 tick 操作
- `tick step` - 加速步进，并在步进结束后暂停游戏运行

### `clrule` - 开启或关闭插件功能
- `clrule nimblebox`

### `clip` (cl-projection) - 投影
- `clip gui` - 打开投影菜单
- `clip show` - 投影逐层绘制
- `clip up` - 投影下一层
- `clip down` - 投影上一层
