// 引入必要的LSE模块
const { Event, World, Player } = require('lse');

// 监听玩家死亡事件
Event.on('playerDie', (event) => {
    const player = event.player; // 获取死亡玩家对象

    // 设置玩家死亡不掉落
    player.setKeepInventory(true);

    // 输出日志，表示插件已生效
    console.log(`[KeepInventory] 玩家 ${player.name} 死亡，已启用死亡不掉落。`);
});

// 插件启用时的初始化代码
function onEnable() {
    console.log('[KeepInventory] 插件已启用，死亡不掉落功能已激活。');
}

// 插件禁用时的清理代码
function onDisable() {
    console.log('[KeepInventory] 插件已禁用，死亡不掉落功能已关闭。');
}

// 导出插件的启用和禁用函数
module.exports = {
    onEnable,
    onDisable
};