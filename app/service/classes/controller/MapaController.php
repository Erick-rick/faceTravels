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
	public static function listar() {
		
		$mapaDao = new MapaDAO();
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);

		
		if(!isset($post['id_usuario_dono'])){
			
			$lista = $mapaDao->retornaLista();
		}
		else{
			
			$dono = new Usuario();
			$dono->setId($post['id_usuario_dono']);
			$lista = $mapaDao->retornaListaUsuario($dono);
			
		}
		$listaMapas ['mapas'] = array ();
		foreach ( $lista as $linha ) {
			$listaMapas ['mapas'] [] = array (
					'id_mapa' => $linha->getId(),
					'titulo' => $linha->getTitulo(),
					'id_usuario_dono' => $linha->getDono()->getId()
						
						
			);
		}
		echo json_encode ( $listaMapas );
	}
	
	
	
}


?>