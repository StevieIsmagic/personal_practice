// NOTE: If you have a variable declared anywhere within a function scope,
// only its DECLARATION is hoisted to the very top, not its INITIALIZATION.

/* Function Declaration -

  function alertName() {
    alert('Hii World');
  }

*/

/* Function Expression -
  the name 'alertName' gets hoisted,
  but the implementation does now

  let alertName = function() {
    alert('Hii World');
  }
*/
