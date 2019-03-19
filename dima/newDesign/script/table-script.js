let app = new Vue({
    el: '#app',
    data: {
        tableContent: [],
        table: [
            "LetKnow.news wallet review",
            "Мобильное приложение",
            "WEB интерфейс",
            "Десктоп клиент",
            "Хранение приватных  ключей у третьей стороны",
            "Мульти- подпись",
            "Двухфакторная аутентификация",
            "User friendly",
            "Мультивалютный кошелек",
            "Повышенная анонимность",
            "Открытый код",
        ]
    },
    mounted() {
        $.getJSON("./table.json", data => {
            this.tableContent = data.item;
        });
    }
});