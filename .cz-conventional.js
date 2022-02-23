const chalk = require('chalk');

const headerLength = function (answers) {
  return answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0);
};

const maxSummaryLength = function (answers) {
  return 100 - headerLength(answers);
};

module.exports = {
  prompter: function (cz, commit) {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择本次变更的提交类型:',
        choices: [
          { value: 'feat', name: '✨功能:  新增功能' },
          { value: 'fix', name: '🐛修复:  修复Bug' },
          { value: 'docs', name: '📝文档:  变更文档' },
          { value: 'style', name: '💄格式:  代码格式(空格, 分号等格式修复)' },
          { value: 'refactor', name: '♻️ 重构:  代码重构(不包括 修复Bug、新增功能)' },
          { value: 'perf', name: '⚡️性能:  性能优化' },
          { value: 'test', name: '✅测试:  添加、修改测试用例' },
          { value: 'chore', name: '🔧工具:  开发工具变动(构建、脚手架工具等)' },
          { value: 'revert', name: '⏪回滚:  回滚Commit' },
        ],
        default: 'feat',
      },
      {
        type: 'input',
        name: 'scope',
        message: function (answers) {
          const issues = answers.type === 'fix' ? '/禅道编号' : '';
          return `此更改的范围(组件名/文件名${issues}): (回车跳过)`;
        },
      },
      {
        type: 'input',
        name: 'subject',
        message: function (answers) {
          return `请输入一个简短的变更描述(最多${maxSummaryLength(answers)}个字符):`;
        },
        validate: function (subject, answers) {
          if (subject.length == 0) return '不要走，简短描述一定要填!!!';
          if (subject.length > maxSummaryLength(answers)) return `文字太多了，文字长度要 ≤${maxSummaryLength(answers)} 哦!!!`;
          return true;
        },
        transformer: function (subject, answers) {
          const color = subject.length <= maxSummaryLength(answers) ? chalk.cyan : chalk.red;
          return color(`(${subject.length}) ${subject}`);
        },
      },
      {
        type: 'input',
        name: 'body',
        message: '填写更加详细的变更描述，使用"|"换行: (回车跳过)\n',
      },
    ]).then(function (answers) {
      const { type, subject, body } = answers;
      const scope = answers.scope ? '(' + answers.scope + ')' : '';
      const issues = answers.issues ? '(' + answers.issues + ')' : '';
      const head = type + scope + ': ' + subject + issues;
      commit([head, body].filter((x) => x).join('\n\n'));
    });
  },
};
