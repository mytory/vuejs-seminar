document.querySelector('#form').addEventListener('submit', function (e) {
    console.log('e.preventDefault()로 submit의 기본 동작을 막습니다.');
    e.preventDefault();
});

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        amount: '',
        list: [],
        id: 1
    },
    methods: {
        add: function (e) {
            e.preventDefault();
            var item = {
                id: this.id,
                name: this.name,
                amount: this.amount
            };
            this.list.push(item);
            this.name = '';
            this.amount = '';
            document.querySelector('[name=name]').focus();
            this.id++;
        },
        remove: function (id) {
            var newList = [];
            this.list.forEach(function (item) {
                if (item.id !== id) {
                    newList.push(item);
                }
            });
            this.list = newList;
        }
    }
});