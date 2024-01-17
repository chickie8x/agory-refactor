$(document).ready(function(){
    let profilePersonalEdit = false
    const informationPersonal = $('#information-content-detail')
    const informationPersonalEdit = $('.personal-information-edit-container')

    let enterpriseEditFlag = false
    const profileEnterprise = $('#enterprise-information')
    const profileEnterpriseEdit = $('.enterprise-information-edit')

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
    


})