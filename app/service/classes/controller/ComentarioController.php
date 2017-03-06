<?php



class ComentarioController{
	
	public static function cadastrar() {
	
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if (! (isset ( $post ['id_mapa'] ) && isset ( $post['id_usuario_autor'] ) && isset ( $post['texto'] ))) {
			echo "Incompleto";
			return;
		}
	
		$comentario = new Comentario();
		$comentario->getMapa()->setId($post['id_mapa']);
		$comentario->getAutor()->setId($post['id_usuario_autor']);
		$comentario->setTexto($post['texto']);
		
		$dao = new ComentarioDAO();
		if ($dao->inserir ( $comentario )) {
			echo "Sucesso";
		} else {
			echo "Fracasso";
		}
	}
	
	
}

?>