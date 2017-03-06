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
	
	
	public static function listar() {
		$dao = new ComentarioDAO();
		
		$lista = $dao->retornaLista ();
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
		echo json_encode ( $usuarios );
	}
	
}

?>