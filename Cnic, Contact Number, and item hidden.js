$('#P651_CONTACT_NUMBER').on('input', function() {
    var val = $(this).val();
    
    // Remove any non-numeric characters
    val = val.replace(/\D/g, '');
    
    // Format the value as "0301-7599442"
    if (val.length >= 5) {
        val = val.slice(0, 4) + '-' + val.slice(4, 11);
    }
    
    // Update the field with the formatted value
    $(this).val(val);
});


$('#P651_CNIC').on('input', function() {
    var val = $(this).val();
    
    // Remove any non-numeric characters
    val = val.replace(/\D/g, '');
    
    // Format the value as "36304-4830464-7"
    if (val.length >= 5) {
        val = val.slice(0, 5) + '-' + val.slice(5, 12) + '-' + val.slice(12, 13);
    }
    
    // Update the field with the formatted value
    $(this).val(val);
});



$('#P651_PURCHASING_TYPE').change(function() {
    if ($v('P651_PURCHASING_TYPE') == "TRADING") {
        $x_Show("P651_FREIGHT_AMOUNT");
        $x_Hide("P651_FREIGHT_COMMISION");
        $x_Hide("P651_FREIGHT_TEH");
        $x_Hide("P651_FREIGHT_CHIT");
          $x_Show("P651_FREIGHT_AMOUNT_1");
        $x_Hide("P651_FREIGHT_COMMISION_1");
        $x_Hide("P651_FREIGHT_TEH_1");
        $x_Hide("P651_FREIGHT_CHIT_1");
    } else {
         $x_Show("P651_FREIGHT_AMOUNT");
         $x_Show("P651_FREIGHT_COMMISION");
         $x_Show("P651_FREIGHT_TEH");
         $x_Show("P651_FREIGHT_CHIT");
         $x_Show("P651_FREIGHT_AMOUNT_1");
         $x_Show("P651_FREIGHT_COMMISION_1");
         $x_Show("P651_FREIGHT_TEH_1");
         $x_Show("P651_FREIGHT_CHIT_1");
    }
});


$('#P651_FREIGHT_TYPE_ID').change(function() {
    if ($v('P651_FREIGHT_TYPE_ID') == "376") {
      
        $x_Hide("P651_FREIGHT_PARTY");
      
    } else {
         $x_Show("P651_FREIGHT_PARTY");
       
    }
});


$('#P651_DUMPING_TYPE').change(function() {
    if ($v('P651_DUMPING_TYPE') == "376") {
      
        $x_Hide("P651_FREIGHT_PARTY_1");
      
    } else {
         $x_Show("P651_FREIGHT_PARTY_1");
       
    }
});
