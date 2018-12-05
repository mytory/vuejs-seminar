new Vue({
    el: '#app',
    data: {
        type: '지출',
        name: '',
        amount: '',
        id: 0,
        list: [],
        isModal: false
    },
    computed: {
        sumOfPayment: function () {
            return this.sum('지출');
        },
        sumOfIncome: function () {
            return this.sum('수입');
        },
        sumOfPrepayment: function () {
            return this.sum('가지급');
        },
        result: function () {
            return this.sumOfPayment - this.sumOfIncome - this.sumOfPrepayment;
        }
    },
    methods: {
        sum: function (type) {
            var sum = 0;

            this.list.forEach(function (item) {
                if (item.type === type) {
                    sum += item.amount;
                }
            });

            return sum;
        },
        add: function (event) {

            event.preventDefault();

            if (this.name === '' || this.amount === '') {
                alert('데이터를 입력해 주세요.');
                document.querySelector('#name').focus();
                return false;
            }

            this.list.push({
                id: this.id++,
                type: this.type,
                name: this.name,
                amount: this.amount
            });

            this.name = '';
            this.amount = '';

            this.list.sort(function (a, b) {
                if (a.type > b.type) {
                    return 1;
                }
                if (a.type < b.type) {
                    return -1;
                }
                if (a.type === b.type) {
                    return 0;
                }
            });

        },
        random: function (e) {
            var index = parseInt(Math.random() * 10) % 3;
            var types = ['지출', '가지급', '수입'];
            this.type = types[index];
            this.name = '홍길동' + (this.id + 1);
            this.amount = (this.id + 1) * 1000;
            this.add(e);
        },
        remove: function (idToRemove) {
            var newList = [];

            this.list.forEach(function (item) {
                if (item.id !== idToRemove) {
                    newList.push(item);
                }
            });

            this.list = newList;
        },
        modify: function (idToModify) {
            var item = this.list.find(function (item) {
                return (item.id === idToModify);
            });

            this.type = item.type;
            this.name = item.name;
            this.amount = item.amount;

            this.remove(idToModify);
        }
    }
});


