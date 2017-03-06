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
	

	function retornaLista() {
		$sql = "SELECT * FROM comentario
				INNER JOIN usuario 
				ON usuario.id_usuario = comentario.id_usuario_autor
				LIMIT 1000";
		$lista = array();
		try {
			$db = $this->getConexao();
			$stmt = $db->query($sql);
			$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
				
			foreach($dados as $linha){
				$comentario = new Comentario();
				$comentario->setId($linha['id_comentario']);
				$comentario->setData($linha['data']);
				$comentario->getMapa()->setId($linha['id_mapa']);
				$comentario->getAutor()->setId($linha['id_usuario_autor']);
				
				$lista[] = $comentario;
			}
			return $lista;
				
		} catch(PDOException $e) {
			echo '{"erro":{"text":'. $e->getMessage() .'}}';
		}
	}
	
}