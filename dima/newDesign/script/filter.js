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
            this.showDropList = '';

            if (value === "Все"
                && this.filterDataVue[id].allTrigger === true) {
                this.filterDataVue[id].allValue = "";
                this.filterDataVue[id].defaultValue = [];
                this.filterDataVue[id].allTrigger = false;

            }

            if (this.filterDataVue[id].defaultValue.includes("Все")
                && this.filterDataVue[id].allTrigger !== true &&
                this.filterDataVue[id].allValue !== "Все") {

                this.filterDataVue[id].allTrigger = true;
                this.filterDataVue[id].allValue = "Все";
                this.filterDataVue[id].defaultValue = this.filterDataVue[id].checkBox;

            } else if (value !== "Все" && !this.filterDataVue[id].defaultValue.includes("Все")) {
                this.filterDataVue[id].allValue = "";
                this.filterDataVue[id].allTrigger = false;
            }


        },
        deepEqual(arr) {
            let cache;

            let ln1 = arr.length;
            let ln2 = this.filterDataComplete.waysTo.length;

            //теперь делаем цикл
            for (let i = 0; i < ln1; ++i) {
                cache = this.filterDataComplete.waysTo[i];

                for (let j = 0; j < ln2; ++j) {
                    if (cache === arr[j]) {
                        console.log('найдено совпадение: ' + cache);
                        return true
                    }
                }
            }

        },

        collectData() {

            this.filterDataVue.forEach((el) => {

                this.filterDataComplete[el.objName] = el.defaultValue;

            });


            this.tableContent.forEach((el) => {
                el.show = true;


                if (el.itemFilter.marginTrading !== this.filterDataComplete.marginTrading) {
                    el.show = false;

                } else if (el.itemFilter.internalToken !== this.filterDataComplete.internalToken) {
                    el.show = false;

                } else if (el.itemFilter.MotivationOfTraders !== this.filterDataComplete.MotivationOfTraders) {
                    el.show = false;

                } else if (el.itemFilter.kys !== this.filterDataComplete.kys) {
                    el.show = false;

                } else if (el.itemFilter.stableCoin !== this.filterDataComplete.stableCoin) {
                    el.show = false;

                } else if (!this.filterDataComplete.type.includes("Все")
                    && !this.filterDataComplete.type.includes(el.itemFilter.type)) {
                    el.show = false;


                } else if (!this.filterDataComplete.region.includes("Все")
                    && !this.filterDataComplete.region.includes(el.itemFilter.region)) {
                    el.show = false;

                } else if (!this.filterDataComplete.waysTo.includes("Все")
                    && this.deepEqual(el.itemFilter.waysTo) !== true) {

                    el.show = false;

                } else {
                }
            });


        },

        resetFilter() {
            location.reload();
        },
    }

});
