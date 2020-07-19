<?php 
require_once './smarty-3.1.35/libs/Smarty.class.php';
$smarty = new Smarty;
$smarty->caching = true;
$smarty->cache_lifetime = 120; // cache the page for 120 seconds
$smarty->template_dir = './templates'; // path to our templates
$smarty->compile_dir = './templates_c'; // path to compiled templates
$smarty->config_dir = './configs'; // path to configs

$title = 'Lorem ipsum';
$text = 'lorem ipsum dolor sit amet...';
$characters = array("Neo", "Morpheus", "Trinity", "Cypher", "Tank");

$smarty->assign('title', $title);
$smarty->assign('body', $text);
$smarty->assign('characters', $characters);
$smarty->assign('users', array(
	array('name' => 'bob', 'phone' => '555-3425'),
	array('name' => 'jim', 'phone' => '555-4364'),
	array('name' => 'joe', 'phone' => '555-3422'),
	array('name' => 'jerry', 'phone' => '555-4973'),
	array('name' => 'fred', 'phone' => '555-3235')
	));

$smarty->display('body.tpl');

// {* comment *}
// { $variable }
// { $obj.property }
// { $array[0]] }
// { include file='file1.tpl' }
// { if $true }
// 	do this
// { else }
// 	do this
// { /if }

// { literal }
// 	scripts ot styles to display
// { /literal } 

// Temporary local variables for certain file
// { assign var='name' value='John' }

// Looping
// { section name=key loop=$arr}
// 	{ $smarty.section.key.index }
// 	{ $arr[key] <br/> }
// { /section }
?>