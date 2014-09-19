<?php
$path="./";
$results=scandir($path);

$ret="";

foreach($results as $result)
{
	if($result==='./' or result==='../')
	{
		continue;
	}
	
	if(is_dir($path.$result))
	{
		//some sort of return for it is a path;
		$ret=$ret."|".$path.$result;
	}
}

echo "\n||\n";
echo $ret;

?>