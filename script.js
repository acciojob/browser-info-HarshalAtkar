let agent = navigator.userAgent;
  let agent1 = navigator.appName;
  let agent2 = navigator.appVersion;
  let div = document.getElementById("browser-info");
  div.innerText =( "You are using " + agent + ", version " + agent1 + ", version " + agent2);