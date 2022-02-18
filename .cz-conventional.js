const chalk = require('chalk');

const headerLength = function (answers) {
  return answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0);
};

const maxSummaryLength = function (answers) {
  return 118 - headerLength(answers);
};

module.exports = {
  prompter: function (cz, commit) {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择提交性质:',
        choices: [
          { value: 'feat', name: '✨功能:  新增一个功能' },
          { value: 'fix', name: '🐛修复:  修复一个Bug' },
          { value: 'docs', name: '📝文档:  变更的只有文档' },
          { value: 'style', name: '💄格式:  空格, 分号等格式修复' },
          { value: 'refactor', name: '♻️ 重构:  代码重构，注意和特性、修复区分开' },
          { value: 'perf', name: '⚡️性能:  提升性能' },
          { value: 'test', name: '✅测试:  添加一个测试' },
          { value: 'chore', name: '🔧工具:  开发工具变动(构建、脚手架工具等)' },
          { value: 'revert', name: '⏪回滚:  代码回退' },
        ],
        default: '✨特性',
      },
      {
        type: 'input',
        name: 'scope',
        message: function (answers) {
          const issues = answers.type === 'fix' ? '/禅道编号' : '';
          return `此更改的范围(组件名/文件名${issues}): (按回车键跳过)`;
        },
      },
      {
        type: 'input',
        name: 'subject',
        message: function (answers) {
          return `请输入一个简短的描述(最多${maxSummaryLength(answers)}个字符):`;
        },
        validate: function (subject, answers) {
          if (subject.length == 0) return '别想走，简短描述一定要填!!!';
          if (subject.length > maxSummaryLength(answers))
            return `文字太多了，文字长度要 ≤${maxSummaryLength(answers)} 哦!!!`;
          return true;
        },
        transformer: function (subject, answers) {
          const color = subject.length > maxSummaryLength(answers) ? chalk.green : chalk.red;
          return color(`(${subject.length})\n${subject}`);
        },
      },
      {
        type: 'input',
        name: 'body',
        message: '请输入详细说明: (按回车跳过)\n',
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
