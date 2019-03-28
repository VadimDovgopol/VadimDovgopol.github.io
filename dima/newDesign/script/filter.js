let app = new Vue({
    el: '#app',
    data: {
        tableContent: [],
        tableHeader: [],
        filterDataVue: [],
        active: "active",
        activeColl: null,
        showDropList: '',
        filterDataComplete: {},

        allNameArray: [],
    },
    mounted() {
        this.tableContent = data.item;
        this.tableHeader = data.table;
        this.tableHeader = data.table;
        this.filterDataVue = filterData;
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

        openDropList(id) {
            if (this.showDropList !== id) {
                this.showDropList = id;
            } else {
                this.showDropList = '';
            }
        },

        selectAll(value, id) {

            if (this.filterDataVue[id].defaultValue.includes("Все")) {
                this.filterDataVue[id].all = 'Все';

            } else {
                this.filterDataVue[id].all = "";
            }


        },

        collectData() {
            this.filterDataVue.forEach((el) => {

                this.filterDataComplete[el.objName] = el.defaultValue;

            });
        },

        resetFilter() {
            location.reload();
        },
    }

});
