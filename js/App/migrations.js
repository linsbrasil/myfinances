function createDB() {
    dbObj.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user (id unique, nome text, sobrenome text, email text, senha text, created_at text, updated_at text, deleted_at text)');
     });
}

function fillDB() {
    dbObj.transaction(function (tx) {
      tx.executeSql("insert into user (nome, sobrenome, email, senha, created_at, updated_at) values ('Emerson', 'Inácio', 'emerson_linsbrasil@hotmail.com', '123123123', '12-05-2022', '12-05-2022')");
    });
}