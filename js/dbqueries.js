function storeContas(acao, estabelecimento, valor, formapgto, calendario) {
	var create_at = pegarData();
    dbObj.transaction(function (tx) {
      tx.executeSql('insert into contas (acao, estabelecimento, valor, formapgto, calendario, create_at) values (?,?,?,?,?,?)',[acao, estabelecimento, valor, formapgto, calendario, create_at],function(){});
    });
}	
function inicializar(){
    CreateDB();
    verificarLogin();
    apresentar();
    let mes = pegarMes();
    let ano = pegarAno();
    apresentarSuco(mes, ano);
    apresentarCafe(mes, ano); 
    apresentarRefri(mes, ano);
    carregarMesAno();
  }
function CreateDB() {
    dbObj.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS login (id INTEGER NOT NULL PRIMARY KEY, nome, senha, registro)');
     });

    dbObj.transaction(function (tx) {
      tx.executeSql('insert into login (nome, senha, registro) select "linsbrasil", "fechadura", "12/08/2020" where not exists (select 1 from login where nome = "linsbrasil")');
    });
}
  function logar(){
    let nome = document.getElementById("slogin").value;
    let senha = document.getElementById("senha").value;
    if(Boolean(nome) && Boolean(senha)){
      dbObj.transaction(function (tx) {
        tx.executeSql('select * from login where nome=? and senha =? limit 1',[nome, senha], function(tx, results){
          var len = results.rows.length;
          if(len > 0){
            esconder();
            sessionStorage.setItem('nome', nome);
            sessionStorage.setItem('senha', senha);
            document.getElementById("menu").classList.remove('hide');
            document.getElementById("participantes").classList.remove('hide');
            document.getElementById("slogin").value='';
            document.getElementById("senha").value='';
            sessionStorage.setItem('adm', 'logado');
            console.log('Login realizado com sucesso');
          }
          
        });
      });
    }else{
      alert("Entre com seu login e senha");
    }
  }
  function sair(){      
    sessionStorage.removeItem('adm');
    sessionStorage.clear();
    esconder();
    document.getElementById("login").classList.remove('hide');
    document.getElementById("menu").classList.add('hide');
  }
  function verificarLogin(){
    let adm = sessionStorage.getItem('adm');
    if(adm != 'logado'){
      esconder();
      document.getElementById("login").classList.remove('hide');
    }
  }
    function excluirRefri(id){
    dbObj.transaction(function (tx) {
      tx.executeSql('delete from refrigerante where id=?',[id], function(){
        apresentar();
        let mes = pegarMes();
        let ano = pegarAno();
        apresentarRefri(mes, ano);
      });
    });
  }

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