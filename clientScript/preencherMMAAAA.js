function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var pattern = /^\\d{2}\d{4}$/; //xxx/xxxx
    var mes = g_form.getValue('u_mes_referencia');
    if (!pattern.test(mes)) {
        mes = mes.replace(/\D/g, '');
        var regex = /^\d{6}$/;
        var is_valid = regex.test(mes);
        if (!is_valid) {
            g_form.addInfoMessage('Data inválida, por favor preencher no formato MM/AAAA');
            g_form.clearValue('u_mes_referencia');
        } else {
            mes = mes.slice(0, 2) + '/' + mes.slice(2, 8);
            g_form.setValue('u_mes_referencia', mes);
        }
    }
}