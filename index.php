<?php
// ini_set('display_startup_errors',1);
// ini_set('display_errors',1);
// error_reporting(-1);

if(include 'simple_html_dom.php') {
	$html = file_get_html( 'http://varzesh3.com/');
	foreach ($html->find("div[id='tv-schedule']") as $element)
		$tv_schedule = $element;
	$html->clear();
	unset($html);
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>فوتبال روی آنتن</title>
		<link href="assets/css/main.css" rel="stylesheet">
		<link href="assets/css/css-reset.css" rel="stylesheet">
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/persianumber.min.js"></script>
		<script src="assets/js/game-manipulate.js"></script>
	</head>
	<body>
		<span id="data-holder">
			<?php echo $tv_schedule;
					$tv_schedule->clear();
					unset( $tv_schedule); ?>
		</span>

		<script>
			$("#data-holder").persiaNumber();

			gameManipulate();
		</script>

		<main class="main">
			<section class="channel">
				<header class="channel__logo">
					<img class="channel__img" src="assets/images/3.png">
				</header>
				<section class="games" id="games--three">
				</section>
			</section>
			<section class="channel">
				<header class="channel__logo">
					<img class="channel__img" src="assets/images/varzesh.png">
				</header>
				<section class="games" id="games--varzesh">
				</section>
			</section>
		</main>

		<script>
			showGames();
		</script>
		</body>
	</html>
