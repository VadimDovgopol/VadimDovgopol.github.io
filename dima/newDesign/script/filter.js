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

            if (value === wordAll
                && this.filterDataVue[id].allTrigger === true) {

                this.filterDataVue[id].allValue = "";
                this.filterDataVue[id].defaultValue = [];
                this.filterDataVue[id].allTrigger = false;

            }

            if (this.filterDataVue[id].defaultValue.includes(wordAll)
                && this.filterDataVue[id].allTrigger !== true &&
                this.filterDataVue[id].allValue !== wordAll) {
                if (id === 0 || id === 1 || id === 7) {

                    this.filterDataVue[id].allTrigger = true;
                    this.filterDataVue[id].allValue = wordAll;
                    this.filterDataVue[id].defaultValue = this.filterDataVue[id].checkBox;
                }

            } else if (value !== wordAll && !this.filterDataVue[id].defaultValue.includes(wordAll)) {
                if (id === 0 || id === 1 || id === 7) {

                    this.filterDataVue[id].allValue = "";
                    this.filterDataVue[id].allTrigger = false;
                }
            }


        },
        deepEqual(arr) {
            let cache;

            let ln2 = this.filterDataComplete.waysTo.length;

            for (let i = 0; i < ln2; ++i) {
                cache = this.filterDataComplete.waysTo[i];

                if (arr.includes(cache)) {
                    return true;
                }
            }

        },

        collectData() {
            this.showDropList = '';

            this.filterDataVue.forEach((el) => {

                this.filterDataComplete[el.objName] = el.defaultValue;

            });


            this.tableContent.forEach((el) => {
                el.show = true;


                if (el.itemFilter.marginTrading !== this.filterDataComplete.marginTrading
                    && this.filterDataComplete.marginTrading !== wordAll
                    && this.filterDataComplete.marginTrading !== "") {
                    el.show = false;

                } else if (el.itemFilter.internalToken !== this.filterDataComplete.internalToken
                    && this.filterDataComplete.internalToken !== wordAll
                    && this.filterDataComplete.internalToken !== "") {
                    el.show = false;

                } else if (el.itemFilter.MotivationOfTraders !== this.filterDataComplete.MotivationOfTraders
                    && this.filterDataComplete.MotivationOfTraders !== wordAll
                    && this.filterDataComplete.MotivationOfTraders !== "") {
                    el.show = false;

                } else if (el.itemFilter.kys !== this.filterDataComplete.kys
                    && this.filterDataComplete.kys !== wordAll
                    && this.filterDataComplete.kys !== "") {
                    el.show = false;


                } else if (el.itemFilter.stableCoin !== this.filterDataComplete.stableCoin
                    && this.filterDataComplete.stableCoin !== wordAll
                    && this.filterDataComplete.stableCoin !== "") {
                    el.show = false;


                } else if (!this.filterDataComplete.type.includes(wordAll)
                    && !this.filterDataComplete.type.includes(el.itemFilter.type)) {
                    el.show = false;


                } else if (!this.filterDataComplete.region.includes(wordAll)
                    && !this.filterDataComplete.region.includes(el.itemFilter.region)) {
                    el.show = false;


                } else if (!this.filterDataComplete.waysTo.includes(wordAll)
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
