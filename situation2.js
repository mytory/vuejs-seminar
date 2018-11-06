var app = new Vue({
    el: '#app',
    data: {
        price: 50000,
        period: 1,
        count: 1,
        donation: 3000
    },
    computed: {
        amount: function () {
            return this.price * this.period * this.count + parseInt(this.donation);
        }
    }
});