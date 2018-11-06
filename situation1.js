// 윈도우는 `Windows 10`, iOS는 `OS X`, 안드로이드는 `Android 8.0` 형식으로 os 값이 찍힌다.
console.log(browserDetect());

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        account_name: ''
    },
    watch: {
        name: function (value) {
            this.account_name = value;
        }
    }
});