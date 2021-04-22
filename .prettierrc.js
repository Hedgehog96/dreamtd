/*
 * @Description: 
 * @Author: Pokkio
 * @Date: 2021-04-14 21:54:15
 * @LastEditors: Pokkio
 * @LastEditTime: 2021-04-14 21:55:11
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