// $(window).ready(function() {
//     alert('Hello World!');
// });

// $('#btn').click(function() {
    // var newImage = $('<img>', {
    //   src: 'image.jpg',
    //   class: 'dynamic-image' 
    // });
    
//     console.log($('#h1').text());
//     $('#h1').text('Hello jQuery!');
//     $('#h1').append('&nbsp;Some extra text.');
//     $('#h1').css('color', 'red');
//     // $('#h1').append(newImage);
// });

// $("#button").click(function() {
//     $(this).addClass('clicked');
//     })
//     .find('span')
//     .attr('title', 'I am a tooltip');

$(".hidden").show('slow');

// $('selector expression').animate({
//                                  propertyName: 'value',
//                                  propertyName: 'value'
//                                  })

$('.square').animate({
    width: '200px',
    height: '200px'
})

$('.testing').animate({
    width: '+=100px',
    fontSize: '20px',
    opacity: 0.80,
}, 
3000
).css({
    color: 'white'
})