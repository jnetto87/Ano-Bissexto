function veri() {
    var ano = document.querySelector('#txano').value
    var res = document.querySelector('#res')

    if (ano == 0) {
        res.innerHTML = '<strong>ERRO:</strong> Digite o ano valido!!'
    }
    else if (ano % 400 ==0 || ano % 4 == 0 && ano % 100 != 0) {
        res.innerHTML = `<strong>VERDADEIRO:</strong> o ano ${ano} e Bissexto`
    } else {
        res.innerHTML = `<strong>FALSO:</strong> O ano ${ano} nao e Bissexto`
    }
}