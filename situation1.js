// 윈도우는 `Windows 10`, iOS는 `OS X`, 안드로이드는 `Android 8.0` 형식으로 os 값이 찍힌다.
console.log(browserDetect());

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        account_name: '',
        method: 'card'
    },
    watch: {
        name: function (value) {
            this.account_name = value;
        }
    },
    methods: {
        getOsType: function () {
            var detected = browserDetect();
            if (detected.os.indexOf('Windows') > -1) {
                return 'Windows';
            }
            if (detected.os.indexOf('OS X') > -1) {
                return 'OS X';
            }
            if (detected.os.indexOf('Android') > -1) {
                return 'Android';
            }
            return 'others';
        }
    },
    created: function () {
        switch(this.getOsType()) {
            case 'Windows':
                this.method = 'card';
                break;
            case 'OS X':
            case 'Android':
                this.method = 'card_mobile';
                break;
            default:
                this.method = 'account';
        }
    }
});