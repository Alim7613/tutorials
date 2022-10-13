<?php

/*****************   
		PHP TUTORIAL
******************************/




// in php keyword   e.g. if while and etc   classes or function  not case sensitive
//  IF   == if

//
#
/**/


// declare   Global var 

function test(){
	global $c,$x;

	$GLOBALS['v'];
}

// in normaly  when a fun  excuted  --->  delete  var      static var  Not delete

function ali(){
	static $v=0;
}


echo ///===> dont return value    // faster than
print() /// ====> return value of 1  



////   string function in php

strlen(); //length


strrev();  /// reverse  a string

strpos(); // return position of word   if not exist return false



//A common example of using the resource data type is a database call.



str_word_count();
//function counts the number of words in a string


strpos(); 
//Search For a Text Within a String

strpos("Hello world!", "world");
// outputs 6



str_replace(); 
//function replaces some characters with some other characters in a string.

str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!



is_int() == is_integer(); 

is_float() == is_double();

(int)$x  == intval();


// abs in Math PHP ---> absolute value



///Unlike variables, constants are automatically *Global* across the entire script.


///       define(name, value, case-insensitive)




//  .=Concatenation assignment


//  1. Indexed arrays - Arrays with a numeric index

/// 2. Associative arrays - Arrays with named keys

/// 3.Multidimensional arrays - Arrays containing one or more arrays



///Get The Length of an Array - The count() Function




sort(); //- sort arrays in ascending order


rsort(); //- sort arrays in descending order

asort(); //- sort associative arrays in ascending order, according to the value

ksort();  //- sort associative arrays in ascending order, according to the key


arsort(); //- sort associative arrays in descending order, according to the value


krsort(); //- sort associative arrays in descending order, according to the key


$GLOBALS[index];



$_SERVER['PHP_SELF'];

///	Returns the filename And path of the currently executing script


$_SERVER['GATEWAY_INTERFACE'];

//Returns the version of the Common Gateway Interface (CGI) the server is using

$_SERVER['SERVER_ADDR'];

//Returns the IP address of the host server


$_SERVER['SERVER_NAME'];

//Returns the name of the host server (such as www.w3schools.com or localhost)  


// CGI Common Getway Interface

//یک برنامه CGI یک قطعه‌ای از کد است که در سرور اجرا میشود و محتوای سفارشی تولید می نماید.

 //برنامه CGI در سرور اجرا می‌شود.


$_SERVER['SERVER_SOFTWARE'];

// 'Apache/2.4.39 (Win32) PHP/7.3.5'


$_SERVER['SERVER_PROTOCOL'];

// HTTP  HTTPS

$_SERVER['REQUEST_METHOD'];

//Returns the request method used to access the page (such as POST or GET)

$_SERVER['REQUEST_TIME'];

//Returns the timestamp of the start of the request (such as 1377687496)

$_SERVER['QUERY_STRING'];

//Returns the query string if the page is accessed via a query string

$_SERVER['HTTP_ACCEPT'];

//Returns the Accept header from the current request

$_SERVER['HTTP_HOST'];

//Returns the Host header from the current request  e.g.  localhost


$_SERVER['HTTP_REFERER'];

//Returns the complete URL of the current page (not reliable because not all user-agents support it)

$_SERVER['REMOTE_ADDR'];

//Returns the IP address from where the user is viewing the current page

$_SERVER['REMOTE_HOST'];


$_SERVER['REMOTE_PORT'];



$_SERVER['SCRIPT_FILENAME'];

//Returns the absolute pathname of the currently executing script
//D:/dw/wamp/www/it/addation/server.php

$_SERVER['SERVER_ADMIN'];

//wampserver@wampserver.invalid

$_SERVER['SERVER_SIGNATURE'];

//Returns the server version and virtual host name which are added to server-generated pages

/// <address>Apache/2.4.39 (Win32) PHP/7.3.5 Server at localhost Port 80</address>

$_SERVER['SCRIPT_NAME'];

///Returns the path of the current script
///it/addation/server.php


$_SERVER['SCRIPT_URI'];
//	Returns the URI of the current page
