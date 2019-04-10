let app = new Vue({
    el: '#app',
    data: {
        tableContent: [],
        active: "active",
        empty: "hide",
        firstElement: {},
        subHeaderText: [],
        tableHeader: [],
    },
    mounted() {
        this.tableContent = data.item;
        this.firstElement = data.firstElement;
        this.tableHeader = data.headerLine;
        this.subHeaderText = data.subHeader;
    },

});
