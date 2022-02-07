$(document).ready(function () {
    hideALl()
    $(window).scrollTop(0);
    dateFront()

    $('.nextButton').on('click',nextTab);
    $('.backButton').on('click',previousTab);
    $('#moreWork').on('click',WorkExperienceForm);

    $(document).change(function(){
        hideUnnecessary();
    }
    )

})
let housingValue = $('#housingChoice').val()
let relativeOfEmployee = $('#spouseApplication').val()
let previousNames = $('#previousNamesYN').val()
let page = "#page"
let currentPageNumber = 1;
let currentPageID = page + currentPageNumber
let formCount = 1;
let currentForm = "form"+ formCount
let workedBefore = $('#workedBefore').val()

function hideALl(){
    $('#spouseOrFriendOfEmployee').hide()
    $('#inputRV').hide()
    $('#previousNamesUsed').hide()
    $('#previouslyWorkedBefore').hide()
}
function dateFront() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    $('#currentDate').html(today);
}

function hideUnnecessary(){
    housingValue = $('#housingChoice').val()
    relativeOfEmployee = $('#spouseApplication').val()
    previousNames = $('#previousNamesYN').val()
    workedBefore = $('#workedBefore').val()
    if (workedBefore === "yes"){
        $('#previouslyWorkedBefore').show()
    }
    else{
        $('#previouslyWorkedBefore').hide()
    }

    if (housingValue === "RV"){
        $('#inputRV').show();

    }
    else{
        $('#inputRV').hide()
    }

    if (previousNames === "yes"){
        $('#previousNamesUsed').show();

    }
    else{
        $('#previousNamesUsed').hide()
    }

    if (relativeOfEmployee === "yes"){
        $('#spouseOrFriendOfEmployee').show();
    }
    else{
        $('#spouseOrFriendOfEmployee').hide();
    }
}

function nextTab(){

    $(window).scrollTop(0);
    $(currentPageID).hide();
    currentPageNumber += 1;
    currentPageID = page + currentPageNumber
    $(currentPageID).tab('show')
    $(currentPageID).show()

}

function previousTab(){
    $(window).scrollTop(0);
    $(currentPageID).hide();
    currentPageNumber -= 1;
    currentPageID = page + currentPageNumber
    $(currentPageID).tab('show')
    $(currentPageID).show()

}

function WorkExperienceForm(){
    console.log(currentForm)
    let form = document.getElementById(currentForm)
    let form_dup = form.cloneNode(true);
    formCount+=1
    form_dup.id = "form"+formCount
    form.append(form_dup)
    currentForm = 'form'+ formCount

}

