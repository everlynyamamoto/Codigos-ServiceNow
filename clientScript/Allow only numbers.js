function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var numericVal = g_form.getValue('u_branch');
    if (isNaN(numericVal) || (numericVal.length > 4)) {
        g_form.addInfoMessage(getMessage('this.field.must.be.four.digits'));
        g_form.clearValue('u_branch');
    }
    
}