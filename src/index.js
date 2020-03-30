function simular(){
    var letras = "abc";
    var tempo = parseFloat($("input#tempo").val());
    
    //calculo da primeira tabela
    for (var i = 0; i < letras.length; i++){
        var letra = letras[i];
        var temp = parseFloat($(".entrada .chegada-" + letra).val());
        temp = tempo / temp;
        $(".resultado-1 .chegada-" + letra).val(temp.toFixed(2));
    }
    for (var i = 0; i < letras.length; i++){
        var letra = letras[i];
        var temp = parseFloat($(".entrada .servico-" + letra).val());
        temp = tempo / temp;
        $(".resultado-1 .servico-" + letra).val(temp.toFixed(2));
    }
    
    //calculo da terceita tabela
    for (var i = 0; i < letras.length; i++){
        var letra = letras[i];
        var a = parseFloat($(".resultado-1 .chegada-" + letra).val());
        var u = parseFloat($(".resultado-1 .servico-" + letra).val());
        var temp = a/(u-a);
        $(".resultado-2 .r1-" + letra).val(temp.toFixed(2));
    }
    for (var i = 0; i < letras.length; i++){
        var letra = letras[i];
        var a = parseFloat($(".resultado-1 .chegada-" + letra).val());
        var u = parseFloat($(".resultado-1 .servico-" + letra).val());
        var temp = 1.0/(u-a);
        $(".resultado-2 .r2-" + letra).val(temp.toFixed(2));
    }
    for (var i = 0; i < letras.length; i++){
        var letra = letras[i];
        var a = parseFloat($(".resultado-1 .chegada-" + letra).val());
        var u = parseFloat($(".resultado-1 .servico-" + letra).val());
        var temp = a/u;
        $(".resultado-2 .r3-" + letra).val(temp.toFixed(2));
    }
    
    // calcula tabela dinamica
    var max = $("input#max-clientes").val();
    var htmlBase = "<tr><th>N</th><th>P(x)</th><th>Cenário (A)</th><th>Cenário (B)</th><th>Cenário (C)</th></tr>";
    $(".resultado-3").html(htmlBase);
    for (var i = 0; i < max; i++){
        var html = "<tr><td>";
        html += i;
        html += "</td><td>";
        html += "p(" + i + ")";
        for (var y = 0; y < letras.length; y++){
            var letra = letras[y];
            var a = parseFloat($(".resultado-1 .chegada-" + letra).val());
            var u = parseFloat($(".resultado-1 .servico-" + letra).val());
            var temp = (1.0 - (a / u)) * Math.pow((a / u), i);
            html += "</td><td>";
            html += temp.toFixed(2);
        }
        html += "</td></tr>";
        
        $(".resultado-3").append(html);
    }
    
}
jQuery(function($){
    //$(".mask").mask("9.99");
    $(".mask").mask('###0.00', {reverse: true});
})