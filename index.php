<?php
// ini_set('display_startup_errors',1);
// ini_set('display_errors',1);
// error_reporting(-1);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>فوتبال روی آنتن - جدول پخش زنده مسابقات فوتبال</title>
		<meta name="description" content="جدول پخش زنده فوتبال از شبکه‌های ۳ و ورزش">
		<meta name="keywords" content="پخش زنده,جدول پخش,فوتبال,شبکه ۳,شبکه ورزش,مسابقات فوتبال,ساعت پخش زنده فوتبال,">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="assets/css/main.css" rel="stylesheet">
		<link href="assets/css/css-reset.css" rel="stylesheet">
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/persianumber.min.js"></script>
		<script src="assets/js/game-manipulate.js"></script>
	</head>
	<body>
		<span id="data-holder">
			<?php
			if(include 'simple_html_dom.php') {
				$html = file_get_html( 'http://varzesh3.com/');
				foreach ($html->find("div[id='tv-schedule']") as $tv_schedule)
					echo $tv_schedule;
				$html->clear();
				unset($html);
			}
			?>
		</span>

		<script>
			$("#data-holder").persiaNumber();

			gameManipulate()
		</script>

		<main class="main">
			<section class="channel">
				<header class="channel__logo">
					<img class="channel__img" src="assets/images/3.png">
					<span class="channel__name">شبکه ۳</span>
				</header>
				<section class="games" id="games--three">
				</section>
			</section>
			<section class="channel">
				<header class="channel__logo">
					<img class="channel__img" src="assets/images/varzesh.png">
					<span class="channel__name">شبکه ورزش</span>
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
