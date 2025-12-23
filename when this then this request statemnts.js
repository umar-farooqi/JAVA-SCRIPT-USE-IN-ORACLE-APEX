$('#P765_SUBJECT').change(function () {
    if ($v('P765_SUBJECT') === 'Request For Bank Statement') {
        $s('P765_SUBJECT_DETAIL', 'Bank Account Statement');
    } else if ($v('P765_SUBJECT') === 'Request For Account Maintenance Certificate') {
        $s('P765_SUBJECT_DETAIL', 'Account Maintenance Certificate');
    } else if ($v('P765_SUBJECT') === 'Request For WHT Tax Certificate') {
        $s('P765_SUBJECT_DETAIL', 'WHT Tax Certificate');
    } else if ($v('P765_SUBJECT') === 'Request For Cheque Book') {
        $s('P765_SUBJECT_DETAIL', 'Cheque Book');
    } else if ($v('P765_SUBJECT') === 'Authority Letter For Collection of Cheque Book') {
        $s('P765_SUBJECT_DETAIL', 'Cheque Book');
    } else {
        $s('P765_SUBJECT_DETAIL', null); // F@AROOQi
    }
});
//              ITEM CNIC
$('#P765_CNIC').on('input', function() {
    var val = $(this).val();
    val = val.replace(/\D/g, '');
    if (val.length >= 5) {
        val = val.slice(0, 5) + '-' + val.slice(5, 12) + '-' + val.slice(12, 13);
    }
    $(this).val(val);
});

