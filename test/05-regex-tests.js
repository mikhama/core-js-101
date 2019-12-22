const assert = require('assert');
const tasks = require('../src/05-regex-tasks');
it.optional = require('../extensions/it-optional');

describe('05-regex-tasks', () => {
  it.optional('getRegexForGuid should match the valid GUID', () => {
    const result = tasks.getRegexForGuid();

    [
      '{3F2504E0-4F89-41D3-9A0C-0305E82C3301}',
      '{21EC2020-3AEA-4069-A2DD-08002B30309D}',
      '{0c74f13f-fa83-4c48-9b33-68921dd72463}',
    ].forEach((str) => {
      assert(
        result.test(str),
        `regex does not match '${str}'`,
      );
    });

    [
      '{D44EF4F4-280B47E5-91C7-261222A59621}',
      '{D1A5279D-B27D-4CD4-A05E-EFDH53D08E8D}',
      '{5EDEB36C-9006-467A8D04-AFB6F62CD7D2}',
      '677E2553DD4D43B09DA77414DB1EB8EA',
      '0c74f13f-fa83-4c48-9b33-68921dd72463',
      'The roof, the roof, the roof is on fire',
    ].forEach((str) => {
      assert(
        result.test(str) === false,
        `regex matches '${str}'`,
      );
    });
  });


  it.optional('getRegexForPitSpot should be implemeted according to task', () => {
    const result = tasks.getRegexForPitSpot();

    ['pit', 'spot', 'spate', 'slap two', 'respite'].forEach((str) => {
      assert(
        result.test(str),
        `regex does not match '${str}'`,
      );
    });

    [' pt', 'Pot', 'peat', 'part'].forEach((str) => {
      assert(
        result.test(str) === false,
        `regex matches '${str}'`,
      );
    });

    assert(
      result.source.length < 13,
      `regexp length should be < 13, actual ${result.source.length} `,
    );
  });


  it.optional('getPasswordValidator should return the password validator', () => {
    const result = tasks.getPasswordValidator(6);

    [
      'password',
      'PASSWORD',
      'pa55word',
      'PASSW0RD',
      'Pa55',
      'Pa__W0rd',
      '   PassW0rd    ',
    ].forEach((str) => {
      assert(
        !result.test(str),
        `Regex matches '${str}'`,
      );
    });

    [
      'PA55word',
      'passW0rd',
      'pa55W0rd',
      'pa55wordPASSW0RD',
      'a1A2b3B4',
    ].forEach((str) => {
      assert(
        result.test(str),
        `Regex does not match '${str}'`,
      );
    });

    assert(
      !'abcdABCD1234'.match(tasks.getPasswordValidator(20)),
      'Password validator do not validate minLength restriction',
    );
  });
});
