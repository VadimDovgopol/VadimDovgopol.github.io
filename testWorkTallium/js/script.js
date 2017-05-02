var secondChat = function () {
    var secondTextArea = $('.second-textArea'),
        secondOpenIcon = $('.second-comment'),
        secondContent = $('.second-block'),
        isActive = false;

    secondOpenIcon.click(function () {
        secondTextArea.slideToggle(200);
        if (!isActive) {
            secondOpenIcon.addClass('secondChatActive');
            secondContent.addClass('secondContentActive');
            isActive = true;
        } else {
            secondOpenIcon.removeClass('secondChatActive');
            secondContent.removeClass('secondContentActive');
            isActive = false;
        }

    });
};
var openChat = function () {
    var firstComment = $('.first-comment'),
        content = $('.first-block'),
        firstTextArea = $('.first-textArea'),
        isActive = false;

    firstComment.click(function () {
        firstTextArea.slideToggle(200);
        if (!isActive) {
            firstComment.addClass('chatActive');
            content.addClass('contentActive');
            isActive = true;
        } else {
            firstComment.removeClass('chatActive');
            content.removeClass('contentActive');
            isActive = false;
        }
    });

};
var thirdOpenChat = function () {
    var firstComment = $('.first-comment1'),
        content = $('.first-block1'),
        firstTextArea = $('.first-textArea1'),
        isActive = false;

    firstComment.click(function () {
        firstTextArea.slideToggle(200);
        if (!isActive) {
            firstComment.addClass('chatActive');
            content.addClass('contentActive');
            isActive = true;
        } else {
            firstComment.removeClass('chatActive');
            content.removeClass('contentActive');
            isActive = false;
        }
    });
};
var fourOpenChat = function () {
    var firstComment = $('.first-comment2'),
        content = $('.first-block2'),
        firstTextArea = $('.first-textArea2'),
        isActive = false;

    firstComment.click(function () {
        firstTextArea.slideToggle(200);
        if (!isActive) {
            firstComment.addClass('chatActive');
            content.addClass('contentActive');
            isActive = true;
        } else {
            firstComment.removeClass('chatActive');
            content.removeClass('contentActive');
            isActive = false;
        }
    });
};
var fiveOpenChat = function () {
    var firstComment = $('.first-comment3'),
        content = $('.first-block3'),
        firstTextArea = $('.first-textArea3'),
        isActive = false;

    firstComment.click(function () {
        firstTextArea.slideToggle(200);
        if (!isActive) {
            firstComment.addClass('chatActive');
            content.addClass('contentActive');
            isActive = true;
        } else {
            firstComment.removeClass('chatActive');
            content.removeClass('contentActive');
            isActive = false;
        }
    });
};
var rangeSlider = function () {
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function () {

        value.each(function () {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function () {
            $(this).next(value).html(this.value);
        });
    });
};
openChat();
secondChat();
thirdOpenChat();
fourOpenChat();
fiveOpenChat();
rangeSlider();