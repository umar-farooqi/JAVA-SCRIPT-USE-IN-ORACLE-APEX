
$('#P34_VOUCHER_TYPE, #P34_TRANSACTION_ID').change(function() {
    if ($v('P34_VOUCHER_TYPE') === "611" && $v('P34_TRANSACTION_ID') === "597") {
        $x_Show("P34_CHECK_BOOK_DET");
    } else {
        $x_Hide("P34_CHECK_BOOK_DET");
    }
});
