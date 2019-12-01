function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JwnTfKtTKp":
        Script1();
        break;
      case "6o3ihPKMUXY":
        Script2();
        break;
      case "6L2cA1EGZNF":
        Script3();
        break;
      case "5v6xNq4OGnp":
        Script4();
        break;
      case "6YssOAazF1M":
        Script5();
        break;
      case "5a4zv2qceVm":
        Script6();
        break;
      case "6i4f0xDdL8P":
        Script7();
        break;
      case "6glLw3CqWEY":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

