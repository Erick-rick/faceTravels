<?php



class MapaController{
	private $post;
	public function MapaController(){
		$json = file_get_contents("php://input");
		$this->post = json_decode($json, true);
		if($_SERVER['HTTP_HOST'] == "localhost"){
			foreach($_POST as $chave => $valor){
				$this->post[$chave] = $valor;
			}
		}
	}

	public function cadastrar(){
		
		$json = file_get_contents("php://input");
		$this->post = json_decode($json, true);

		
		
		if (! (isset ( $this->post ['id_usuario'] ) && isset ( $this->post['titulo'] ))) 
		{
			echo "Incompleto";
			return;
		}
		$mapa = new Mapa();
		$mapa->getDono()->setId($this->post['id_usuario']);
		$mapa->setTitulo($this->post['titulo']);
		$dao = new MapaDAO();
		if($dao->inserir($mapa)){
			echo 'Sucesso';
		}else{
			echo 'Fracasso';
		}
		
	}
	public function listar() {
		
		$mapaDao = new MapaDAO();
		$json = file_get_contents("php://input");
		$this->post = json_decode($json, true);

		
		if(!isset($this->post['id_usuario_dono'])){
			
			$lista = $mapaDao->retornaLista();
		}
		else{
			
			$dono = new Usuario();
			$dono->setId($this->post['id_usuario_dono']);
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