<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-19 19:54:00
  from 'C:\OSPanel\domains\localhost\carid\templates\footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f147aa88a3880_74168603',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2880761fbd41676be2e9718d2ce5816dd7ec3126' => 
    array (
      0 => 'C:\\OSPanel\\domains\\localhost\\carid\\templates\\footer.tpl',
      1 => 1595177635,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f147aa88a3880_74168603 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'C:\\OSPanel\\domains\\localhost\\carid\\smarty-3.1.35\\libs\\plugins\\modifier.date_format.php','function'=>'smarty_modifier_date_format',),));
$_smarty_tpl->compiled->nocache_hash = '16235524685f147aa8718fa3_50346505';
?>
<footer>
	Copyrighted 2003  - <?php echo smarty_modifier_date_format(time(),"%Y");?>

	<p><?php echo (($tmp = @$_smarty_tpl->tpl_vars['author']->value)===null||$tmp==='' ? "John Doe" : $tmp);?>
</p>
</footer><?php }
}
