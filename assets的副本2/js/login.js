$(function() {
    $('#debglu').on('click', function() {
        $('.login_denglu').hide()
        $('.login_zhuce').show()
    })
    $('#zhuce').on('click', function() {
        $('.login_zhuce').hide()
        $('.login_denglu').show()
    })
})