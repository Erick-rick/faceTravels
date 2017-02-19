<?php
class UsuarioController {
	public static function cadastrar() {
		
		
		if (! (isset ( $_POST ['nome'] ) && isset ( $_POST ['login'] ) && isset ( $_POST ['senha'] ))) {
			echo "Incompleto";
			return;
		}
		
		$usuario = new Usuario ();
		$usuario->setNome ( $_POST ['nome'] );
		$usuario->setLogin ( $_POST ['login'] );
		$usuario->setSenha ( $_POST ['senha'] );
		if(isset($_POST['id_face'])){
			$usuario->setIdFacebook($_POST['id_face']);
		}
		if(isset($_POST['sexo'])){
			$usuario->setSexo($_POST['sexo']);
		}
		
		$usuarioDao = new UsuarioDAO ();
		if ($usuarioDao->inserir ( $usuario )) {
			echo "Sucesso";
		} else {
			echo "Fracasso";
		}
	}
	public static function logar() {
		
		if(!(isset($_POST['login']) && isset($_POST['senha']))){
			echo "Incompleto";
			return;
		}
		$usuario = new Usuario();
		$usuario->setLogin($_POST['login']);
		$usuario->setSenha($_POST['senha']);
		$usuarioDao = new UsuarioDAO();
		$usuarioDao->autenticar($usuario);
		
		
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
}

?>