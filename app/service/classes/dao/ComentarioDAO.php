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
	
		$sql = "INSERT INTO comentario(texto, id_mapa, id_usuario_autor, data)
				VALUES(:texto, :idMapa, :usuarioAutor, :data)";
		$texto = $comentario->getTexto();
		$idMapa = $comentario->getMapa()->getId();
		$usuarioAutor = $comentario->getAutor()->getId();
		$data = date("Y-m-d H:i:s");
		try {
			$db = $this->getConexao();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("texto", $texto, PDO::PARAM_STR);
			$stmt->bindParam("idMapa", $idMapa, PDO::PARAM_STR);
			$stmt->bindParam("usuarioAutor", $usuarioAutor, PDO::PARAM_STR);
			$stmt->bindParam("data", $data, PDO::PARAM_STR);
			$result = $stmt->execute();
			return $result;
		
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	
	}
	
}