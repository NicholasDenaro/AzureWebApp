<?php
$path="./";
$results=scandir($path);

$ret="";

foreach($results as $result)
{
	if($result=="./." || $result=="./..")
	
	{
		continue;
	}
	
	if(is_dir($path.$result))
	{
		//some sort of return for it is a path;
		$ret=$ret."|".$path.$result;
	}
}

echo $ret;

?>