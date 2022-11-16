$(document).ready(function () {

    // tabs script 
    var individualBtn = $('#individual-tab')
    var enterpriseBtn = $('#enterprise-tab')
    var individualTabContent = $('.individual-tab-content')[0]
    var enterpriseTabContent = $('.enterprise-tab-content')[0]

    $('#individual-tab').click(function () {

        [individualTabContent, enterpriseTabContent].forEach((item) => {
            $(item).css('display', 'none')
        })

        $(individualTabContent).css('display', 'flex')

        $(individualBtn).removeClass('activated-tab')
        $(enterpriseBtn).removeClass('activated-tab')

        $(individualBtn).addClass('activated-tab')
    })

    $('#enterprise-tab').click(function () {
        [individualTabContent, enterpriseTabContent].forEach((item) => {
            $(item).css('display', 'none')
        })

        $(enterpriseTabContent).css('display', 'flex')

        $(individualBtn).removeClass('activated-tab')
        $(enterpriseBtn).removeClass('activated-tab')

        $(enterpriseBtn).addClass('activated-tab')
    })

    // dialogs transition
    var dialogs = [
        {
            dialog: $('.welcome-dialog')[0],
            index: 0
        },
        {
            dialog: $('.identify-dialog')[0],
            index: 1
        },
        {
            dialog: $('.set-avatar')[0],
            index: 2
        },
        {
            dialog: $('.finish-dialog')[0],
            index: 3
        }
    ]

    var currentIndex = 0

    var maxIndex = 3

    var currentDialog = {}

    // init state 
    function dialogTransition() {
        dialogs.forEach((item) => {
            if (item.index != currentIndex) {
                $(item.dialog).css('display', 'none')
            }
            else {
                currentDialog = item
            }
        })
    }

    dialogTransition()

    // move next 
    $('.continue-btn').click(function () {
        if (currentIndex < maxIndex) {
            currentIndex += 1
            currentDialog = dialogs[currentIndex]
            $(currentDialog.dialog).css('display', 'block')
            dialogTransition()
        }


    })

    // move back 
    $('.back-btn').click(function () {
        if (currentIndex < maxIndex) {
            currentIndex -= 1
            currentDialog = dialogs[currentIndex]
            $(currentDialog.dialog).css('display', 'block')
            dialogTransition()
        }
    })


    // continue fill form 
    $('.reform-btn').click(function() {
        currentIndex = 0
        currentDialog = dialogs[currentIndex]
        $(currentDialog.dialog).css('display','block')
        dialogTransition()
    })

    // add later button 
    $('#welcome-later-btn').click(function() {
        currentIndex =3
        currentDialog = dialogs[currentIndex]
        $(currentDialog.dialog).css('display','block')
        dialogTransition()
    })


})