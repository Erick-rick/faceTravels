<?php



class ComentarioController{
	private $post;
	
	public function ComentarioController(){
		$json = file_get_contents("php://input");
		$this->post = json_decode($json, true);
		if($_SERVER['HTTP_HOST'] == "localhost"){
			foreach($_POST as $chave => $valor){
				$this->post[$chave] = $valor;
			}
		}
		
	}
	public function cadastrar() {
	
		
		if (! (isset ( $this->post ['id_mapa'] ) && isset ( $this->post['id_usuario_autor'] ) && isset ( $this->post['texto'] ))) {
			echo "Incompleto";
			return;
		}
	
		$comentario = new Comentario();
		$comentario->getMapa()->setId($this->post['id_mapa']);
		$comentario->getAutor()->setId($this->post['id_usuario_autor']);
		$comentario->setTexto($this->post['texto']);
		
		$dao = new ComentarioDAO();
		if ($dao->inserir ( $comentario )) {
			echo "Sucesso";
		} else {
			echo "Fracasso";
		}
	}
	
	
	public function listar() {
		
		$dao = new ComentarioDAO();
		
		if(!isset($this->post['id_mapa'])){
				
			$lista = $dao->retornaLista ();
		}
		else{
				
			$mapa = new Mapa();
			$mapa->setId($this->post['id_mapa']);
			$lista = $dao->retornaListaMapa($mapa);
			
		}
		
		$listaComentarios['comentarios'] = array ();
		foreach ( $lista as $linha ) {
			$listaComentarios['comentarios'] [] = array (
					'id_comentario' => $linha->getId(),
					'texto' => $linha->getTexto(),
					'id_mapa' => $linha->getMapa()->getId(),
					'id_usuario_autor' => $linha->getAutor()->getId(),
					'data' => $linha->getData()
			);
		}
		echo json_encode ( $listaComentarios );
	}
	
}

?>