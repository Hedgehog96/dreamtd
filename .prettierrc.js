/*
 * @Description: 
 * @Author: Bugmakerrrr
 * @Date: 2021-04-14 21:54:15
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-09 11:03:26
 */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};