/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
 function checkSpam(str, word) {

   str = str.toUpperCase();

   if ( str.includes('1xbet'.toUpperCase()) || str.includes('xxx'.toUpperCase())) {
     return true;
   }
   else {
     return false;
   }

 }
