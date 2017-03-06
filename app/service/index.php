<!DOCTYPE html>
<html lang="pt-br" ng-app="mapApp">
   <head>
   </head>
	<body>
	<h1>Inserir Usuario</h1>
	<form action="inserir_usuario.php" method="post">
		<input type="text" name="nome" />
		<input type="text" name="login" />
		<input type="text" name="senha" />
		<input type="submit" name="Enviar" />
	</form>
	<?php 
	
	echo 'Teste<br>';
	echo substr('aa',0,1);
	
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

