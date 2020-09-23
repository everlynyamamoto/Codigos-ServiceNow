function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    //validação de campo onde só é permitido números e não pode haver mais do que 4 digitos
    var numericVal = g_form.getValue('field');
    if (isNaN(numericVal) || (numericVal.length > 4)) {
        g_form.addInfoMessage('This field must be 4 digits ');
        g_form.clearValue('field');
    }
    
}