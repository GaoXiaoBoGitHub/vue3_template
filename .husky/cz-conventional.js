module.exports = {
  prompter: function (cz, commit) {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: "Select the type of change that you're committing:",
        choices: [
          { value: '✨特性', name: '特性:    一个新的特性' },
          { value: '🐛修复', name: '修复:    修复一个Bug' },
          { value: '📝文档', name: '文档:    变更的只有文档' },
        ],
        default: '✨特性',
      },
    ]).then(function (answers) {
      commit('fix(all): test');
    });
  },
};
