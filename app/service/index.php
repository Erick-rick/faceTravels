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

function exibirFormulario($arrayCampos, $action){
	
	echo '<form action="'.$action.'" method="post">';
	
	foreach($arrayCampos as $campo){
		echo '<label for="'.$campo.'">'.$campo.'</label><br>';
		echo '<input type="text" name="'.$campo.'" id="'.$campo.'"/><br>';
	}
	
	echo '<input type="submit" name="Enviar" />
		</form>';	
	
}

?>
<!DOCTYPE html>
<html lang="pt-br" ng-app="mapApp">
   <head>
   <meta charset="UTF-8">
   </head>
	<body>

	<?php 
	
	
	$lista['operacao'] = "Inserir Usuario";
	$lista['campos'] = array('nome', 'login', 'senha');
	$lista['url'] = 'usuario/inserir_usuario.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Listar Usuarios";
	$lista['campos'] = array();
	$lista['url'] = 'usuario/lista_usuario.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Autenticar Usuario";
	$lista['campos'] = array('login', 'senha');
	$lista['url'] = 'usuario/autenticar_usuario.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Tornar Administrador";
	$lista['campos'] = array('id_usuario');
	$lista['url'] = 'usuario/tornar_adm.php';
	
	$matriz[] = $lista;
	
	
	$lista['operacao'] = "Excluir Usuário";
	$lista['campos'] = array('id_usuario');
	$lista['url'] = 'usuario/excluir_usuario.php';
	
	$matriz[] = $lista;

	$lista['operacao'] = "Usuario Por ID do Face";
	$lista['campos'] = array('id_face');
	$lista['url'] = 'usuario/consultar_face.php';
	
	$matriz[] = $lista;
	
	

	$lista['operacao'] = "Cadastrar Mapa";
	$lista['campos'] = array('id_usuario','titulo');
	$lista['url'] = 'mapa/inserir_mapa.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Listar Mapas";
	$lista['campos'] = array('id_usuario_dono');
	$lista['url'] = 'mapa/listar_mapas.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Inserir Comentario";
	$lista['campos'] = array('id_mapa', 'id_usuario_autor', 'texto');
	$lista['url'] = 'comentario/inserir_comentario.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Listar Comentarios";
	$lista['campos'] = array('id_mapa');
	$lista['url'] = 'comentario/listar_comentarios.php';
	
	$matriz[] = $lista;
	
	
	echo '<h1>Lista de serviços</h1>';
	foreach($matriz as $linha){
		echo '	<br><br><h2>'.$linha['operacao'].'</h2>';
		if(count($linha['campos']) > 0){
			exibirFormulario( $linha['campos'], $linha['url']);
			echo '<br>Campos POST: <br>';
			echo '<ul>';
			foreach($linha['campos'] as $campo){
				echo '<li>'.$campo.'</li>';
			}
			echo '</ul>';
		}
		
		echo 'URL: <a href="'.$linha['url'].'">'.$linha['url'].'</a>';
		
		
		echo '<hr>';
		
	}
	
	?>
	
	
	
	
	</body>
</html>

