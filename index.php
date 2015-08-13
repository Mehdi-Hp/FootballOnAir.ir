<?php
if(include 'builds/development/simple_html_dom.php') {
	$html = file_get_html( 'http://90tv.ir');
	foreach ($html->find("div[id='tv-schedule-content']") as $tv_schedule)
		echo $tv_schedule;
	$html->clear();
	unset($html);
}
?>
