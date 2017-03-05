<?php


class UsuarioController {
	
	
	public static function cadastrar() {
		
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if (! (isset ( $post ['nome'] ) && isset ( $post['login'] ) && isset ( $post['senha'] ))) {
			
			
			echo "Incompleto";
			return;
		}
		
		$usuario = new Usuario ();
		$usuario->setNome ( $post ['nome'] );
		$usuario->setLogin ( $post ['login'] );
		$usuario->setSenha ( $post ['senha'] );
		if(isset($post['id_face'])){
			$usuario->setIdFacebook($post['id_face']);
		}
		if(isset($_POST['sexo'])){
			$usuario->setSexo($post['sexo']);
		}
		
		$usuarioDao = new UsuarioDAO ();
		if ($usuarioDao->inserir ( $usuario )) {
			echo "Sucesso";
		} else {
			echo "Fracasso";
		}
	}
	public static function logar() {
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if(!(isset($post['login']) && isset($post['senha']))){
			echo "Incompleto";
			return;
		}
		$usuarioDao = new UsuarioDAO();
		$usuario = new Usuario();
		$usuario->setLogin($post['login']);
		$usuario->setSenha($post['senha']);

		if($usuarioDao->autenticar($usuario)){
			$vUsuario[] = array (
					'id_usuario' => $usuario->getId (),
					'nome' => $usuario->getNome (),
					'login' => $usuario->getLogin (),
					'senha' => $usuario->getSenha (),
					'id_facebook' => $usuario->getIdFacebook (),
					'sexo' => $usuario->getSexo()
			);
			echo json_encode ($vUsuario);
			return;
		}
		echo 'Errou!';
		
		
	}
	public static function excluirUsuario() {
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if (isset ( $post ['id_usuario'] ))
		{
			echo "Incompleto";
			return;
		}
		$usuario = new Usuario();
		$usuario->setId($post['id_usuario']);
		$usuarioDao = new UsuarioDAO ();
		if($usuarioDao->excluir($usuario)){
			echo "sucesso!";
		}
		else{
			echo 'Erro!';
		}
		
	}
	public static function listar() {
		$usuarioDao = new UsuarioDAO ();
		$lista = $usuarioDao->retornaLista ();
		$listaUsuarios ['usuarios'] = array ();
		foreach ( $lista as $linha ) {
			$usuarios ['usuarios'] [] = array (
					'id_usuario' => $linha->getId (),
					'nome' => $linha->getNome (),
					'login' => $linha->getLogin (),
					'senha' => $linha->getSenha (),
					'id_facebook' => $linha->getIdFacebook (),
					'sexo' => $linha->getSexo()
			);
		}
		echo json_encode ( $usuarios );
	}
	public static function consultarUsuario(){
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if(!isset($post['id_usuario']))
		{
			echo "Incompleto";
			return;
		}		
		$dao = new UsuarioDAO();
		$usuario = new Usuario();
		$usuario->setId($post['id_usuario']);
		if(!$dao->constultarPorId($usuario)){
			echo 'N&atilde;o encontrado.';
			return;
			
		}
		$vUsuario[] = array (
				'id_usuario' => $usuario->getId (),
				'nome' => $usuario->getNome (),
				'login' => $usuario->getLogin (),
				'senha' => $usuario->getSenha (),
				'id_facebook' => $usuario->getIdFacebook (),
				'sexo' => $usuario->getSexo()
		);
		echo json_encode ($vUsuario);
	}
	
	public static function consultarFaceDoUsuario(){
		$json = file_get_contents("php://input");
		$post = json_decode($json, true);
		if(!isset($post['id_usuario']))
		{
			echo "Incompleto";
			return;
		}
		$dao = new UsuarioDAO();
		$usuario = new Usuario();
		$usuario->setId($post['id_usuario']);
		if(!$dao->constultarPorId($usuario)){
			echo 'N&atilde;o encontrado.';
			return;
				
		}
		if($usuario->getIdFacebook() != null){
			echo $usuario->getIdFacebook();
		}else{
			echo 'Inexistente.';
		}
	}
}

?>