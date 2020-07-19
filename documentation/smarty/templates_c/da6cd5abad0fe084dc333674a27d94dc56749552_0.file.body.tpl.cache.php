<?php
/* Smarty version 3.1.34-dev-7, created on 2020-07-19 20:04:08
  from 'C:\OSPanel\domains\localhost\carid\templates\body.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f147d08dabca4_85423398',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'da6cd5abad0fe084dc333674a27d94dc56749552' => 
    array (
      0 => 'C:\\OSPanel\\domains\\localhost\\carid\\templates\\body.tpl',
      1 => 1595178245,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:./footer.tpl' => 1,
  ),
),false)) {
function content_5f147d08dabca4_85423398 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'C:\\OSPanel\\domains\\localhost\\carid\\smarty-3.1.35\\libs\\plugins\\modifier.capitalize.php','function'=>'smarty_modifier_capitalize',),1=>array('file'=>'C:\\OSPanel\\domains\\localhost\\carid\\smarty-3.1.35\\libs\\plugins\\modifier.date_format.php','function'=>'smarty_modifier_date_format',),2=>array('file'=>'C:\\OSPanel\\domains\\localhost\\carid\\smarty-3.1.35\\libs\\plugins\\function.cycle.php','function'=>'smarty_function_cycle',),));
$_smarty_tpl->compiled->nocache_hash = '3539141055f147d08c0db40_79794424';
?>
<html>
	<head>
		<title><?php echo smarty_modifier_capitalize($_smarty_tpl->tpl_vars['title']->value);?>
</title>
	</head>
	<body>
		<?php $_smarty_tpl->_assignInScope('h1', "Smarty engine");?>
		<h1><?php echo mb_strtoupper($_smarty_tpl->tpl_vars['h1']->value, 'UTF-8');?>
</h1>
		<p>Date now <?php echo smarty_modifier_date_format(time(),"%Y-%m-%d %H:%M:%S");?>
</p>
		<p><?php echo $_smarty_tpl->tpl_vars['SCRIPT_NAME']->value;?>
</p>
		<p><?php echo $_smarty_tpl->tpl_vars['body']->value;?>
</p>
		<ul>
			<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['characters']->value, 'elem', false, 'index');
$_smarty_tpl->tpl_vars['elem']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['index']->value => $_smarty_tpl->tpl_vars['elem']->value) {
$_smarty_tpl->tpl_vars['elem']->do_else = false;
?>
				<?php echo $_smarty_tpl->tpl_vars['index']->value;?>
. <?php echo $_smarty_tpl->tpl_vars['elem']->value;?>
 <br/>
			<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
		</ul>
		<ul>
			<?php
$__section_elem_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['characters']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_elem_0_total = $__section_elem_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_elem'] = new Smarty_Variable(array());
if ($__section_elem_0_total !== 0) {
for ($__section_elem_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_elem']->value['index'] = 0; $__section_elem_0_iteration <= $__section_elem_0_total; $__section_elem_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_elem']->value['index']++){
?>
				<?php echo $_smarty_tpl->tpl_vars['characters']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_elem']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_elem']->value['index'] : null)];?>
 <br/>
			<?php
}
}
?>
		</ul>
		<table>
			<pre><?php echo var_dump($_smarty_tpl->tpl_vars['users']->value);?>
</pre>
			<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['users']->value, 'user');
$_smarty_tpl->tpl_vars['user']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['user']->value) {
$_smarty_tpl->tpl_vars['user']->do_else = false;
?>
				<tr style="background: <?php echo smarty_function_cycle(array('values'=>'#eee, lightblue'),$_smarty_tpl);?>
">
					<td><?php echo $_smarty_tpl->tpl_vars['user']->value['name'];?>
</td>
					<td><?php echo $_smarty_tpl->tpl_vars['user']->value['phone'];?>
</td>
				</tr>
			<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
		</table>
		<?php $_smarty_tpl->_subTemplateRender("file:./footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, $_smarty_tpl->cache_lifetime, array('author'=>"Jane Doe"), 0, false);
?>
	</body>
</html><?php }
}
