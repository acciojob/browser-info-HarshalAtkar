//your JS code here. If required.
let agent=navigator.userAgent;
let agent1=navigator.appName;
let agent2=navigator.appVersion;
let div=getelementbyId("browser-info")
	div.innertext("you are using"   ${agent},"version" ${ agent1},"version" ${agent2});