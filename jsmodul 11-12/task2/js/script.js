$(function(){
    var html = $('#test').html();

    var arr =
        {
            name: 'Dovgopol Vadim',
            u: 'Студент національного університету харчових технологій',
            a: 'Хочу вчити, фронтенд, тому що:',
            myNum: 'Мій номер телефона',
            num: '+380672173124',
            myProfile: 'Мій профіль вконтакте',
            link: 'vk.com',
            feedBack: 'Мій фідбек: electrovadim@gmail.com',
            money: 'Якщо потрібно, можу сфотографувати вас у студії, за гроші.',
            list1: 'Студентом бути не цікаво.',
            list2: 'Не платять взагалі!',
            list3: 'Замість навчяння, фотографую концерти та людей за гроші.' 
    
        };
    var content = tmpl(html, arr)
     $('.main').append(content);
    });