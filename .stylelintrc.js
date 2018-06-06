/** ------------------------------------------------------------------------------------------------
 *  @filename  .stylelintrc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description  https://stylelint.io/user-guide/configuration/
 ** --------------------------------------------------------------------------------------------- */

module.exports = {
	extends: '@brikcss/stylelint-config-css',
	rules: {
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['host']
			}
		]
	}
};
