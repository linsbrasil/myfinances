function userUpdate(id, nome, sobrenome, email, updated_at) {
	var updated_at = pegarData();
    dbObj.transaction(function (tx) {
      tx.executeSql('update contas set nome=?, sobrenome=?, email=?, updated_at=? where id=?',[nome, sobrenome, email, updated_at, id], function(){});
    });
}

function updateSenha(id, old_senha, new_senha, updated_at) {
	var len = 0;
	dbObj.transaction(function (tx) {
        tx.executeSql('select * from user where id=? and senha=? and deleted_at =? limit 1',[id, old_senha, null], function(tx, results){
        	len = results.rows.length;        
        });
    });

	if(len > 0){
		var updated_at = pegarData();
	    dbObj.transaction(function (tx) {
	      tx.executeSql('update senha set senha=?, updated_at=? where id=?',[new_senha, updated_at, id], function(){});
	    });
	}
}		

function login(email, senha){
    if(Boolean(email) && Boolean(senha)){
      dbObj.transaction(function (tx) {
        tx.executeSql('select * from user where email=? and senha =? and deleted_at =? limit 1',[email, senha, null], function(tx, results){
          var len = results.rows.length;
          if(len > 0){
          		for (i = 0; i < len; i++) {
		            var resource = [
		            	'id' =>  results.rows.item(i).id,
          				'nome' =>  results.rows.item(i).nome,
          				'sobrenome' =>  results.rows.item(i).sobrenome,
          				'email' =>  results.rows.item(i).email,
          				'created_at' =>  results.rows.item(i).created_at,
          				'updated_at' =>  results.rows.item(i).updated_at
          			];

		        }
            sessionStorage.setItem('user', resource);
            console.log('Login realizado com sucesso');
          }
          
        });
      });
    }else{
      alert("Entre com seu login e senha");
    }
}

function logout(){      
    sessionStorage.removeItem('user');
    sessionStorage.clear();
}