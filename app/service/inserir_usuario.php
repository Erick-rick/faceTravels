<?php 

function __autoload($classe) {
	if (file_exists ( 'classes/dao/' . $classe . '.php' ))
		include_once 'classes/dao/' . $classe . '.php';
		if (file_exists ( 'classes/model/' . $classe . '.php' ))
			include_once 'classes/model/' . $classe . '.php';
			if (file_exists ( 'classes/controller/' . $classe . '.php' ))
				include_once 'classes/controller/' . $classe . '.php';
				if (file_exists ( 'classes/util/' . $classe . '.php' ))
					include_once 'classes/util/' . $classe . '.php';
					if (file_exists ( 'classes/view/' . $classe . '.php' ))
						include_once 'classes/view/' . $classe . '.php';
}


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