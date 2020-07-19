<html>
	<head>
		<title>{$title|capitalize}</title>
	</head>
	<body>
		{assign var=h1 value="Smarty engine"}
		<h1>{$h1|upper}</h1>
		{block sub=subtitle}{/block}
		<p>Date now {$smarty.now|date_format:"%Y-%m-%d %H:%M:%S"}</p>
		<p>{$SCRIPT_NAME}</p>
		<p>{$body}</p>
		<ul>
			{foreach from=$characters key=$index item=$elem}
				{$index}. {$elem} <br/>
			{/foreach}
		</ul>
		<ul>
			{section name=elem loop=$characters}
				{$characters[elem]} <br/>
			{/section}
		</ul>
		<table>
			<!-- <pre>{$users|var_dump}</pre> -->
			{foreach $users as $user}
				<tr style="background: {cycle values='#eee, lightblue'}">
					<td>{$user.name}</td>
					<td>{$user.phone}</td>
				</tr>
			{/foreach}
		</table>
		{include file="./footer.tpl" author="Jane Doe"}
	</body>
</html>