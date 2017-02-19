<?php 

class UsuarioController{
	
	public static function cadastrar(){
	
		if(!(isset($_POST['nome']) && isset($_POST['login']) && isset($_POST['senha']))){
			echo "Incompleto";
			return;
		}
	
	
		$usuario = new Usuario();
		$usuario->setNome($_POST['nome']);
		$usuario->setLogin($_POST['login']);
		$usuario->setSenha($_POST['senha']);
	
		$usuarioDao = new UsuarioDAO();
		if($usuarioDao->inserir($usuario)){
			echo "Sucesso";
		}else{
			echo "Fracasso";
		}
	}
	
	public function logar(){
		
		
	}
	public static function listar(){

		$usuarioDao = new UsuarioDAO();
		$lista = $usuarioDao->retornaLista();
		$listaUsuarios['usuarios'] = array();
		foreach($lista as $linha){
			$usuarios['usuarios'][] = array('id_usuario' => $linha->getId(), 'nome' => $linha->getNome(), 'login' => $linha->getLogin(), 'senha' => $linha->getSenha(), 'id_facebook' => $linha->getIdFacebook());
		}
		echo json_encode($usuarios);
		
	}
	
	
}


?>