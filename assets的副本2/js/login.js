$(function() {
    // 点击“去注册账号”的链接
    $('#link_reg').on('click', function() {
        $('.login-box').hide();
        $('.reg-box').show()

    })

    $('#link_login').on('click', function() {
        $('.reg-box').hide();
        $('.login-box').show()

    });
    // 丛layui中获取form对象
    var form = layui.form;
    var layer = layui.layer
        // 通过for.verify（）函数自定义校验规则
    form.verify({
        psw: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function(value) {
            // 通过形参拿到的是确认密码框的内容，然后进行一次等于判读，如果判读失败，就return一个提示消息
            var psd = $('.reg-box input[name="password"]').val()
            if (psd !== value) {
                return alert('密码不一致')
            }
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit', function(e) {
        e.preventDefault()
        var data = {
            username: $('.reg-box input[name="username"]').val(),
            password: $('.reg-box input[name="password"]').val(),
            repassword: $('.reg-box input[name="repassword"]').val()
        }
        $.post('/api/reg', data, function(res) {
            // console.log(res);
            console.log(res);
            if (res.code !== 0) {
                return layer.msg(res.message);
            }
            layer.msg('注册成功')
            $('#link_login').click()
        })
    })

    // 监听登录表单的事件
    $('#form_login').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: $(this).serialize(),
            success: function(res) {
                if (res.code !== 0) {
                    return layer.msg('登录失败')
                }
                layer.msg('登录成功');
                // 将登录成功得到的token字符串保存到localstorage中
                localStorage.setItem('token', res.token)
                    // console.log(res.token);
                location.href = '../../home/index.html'
            }
        })
    })
})