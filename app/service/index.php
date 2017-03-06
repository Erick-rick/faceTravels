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
		echo '<label for="'.$campo.'">'.$campo.'</label>';
		echo '<input type="text" name="'.$campo.'" id="'.$campo.'"/>';
	}
	
	echo '<input type="submit" name="Enviar" />
		</form>';	
	
}

?>
<!DOCTYPE html>
<html lang="pt-br" ng-app="mapApp">
   <head>
   </head>
	<body>

	<?php 
	$lista['operacao'] = "Inserir Usuario";
	$lista['campos'] = array('nome', 'login', 'senha');
	$lista['url'] = 'usuario/inserir_usuario.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Autenticar Usuario";
	$lista['campos'] = array('login', 'senha');
	$lista['url'] = 'usuario/autenticar_usuario.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Listar Usuarios";
	$lista['campos'] = array();
	$lista['url'] = 'usuario/listar_usuario.php';
	
	$matriz[] = $lista;

	$lista['operacao'] = "Cadastrar Mapa";
	$lista['campos'] = array('id_usuario','titulo');
	$lista['url'] = 'mapa/inserir_mapa.php';
	
	$matriz[] = $lista;
	
	$lista['operacao'] = "Listar Mapas";
	$lista['campos'] = array('id_usuario_dono');
	$lista['url'] = 'mapa/listar_mapas.php';
	
	$matriz[] = $lista;
	
	foreach($matriz as $linha){
		echo '	<h1>'.$linha['operacao'].'</h1>';
		if(count($linha['campos']) > 0){
			exibirFormulario( $linha['campos'], $linha['url']);
			echo '<br>Campos POST:<br>';
			foreach($linha['campos'] as $campo){
				echo $campo.'<br>';
			}
		}
		else{
			echo $linha['url'];
		}
		
		echo '<hr>';
		
	}
	
	?>
	
	
	
	
	</body>
</html>

