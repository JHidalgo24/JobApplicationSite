$(document).ready(function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    $('#currentDate').html(today);

    $('.nextButton').on('click',nextTab);
    $('.backButton').on('click',previousTab);

})
let page = "#page"
let currentPageNumber = 1;
let currentPageID = page + currentPageNumber

function nextTab(){
    $(currentPageID).hide();
    currentPageNumber += 1;
    currentPageID = page + currentPageNumber
    $(currentPageID).tab('show')
    $(currentPageID).show()

}

function previousTab(){
    $(currentPageID).hide();
    currentPageNumber -= 1;
    currentPageID = page + currentPageNumber
    $(currentPageID).tab('show')
    $(currentPageID).show()

}

