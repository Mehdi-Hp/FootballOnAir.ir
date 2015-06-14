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

		<link rel="shortcut icon" href="assets/images/favicons/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="assets/images/favicons/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="assets/images/favicons/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="assets/images/favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="assets/images/favicons/android-chrome-192x192.png" sizes="192x192">
		<meta name="msapplication-square70x70logo" content="assets/images/favicons/smalltile.png" />
		<meta name="msapplication-square150x150logo" content="assets/images/favicons/mediumtile.png" />
		<meta name="msapplication-wide310x150logo" content="assets/images/favicons/widetile.png" />
		<meta name="msapplication-square310x310logo" content="assets/images/favicons/largetile.png" />


		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/persianumber.min.js"></script>
		<script src="assets/js/game-manipulate.js"></script>
	</head>
	<body>
		<span id="data-holder" style="visibility: hidden;">
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
			gameManipulate();
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
