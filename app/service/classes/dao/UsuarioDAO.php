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
		
		$sql = "INSERT INTO usuario(nome, login, senha, id_facebook, sexo, id_regra) 
				VALUES(:nome, :login, :senha, :idface, :sexo, :regra)";
		$nome = $usuario->getNome();
		$login = $usuario->getLogin();
		$senha = $usuario->getSenha();
		$idFace = $usuario->getIdFacebook();
		$sexo = $usuario->getSexo();
		$regra = $usuario->getRegra();
		try {
			$db = $this->getConexao();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("nome", $nome, PDO::PARAM_STR);
			$stmt->bindParam("login", $login, PDO::PARAM_STR);
			$stmt->bindParam("senha", $senha, PDO::PARAM_STR);
			$stmt->bindParam("idface", $idFace, PDO::PARAM_STR);
			$stmt->bindParam("sexo", $sexo, PDO::PARAM_STR);
			$stmt->bindParam("regra", $regra, PDO::PARAM_STR);
			$result = $stmt->execute();
			// Verifica se o insert foi bem sucedido
			
			return $result;
			 
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
		
	}
	public function excluir(Usuario $usuario){
	
		$id = $usuario->getId();
		$sql = "DELETE FROM usuario WHERE id_usuario = :id";
		
		try {
			$db = $this->getConexao();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("id", $id, PDO::PARAM_STR);
			$result = $stmt->execute();
			return $result;
	
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	
	}
	
	public function alterarRegra(Usuario $usuario){
	
		$id = $usuario->getId();
		$regra = $usuario->getRegra();
		$sql = "UPDATE usuario set id_regra = :regra
				WHERE id_usuario = :id";
	
		try {
			$db = $this->getConexao();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("id", $id, PDO::PARAM_STR);
			$stmt->bindParam("regra", $regra, PDO::PARAM_STR);
			$result = $stmt->execute();
			return $result;
	
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	
	}

	public function constultarPorId(Usuario $usuario){
		$id = $usuario->getId();
		
		$sql = "SELECT * FROM usuario WHERE id_usuario = :id LIMIT 1";
		
		try{
			$stmt = $this->getConexao()->prepare($sql);
			$stmt->bindParam("id", $id, PDO::PARAM_STR);
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		}catch (PDOException $e){
			echo '{"erro":{"text":'. $e->getMessage() .'}}';
		}
		foreach($result as $linha){
				
			$usuario->setId( $linha ['id_usuario'] );
			$usuario->setNome( $linha ['nome'] );
			$usuario->setLogin($linha ['login']);
			$usuario->setSenha($linha['senha']);
			$usuario->setIdFacebook($linha['id_facebook']);
			$usuario->setSexo($linha['sexo']);
			return $usuario;
		}
		return false;
	
	}
	public function constultarPorIdFace(Usuario $usuario){
		$id = $usuario->getIdFacebook();
	
		$sql = "SELECT * FROM usuario WHERE id_facebook = :id LIMIT 1";
	
		try{
			$stmt = $this->getConexao()->prepare($sql);
			$stmt->bindParam("id", $id, PDO::PARAM_STR);
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
		}catch (PDOException $e){
			echo '{"erro":{"text":'. $e->getMessage() .'}}';
		}
		foreach($result as $linha){
	
			$usuario->setId( $linha ['id_usuario'] );
			$usuario->setNome( $linha ['nome'] );
			$usuario->setLogin($linha ['login']);
			$usuario->setSenha($linha['senha']);
			$usuario->setIdFacebook($linha['id_facebook']);
			$usuario->setSexo($linha['sexo']);
			return $usuario;
		}
		return false;
	
	}
	
	public function retornaLista() {
		$lista = array ();
		$sql = "SELECT * FROM usuario 
				INNER JOIN regra ON regra.id_regra = usuario.id_regra
				LIMIT 1000";
		$result = $this->getConexao ()->query ( $sql );
	
		foreach ( $result as $linha ) {
			$usuario = new Usuario();
			$usuario->setId( $linha ['id_usuario'] );
			$usuario->setNome( $linha ['nome'] );
			$usuario->setLogin($linha ['login']);
			$usuario->setSenha($linha['senha']);
			$usuario->setIdFacebook($linha['id_facebook']);
			$usuario->setSexo($linha['sexo']);
			$usuario->setRegra($linha['id_regra']);
			$lista [] = $usuario;
		}
		return $lista;
	}
	
	public function autenticar(Usuario $usuario){
		$login = $usuario->getLogin();
		$senha = $usuario->getSenha();
		
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
			
			$usuario->setId( $linha ['id_usuario'] );
			$usuario->setNome( $linha ['nome'] );
			$usuario->setLogin($linha ['login']);
			$usuario->setSenha($linha['senha']);
			$usuario->setIdFacebook($linha['id_facebook']);
			$usuario->setSexo($linha['sexo']);
			return true;
		}
		return false;
		
		
	}
	
}


?>