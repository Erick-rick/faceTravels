<?php 


class UsuarioDAO extends DAO{
	

	public function DAO(PDO $conexao = null){
		if($conexao != null){
			$this->conexao = $conexao;
		}else{
			$this->fazerConexao();
	
		}
	}
	public function inserir(Usuario $usuario){
		
		$sql = "INSERT INTO usuario(nome, login, senha) 
				VALUES(:nome, :login, :senha)";
		$nome = $usuario->getNome();
		$login = $usuario->getLogin();
		$senha = $usuario->getSenha();
		try {
			$db = $this->getConexao();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("nome", $nome, PDO::PARAM_STR);
			$stmt->bindParam("login", $login, PDO::PARAM_STR);
			$stmt->bindParam("senha", $senha, PDO::PARAM_STR);
			$result = $stmt->execute();
			// Verifica se o insert foi bem sucedido
			
			return $result;
			 
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
		
	}
	public function retornaLista() {
		$lista = array ();
		$sql = "SELECT * FROM usuario LIMIT 1000";
		$result = $this->getConexao ()->query ( $sql );
	
		foreach ( $result as $linha ) {
			$usuario = new Usuario();
			$usuario->setId( $linha ['id_usuario'] );
			$usuario->setNome( $linha ['nome'] );
			$usuario->setLogin($linha ['login']);
			$usuario->setSenha($linha['senha']);
			$usuario->setIdFacebook($linha['id_facebook']);
			$lista [] = $usuario;
		}
		return $lista;
	}
	
	public function autenticar(Usuario $usuario){
		$sql = "SELECT * FROM usuario WHERE login = :login AND senha = :senha";
		
		try{
			$stmt = $this->getConexao()->prepare($sql);
			$stmt->bindParam("login", $login, PDO::PARAM_STR);
			$stmt->bindParam("senha", $senha, PDO::PARAM_STR);
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
				
		}catch (PDOException $e){
			echo '{"erro":{"text":'. $e->getMessage() .'}}';
		}
		foreach($result as $linha){
			$usuario = new Usuario();
			$usuario->setNome($linha['nome']);
			$usuario->setLogin($linha['login']);
			return $usuario;
		}
		
		
	}
	
}


?>