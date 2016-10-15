'use strict';

function reverseWords(words) {
  let messageArray = words.split(' ');
  return messageArray.reverse().join(' ');
}

  let message = 'find you will pain only go you recordings security the into if';
  console.log(reverseWords(message));
