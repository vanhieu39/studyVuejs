new Vue({
    el: "#app",
    data: {
        title: "Chao Hieu"
    },
    methods: {
        changeValue(event) {
            this.title = event.target.value
        }
    },
})