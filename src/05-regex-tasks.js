/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions            *
 *                                                                                           *
 * You can use the next web site in order to check and build regexps:                        *
 * https://regexr.com                                                                        *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the regexp that matches a GUID string representation
 * '{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}',
 * where X is hexadecimal digit (0,1,2...,9,A,a,B,b,C,c,D,d,F,f)
 *
 * See more details: https://en.wikipedia.org/wiki/Globally_unique_identifier
 *
 * Match :
 *   '{3F2504E0-4F89-41D3-9A0C-0305E82C3301}'
 *   '{21EC2020-3AEA-4069-A2DD-08002B30309D}'
 *   '{0c74f13f-fa83-4c48-9b33-68921dd72463}'
 *
 *  Do not match:
 *   '{D44EF4F4-280B47E5-91C7-261222A59621}'
 *   '{D1A5279D-B27D-4CD4-A05E-EFDH53D08E8D}'
 *   '{5EDEB36C-9006-467A8D04-AFB6F62CD7D2}'
 *   '677E2553DD4D43B09DA77414DB1EB8EA'
 *   '0c74f13f-fa83-4c48-9b33-68921dd72463'
 *   'The roof, the roof, the roof is on fire'
 *
 * @return {RegExp}
 */
function getRegexForGuid() {
  throw new Error('Not implemented');
}

/**
 * Returns the regexp that matches all the strings from first column
 * but of them from the second
 *
 * Match :                 Do not match:
 * -----------             --------------
 *  'pit'                     ' pt'
 *  'spot'                    'Pot'
 *  'spate'                   'peat'
 *  'slap two'                'part'
 *  'respite'
 *
 * NOTE : the regex length should be < 13
 *
 * @return {RegExp}
 *
 */
function getRegexForPitSpot() {
  throw new Error('Not implemented');
}

/**
 * Returns the password validator regex.
 * Regex will validate a password to make sure it meets the follwing criteria:
 *  - At least specified characters long (argument minLength)
 *  - Contains a lowercase letter
 *  - Contains an uppercase letter
 *  - Contains a number
 *  - Valid passwords will only be alphanumeric characters (+ underscore).
 *
 * @param {number} minLength
 * @return {Regex}
 *
 * @example
 *   let validator = getPasswordValidator(6);
 *   'password'.match(validator)  => false
 *   'Pa55Word'.match(validator)  => true
 *   'PASSw0rd'.match(validator)  => true
 *   'PASSW0RD'.match(validator)  => false
 *   'Pa55'.match(validator) => false
 */
function getPasswordValidator(/* minLength */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
