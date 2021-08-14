//每次调用$.get()或$.ajax()的时候，会先调用ajaxPrefilter这个函数，在这个函数中，可以拿到我们Ajax提供的内置对象
$.ajaxPrefilter(function(options) {
    // console.log(options.url);
    options.url = 'http://www.liulongbin.top:3008' + options.url
    console.log(options.url)
})