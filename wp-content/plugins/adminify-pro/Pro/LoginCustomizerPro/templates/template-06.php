<style media="screen" class="wp-adminify-style-wp">
    body.wp-adminify-login-customizer .wp-adminify-form-container {
        position: relative;
        z-index: 1;
    }

    body.wp-adminify-login-customizer .wp-adminify-form-container:before {
        content: '';
        background: linear-gradient(250.45deg, #CD62FF 2.65%, #0347FF 55.08%);
        height: 100%;
        width: 100%;
        left: -45%;
        bottom: 0;
        position: absolute;
        z-index: -1;
        transform: skew(-25deg, 0deg);
    }

    body.wp-adminify-login-customizer #login a.wp-adminify-logo-login-link:focus {
        border: 0;
        box-shadow: none;
        outline: 0;
    }

    body.wp-adminify-login-customizer #loginform {
        background-color: #fff;
        border: 0;
        border-radius: 8px;
        box-shadow: 0px 2px 54px rgba(20, 20, 42, 0.1);
        padding-bottom: 35px;
    }

    body.wp-adminify-login-customizer #loginform label {
        color: #4E4B66;
    }

    body.wp-adminify-login-customizer #loginform input,
    body.wp-adminify-login-customizer #loginform textarea,
    body.wp-adminify-login-customizer #loginform select {
        background: #F1F1F3;
        border: 0;
        border-radius: 6px;
        box-shadow: none;
        color: #4E4B66;
        font-size: 14px;
        line-height: 16px;
        height: 36px;
    }

    body.wp-adminify-login-customizer #loginform textarea {
        height: auto;
    }

    body.wp-adminify-login-customizer #loginform input[type="submit"] {
        background-color: #0347FF;
        color: #fff;
        padding: 0 15px;
    }

    body.wp-adminify-login-customizer #loginform input[type="checkbox"],
    body.wp-adminify-login-customizer #loginform input[type="radio"] {
        height: 14px;
        width: 14px;
        border-radius: 4px;
        min-width: inherit;
    }

    body.wp-adminify-login-customizer #loginform .button.wp-hide-pw {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: #4E4B66;
        font-size: 16px;
        height: 36px;
        margin-top: 0;
    }

    body.wp-adminify-login-customizer #login #wp-adminify-lost-password {
        color: #0347FF;
        font-size: 14px;
        font-weight: 700;
    }

    body.wp-adminify-login-customizer #login #backtoblog a {
        background: #FFF;
        box-shadow: 0px 2px 35px rgba(78, 75, 102, 0.05);
        border-radius: 6px;
        color: #4E4B66;
        display: inline-block;
        font-size: 13px;
        line-height: 20px;
        left: 30px;
        top: 30px;
        padding: 8px 10px;
        position: fixed;
    }
</style>
