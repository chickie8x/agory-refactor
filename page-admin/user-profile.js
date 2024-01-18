$(document).ready(function(){
    let profilePersonalEdit = false
    const informationPersonal = $('#information-content-detail')
    const informationPersonalEdit = $('.personal-information-edit-container')

    let enterpriseEditFlag = false
    const profileEnterprise = $('#enterprise-information')
    const profileEnterpriseEdit = $('.enterprise-information-edit')

    let enterprise2EditFlag = false
    const profileEnterprise2 = $('#enterprise-information-2')
    const profileEnterpriseEdit2 = $('.enterprise2-information-edit')



    $('#information-content-edit-btn').click(function(){
        if(!profilePersonalEdit){
            informationPersonal.addClass('hide-item')
            informationPersonalEdit.removeClass('hide-item')
        }
        else{
            informationPersonal.removeClass('hide-item')
            informationPersonalEdit.addClass('hide-item')
        }
        profilePersonalEdit = !profilePersonalEdit
    })

    $('#enterpriseEditBtn').click(function(){
        if(!enterpriseEditFlag){
            profileEnterprise.addClass('hide-item')
            profileEnterpriseEdit.removeClass('hide-item')
        }
        else{
            profileEnterprise.removeClass('hide-item')
            profileEnterpriseEdit.addClass('hide-item')
        }
        enterpriseEditFlag = !enterpriseEditFlag
    })
    

    $('#btn-edit-enterprise').click(function(){
        if(!enterprise2EditFlag){
            profileEnterprise2.addClass('hide-item')
            profileEnterpriseEdit2.removeClass('hide-item')
        }
        else{
            profileEnterprise2.removeClass('hide-item')
            profileEnterpriseEdit2.addClass('hide-item')
        }
        enterprise2EditFlag = !enterprise2EditFlag

    })

    $('#go-to-transactions').click(function(){
        $('.account-content-detail').addClass('hide-item')
        $('.nav-backward').removeClass('hide-item')
    })

    $('.nav-backward').click(function(){
        $('.account-content-detail').removeClass('hide-item')
        $('.nav-backward').addClass('hide-item')
    })


    const tabs = {
        '#tab-profile-information': $('.user-profile-tab-content'),
        '#tab-profile-account': $('.account-and-transaction-tab-content'),
        '#tab-profile-security': $('.password-and-security-tab-content'),
        '#tab-profile-settings':$('.profile-general-settings-tab-content')
    }

    function tabSelection(id){
        $('.tab-profile').removeClass('tab-profile-active')
        $(id).addClass('tab-profile-active')
        $('.tab-profile-content').addClass('hide-item')
        $(tabs[id]).removeClass('hide-item')
        $('#tab-profile-selection').val(id)
    }

    $('#tab-profile-account').click(function(){
        tabSelection('#tab-profile-account')
    })

    $('#tab-profile-information').click(function(){
        tabSelection('#tab-profile-information')
    })


    $('#tab-profile-security').click(function(){
        tabSelection('#tab-profile-security')
    })


    $('#tab-profile-settings').click(function(){
        tabSelection('#tab-profile-settings')
    })


    $('#tab-profile-selection').on('change',function(){
        tabSelection( $(this).find(":selected").val())
    })



})