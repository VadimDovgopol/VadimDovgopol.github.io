let app = new Vue({
    el: '#app',
    data: {
        tableContent: [],
        tableHeader: [],
    },
    mounted() {
        $.getJSON("./table.json", data => {
            this.tableContent = data.item;
            this.tableHeader = data.table;
        });
    },
    metod
});