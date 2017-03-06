<?php


class ComentarioDAO extends DAO{
	
	public function DAO(PDO $conexao = null){
		if($conexao != null){
			$this->conexao = $conexao;
		}else{
			$this->fazerConexao();
	
		}
	}
	public function inserir(Comentario $comentario){
	
// 		$sql = "INSERT INTO usuario(nome, login, senha, id_facebook, sexo, id_regra)
// 				VALUES(:nome, :login, :senha, :idface, :sexo, :regra)";
// 		$nome = $usuario->getNome();
// 		$login = $usuario->getLogin();
// 		$senha = $usuario->getSenha();
// 		$idFace = $usuario->getIdFacebook();
// 		$sexo = $usuario->getSexo();
// 		$regra = $usuario->getRegra();
// 		try {
// 			$db = $this->getConexao();
// 			$stmt = $db->prepare($sql);
// 			$stmt->bindParam("nome", $nome, PDO::PARAM_STR);
// 			$stmt->bindParam("login", $login, PDO::PARAM_STR);
// 			$stmt->bindParam("senha", $senha, PDO::PARAM_STR);
// 			$stmt->bindParam("idface", $idFace, PDO::PARAM_STR);
// 			$stmt->bindParam("sexo", $sexo, PDO::PARAM_STR);
// 			$stmt->bindParam("regra", $regra, PDO::PARAM_STR);
// 			$result = $stmt->execute();
// 			// Verifica se o insert foi bem sucedido
				
// 			return $result;
	
// 		} catch(PDOException $e) {
// 			echo '{"error":{"text":'. $e->getMessage() .'}}';
// 		}
	
	}
	
}