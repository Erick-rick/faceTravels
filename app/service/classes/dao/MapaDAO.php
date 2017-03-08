<?php



class MapaDAO extends DAO
{
	public function DAO(PDO $conexao = null){
		if($conexao != null){
			$this->conexao = $conexao;
		}else{
			$this->fazerConexao();
	
		}
	}
	
	public function inserir(Mapa $mapa){
		$this->getConexao()->beginTransaction();
		$sql = "INSERT INTO mapa(titulo)
				VALUES(:titulo)";
		
		$titul = $mapa->getTitulo();
		$idUsuario = $mapa->getDono()->getId();
		
		try {
			$db = $this->getConexao();
			$stmt = $db->prepare($sql);
			$stmt->bindParam("titulo", $titul, PDO::PARAM_STR);
			$result = $stmt->execute();
			if(!$result){
				$this->getConexao()->rollBack();
				return false;
				
			}
			
			
	
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
		$idMapa = $this->getConexao()->lastInsertId();
		
		$sql2 = "INSERT INTO usuario_mapa(id_mapa, id_usuario_dono)
				VALUES(:mapa, :usuario)
				";

		
		try {
			$stmt2 = $db->prepare($sql2);
			$stmt2->bindParam("usuario", $idUsuario, PDO::PARAM_STR);
			$stmt2->bindParam("mapa", $idMapa, PDO::PARAM_STR);
			$result2 = $stmt2->execute();
			
			if(!$result2){
				$this->getConexao()->rollBack();
				return false;
		
			}	
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
		return $this->getConexao()->commit();
	}
	
	function retornaLista() {
		$sql = "SELECT * FROM mapa
				INNER JOIN usuario_mapa
				ON usuario_mapa.id_mapa = mapa.id_mapa
				LIMIT 1000";
		$lista = array();
		try {
			$db = $this->getConexao();
			$stmt = $db->query($sql);
			$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
			
			foreach($dados as $linha){
				$mapa = new Mapa();
				$mapa->setId($linha['id_mapa']);
				$mapa->setTitulo($linha['titulo']);
				$mapa->getDono()->setId($linha['id_usuario_dono']);
				$lista[] = $mapa;
			}
			return $lista;
			
		} catch(PDOException $e) {
			echo '{"erro":{"text":'. $e->getMessage() .'}}';
		}
	}
	
	function retornaListaUsuario(Usuario $dono) {
		
		$idUsuario = $dono->getId();
		
		$sql = "SELECT * FROM mapa
				INNER JOIN usuario_mapa
				ON usuario_mapa.id_mapa = mapa.id_mapa
				WHERE id_usuario_dono = :usuario
				LIMIT 1000";	
		$lista = array();
		try {
			$db = $this->getConexao();
			
			$stmt = $db->prepare($sql);
			$stmt->bindParam("usuario", $idUsuario, PDO::PARAM_STR);
			$stmt->execute();
			
			$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
			foreach($dados as $linha){
				
				$mapa = new Mapa();
				$mapa->setId($linha['id_mapa']);
				$mapa->setTitulo($linha['titulo']);
				$mapa->getDono()->setId($linha['id_usuario_dono']);
				$lista[] = $mapa;
			}
			return $lista;
		} catch(PDOException $e) {
			echo '{"erro":{"text":'. $e->getMessage() .'}}';
		}
	}
	
	
	
	
}

?>