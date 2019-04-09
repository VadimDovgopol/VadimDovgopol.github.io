let app = new Vue({
    el: '#app',
    data: {
        tableContent: [],
        tableHeader: [],
        active: "active",
        activeColl: null,
    },
    mounted() {
        this.tableContent = data.item;
        this.tableHeader = data.table;
        this.tableHeader = data.table;
    },
    computed: {
        sortedArray: function () {
            function compare(a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            }

            return this.tableContent.sort(compare);
        }
    },
    methods: {
        reset() {
            window.location.reload()
        },
        filter(id) {
            if (id !== 0 && id !== this.activeColl) {
                this.activeColl = id;

                function compare(a) {
                    const genreA = a;

                    let comparison = 0;
                    if (genreA.info[id].class === "true") {
                        comparison = -1;
                    } else if (genreA.info[id].class === "false") {
                        comparison = 1;
                    }
                    return comparison;
                }

                this.tableContent.sort(compare);
            }

        },

    }

});
