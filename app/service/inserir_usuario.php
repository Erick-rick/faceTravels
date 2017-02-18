<?php 

function cadastrar(){

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
cadastrar();

?>