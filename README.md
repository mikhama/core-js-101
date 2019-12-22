# Core JS 101

## Task
The task is to implement functions on different Core JS topics. There are nine modules with different tasks. Each module consists of tasks for specified topic:

1. Strings
2. Numbers
3. Arrays
4. Date
5. Regexp
6. Objects
7. Promises
8. Conditions and Loops
9. Functions and Closures

**Active usage of [documentation](https://developer.mozilla.org/en-US/) is strongly recommended!**

## Prepare and test
1. Install Node.js
2. Fork this repository: https://github.com/mikhama/core-js-101/
3. Clone your newly created repo: `https://github.com/<%your_github_username%>/core-js-101/`
4. Go to folder `core-js-101`
5. To install all dependencies use `npm install`
6. Each task is usually a regular function:
    ```javascript
      /**
       * Returns the result of concatenation of two strings.
      *
      * @param {string} value1
      * @param {string} value2
      * @return {string}
      *
      * @example
      *   'aa', 'bb' => 'aabb'
      *   'aa',''    => 'aa'
      *   '',  'bb'  => 'bb'
      */
      function concatenateStrings(value1, value2) {
        throw new Error('Not implemented');
      }
    ```
    Read the task description in the comment above the function. Try to understand the idea. You can see the tests prepared if you don't understand it.
7. Write your code in `task/*.js`.

    Remove the throwing error line from function body:
    ```javascript
        throw new Error('Not implemented'); 
    ```
    Implement the function by any way and verify your solution by running tests until the failed test become passed (green).
8. Run `npm test` in command line. If everything is OK you can try to resolve the next task.
9. You will see the number of passing and pending tests: `101` of passing tests is equal to `100` in score.

## Submit to [rs app](https://app.rs.school/)
1. Open [rs app](https://app.rs.school/) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2019-q3)
3. Select your task (Core JS 101)
4. Press submit button and enjoy

## Notes
* We recommend you to use nodejs of version 10 or lower. If you using any of features that does not supported by node `v10`, score won't be submitted.
* Please be sure that each of your test in limit of 30sec.
* You will get 0 (zero) if you have any eslint's errors or warnings.

___
The task based on https://github.com/rolling-scopes-school/js-assignments.
