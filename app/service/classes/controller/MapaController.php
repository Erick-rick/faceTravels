<?php



class MapaController{

	
	public static function cadastrar(){
		
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if (! (isset ( $post ['id_usuario'] ) && isset ( $post['titulo'] ))) 
		{
			echo "Incompleto";
			return;
		}
		$mapa = new Mapa();
		$mapa->getDono()->setId($post['id_usuario']);
		$mapa->setTitulo($post['titulo']);
		$dao = new MapaDAO();
		if($dao->inserir($mapa)){
			echo 'Sucesso';
		}else{
			echo 'Fracasso';
		}
		
	}
	
	
}


?>