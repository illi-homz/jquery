'use strict';


function getTweets(search) {
  return $.ajax({
    url: 'https://jsonplaceholder.typicode.com/comments/',
    data: {
      postId: search
    },
    dataType: 'json'
  }).promise()
}


$.when(getTweets(2), getTweets(3)).then((data1, data2) => {
  console.log(data1)
  console.log(data2)
})



// $('p.box').each(function( i, el ) {
//   $(this).delay(1000 * i++).fadeOut(1000)
// }).promise().then(() => {
//   console.log('hello')
// })



// $.searchTwitter = function( search ) {
//   // const dfd = $.Deferred()
//   return $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/comments/',
//     data: {
//       postId: search
//     },
//     dataType: 'json',
//     // success: dfd.resolve
//     // success: function( results ) {
//     //   console.log(results)
//     // }
//   }).promise()
// }
//
//
// $.searchTwitter(2).then(data => {
//   console.log(data)
// })
//   .catch(e => {
//     console.log('Error: ' + e)
//   })




// let myVal
//
// let setVal = function(ms) {
//   let defferred = $.Deferred()
//
//   setTimeout(function() {
//     myVal = 'my value'
//     defferred.reject()
//   }, ms)
//
//   return defferred.promise()
// }
//
// setVal(2000)
//   .then(() => {
//     console.log('all done: ' + myVal)
//   })
//   .catch(() => {
//     console.log('fail')
//   })
//   .always(() => {
//     console.log('alwais')
//   })
