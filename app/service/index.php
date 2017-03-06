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
	<h1>Inserir Usuario</h1>
	<?php 
	
	exibirFormulario( array('nome', 'login', 'senha'), 'usuario/inserir_usuario.php');
	
	?>

	<h1>Autenticar</h1>
	<form action="autenticar_usuario.php" method="post">
		<input type="text" name="login" />
		<input type="text" name="senha" />
		<input type="submit" name="Enviar" />
	</form>
	
	<h1>Novo Mapa</h1>
	<form action="mapa/inserir_mapa.php" method="post">
		<input type="text" name="id_usuario" />
		<input type="text" name="titulo" />
		<input type="submit" name="Enviar" />
	</form>
	
	
	<form action="mapa/listar_mapas.php" method="post">
		<input type="text" name="id_usuario_dono" />
		<input type="submit" name="Enviar" />
	</form>
	
	
	
	</body>
</html>

