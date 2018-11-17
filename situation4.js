document.querySelector('#form').addEventListener('submit', function (e) {
    console.log('e.preventDefault()로 submit의 기본 동작을 막습니다.');
    e.preventDefault();
});

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        title: '',
        type: '지출',
        amount: '',
        content: '',
        date: moment().format('YYYY-MM-DD'),
        has_receipt: 0,
        list: [],
        id: 1
    },
    methods: {
        add: function (e) {
            if (e) {
                e.preventDefault();
            }

            if (!document.getElementById('form').checkValidity()) {
                document.getElementById('form').reportValidity();
                throw '폼 검증 실패';
            }

            var item = {
                id: this.id,
                amount: this.amount,
                type: this.type,
                date: this.date,
                has_receipt: (this.type === '지출') ? this.has_receipt  : 0
            };

            this.list.push(item);
            this.name = '';
            this.amount = '';
            document.querySelector('[name=name]').focus();
            this.id++;

            // todo 정렬
        },
        remove: function (id) {
            var newList = [];
            this.list.forEach(function (item) {
                if (item.id !== id) {
                    newList.push(item);
                }
            });
            this.list = newList;
        },
        random: function () {
            var that = this;

            this.title = this.title || '제목';
            this.type = ['지출', '수입', '가지급'][parseInt(Math.random() * 100) % 3];
            this.name = this.name || '철수';
            this.content = this.content || this.type + ' ' + this.id;
            this.amount = parseInt(Math.random() * 100) * 100;
            this.has_receipt = [0, 1][parseInt(Math.random() * 100) % 2];

            setTimeout(function () {
                that.add();
            }, 100)
        }
    }
});