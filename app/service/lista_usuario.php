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



$usuarioDao = new UsuarioDAO();
$lista = $usuarioDao->retornaLista();
$listaUsuarios['usuarios'] = array();
foreach($lista as $linha){
	$usuarios['usuarios'][] = array('id_usuario' => $linha->getId(), 'nome' => $linha->getNome(), 'email', 'login' => $linha->getLogin(), 'senha' => $linha->getSenha(), 'id_facebook' => $linha->getIdFacebook());
}
echo json_encode($usuarios);

?>