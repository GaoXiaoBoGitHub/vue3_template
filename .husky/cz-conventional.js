module.exports = {
  prompter: function (cz, commit) {
    // Let's ask some questions of the user
    // so that we can populate our commit
    // template.
    //
    // See inquirer.js docs for specifics.
    // You can also opt to use another input
    // collection library if you prefer.
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
      commit(answers.type);
    });
  },
};
