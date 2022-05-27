   function retornaMes(mes){
    switch(mes){
      case 1:
        var mes_ext = 'Janeiro';
        break;
      case 2:
        var mes_ext = 'Fevereiro';
        break;
      case 3:
        var mes_ext = 'Março';
        break;
      case 4:
        var mes_ext = 'Abril';
        break;
      case 5:
        var mes_ext = 'Maio';
        break;
      case 6:
        var mes_ext = 'Junho';
        break;
      case 7:
        var mes_ext = 'Julho';
        break;
      case 8:
        var mes_ext = 'Agosto';
        break;
      case 9:
        var mes_ext = 'Setembro';
        break;
      case 10:
        var mes_ext = 'Outubro';
        break;
      case 11:
        var mes_ext = 'Novembro';
        break;
      case 12:
        var mes_ext = 'Dezembro';
        break;
    }
    return mes_ext;
  }
  function pegarData(){
      var et = new Date();
      var ano = et.getFullYear();
      var dia = et.getDate();
      var mes = et.getMonth()+ 1;
      return dia + "-" + mes + "-" + ano;
    }
    function pegarDia(){
      var et = new Date();
      var dia = et.getDate();
      return dia;
    }
    function pegarMes(){
      var et = new Date();
      var mes = et.getMonth()+1;
      return mes;
    }
    function pegarAno(){
      var et = new Date();
      var ano = et.getFullYear();
      return ano;
    }
