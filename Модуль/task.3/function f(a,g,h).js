function calculateCost() {
    // enter annual tuition
    var $annualTuition = parseInt($('#annual_tuition').val(), 10);
    // tuition per semester
    var semesterTuition = $annualTuition / 3;
    // total number of credits for semester
    var $semesterCredits = parseInt($('#semester_credits').val(), 10);
    // cost of a single credit
    var singleCreditCost = semesterTuition / $semesterCredits;
    // total credits for class being skipped
    var $skippedTotalCredits = parseInt($('#skipped_total_credits').val(), 10);
    // total cost for class being skipped
    var skippedTotalCreditsCost = $skippedTotalCredits * singleCreditCost;
    // total number of days in semester for class being skipped
    var $skippedTotalDays = parseInt($('#skipped_total_days').val(), 10);
    // (total cost of class) / (total number of class days in semester) = cost of class
    var skippedSingleClassCost = skippedTotalCreditsCost / $skippedTotalDays;
}​

$(function(){

    $('#cost').on('click', function(){
        $('#costTotal').html(calculateCost);
        // why the heck doesnt this work?!?
        alert(calculateCost);
    });

});