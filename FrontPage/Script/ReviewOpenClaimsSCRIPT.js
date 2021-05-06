/*
function ReviewOpenClaimsSCRIPT()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://app-amerindportal-test.azurewebsites.net/Home/Index?accountId=19");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkHomeAccountid19' link.
  Aliases.browser.pageIndex.nav.textnode.textnode2.linkHomeAccountid19.Click();
  //Posts an information message to the test log.
  Log.Message("We are in the IF", "");
  //while(ProjectSuite.Variables.Iteration != 10)
  //{
    ////Project.Variables.TribeData2.Reset();
    //for(; !Project.Variables.TribeData2.IsEOF();)
    //{
      ////Row 1
      ////Checks whether the property value matches the specified condition. 
      ////aqObject.CompareProperty(Aliases.browser.pageIndex.cell.contentText, 12, Project.Variables.TribeData2.Value("Claimant Name"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell2.contentText, 12, Project.Variables.TribeData2.Value("Claim Number"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell3.contentText, 0, Project.Variables.TribeData2.Value("Loss Date"), false);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell4.contentText, 6, Project.Variables.TribeData2.Value("Total Incurred"), false);
      //Row 2
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell37.contentText, 12, Project.Variables.TribeData2.Value("Claimant Name"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell38.contentText, 12, Project.Variables.TribeData2.Value("Claim Number"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell39.contentText, 0, Project.Variables.TribeData2.Value("Loss Date"), false);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell40.contentText, 6, Project.Variables.TribeData2.Value("Total Incurred"), false);
      //Row 3
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell33.contentText, 12, Project.Variables.TribeData2.Value("Claimant Name"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell34.contentText, 12, Project.Variables.TribeData2.Value("Claim Number"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell35.contentText, 0, Project.Variables.TribeData2.Value("Loss Date"), false);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell12.contentText, 6, Project.Variables.TribeData2.Value("Total Incurred"), false);
      //Row 4
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell9.contentText, 12, Project.Variables.TribeData2.Value("Claimant Name"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell10.contentText, 12, Project.Variables.TribeData2.Value("Claim Number"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell11.contentText, 0, Project.Variables.TribeData2.Value("Loss Date"), false);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell16.contentText, 6, Project.Variables.TribeData2.Value("Total Incurred"), false);
      //ProjectSuite.Variables.Iteration = 10;
      Project.Variables.TribeData2.Next();
    }
  }
}     //aqObject.CompareProperty(Aliases.browser.pageIndex.cell34.contentText, 12, Project.Variables.TribeData1.Value("Claim Number"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell35.contentText, 0, Project.Variables.TribeData1.Value("Loss Date"), false);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell12.contentText, 6, Project.Variables.TribeData1.Value("Total Incurred"), false);
      //Row 4
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell9.contentText, 12, Project.Variables.TribeData1.Value("Claimant Name"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell10.contentText, 12, Project.Variables.TribeData1.Value("Claim Number"), false, 3);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell11.contentText, 0, Project.Variables.TribeData1.Value("Loss Date"), false);
      //Checks whether the property value matches the specified condition. 
      //aqObject.CompareProperty(Aliases.browser.pageIndex.cell16.contentText, 6, Project.Variables.TribeData1.Value("Total Incurred"), false);
      //ProjectSuite.Variables.Iteration = 10;
      Project.Variables.TribeData1.Next();
    }
  }
}
*/

/*
function ReviewOpenClaimsSCRIPT()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://app-amerindportal-test.azurewebsites.net/Home/Index?accountId=19");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkHomeAccountid19' link.
  Aliases.browser.pageIndex.nav.textnode.textnode2.linkHomeAccountid19.Click();
  
  Tables.OpenCLaimList.Check();

  
  var info = "";
  var myTab = getElementById('OpenCLaimList');
  
  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
  for (i = 1; i < myTab.rows.length; i++) {
    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    var objCells = myTab.rows.item(i).cells;

    // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
    for (var j = 0; j < objCells.length; j++) {
      info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
      if(j=1){
        Log.Message("We are in the IF", "");
        aqObject.CompareProperty(Aliases.browser.pageIndex.cell.contentText, 12, Project.Variables.TribeData.Value("Claimant Name"), false, 3);
        Log.Message("We are in the IF", "");
        }
      }
    }
  }
  
  
function ReviewOpenClaimsSCRIPT()
{
Browsers.Item(btChrome).Navigate("https://app-amerindportal-test.azurewebsites.net/Home/Index?accountId=19");
var page = Sys.Browser("*").Page("*");

//looks for the table tag
var table = page.WaitElement("table");

// You can also use the FindChild method
// var table = page.FindChild("tagName", "table", 10);
if (table.Exists)
{
  // Goes through the rows and cells of the table
  for (var i = 0; i < table.rows.length; i++)
  {
    Log.AppendFolder("Row " + i);
    for (var j = 0; j < table.rows.item(i).cells.length; j++)
      Log.Message("Cell " + j + ": " + table.rows.item(i).cells.item(j).innerText);
    Log.PopLogFolder();
  }
}
else
  Log.Warning("The table was not found");
  }
*/  
  
  
  
function Main()
{

  Browsers.Item(btChrome).Navigate("https://app-amerindportal-test.azurewebsites.net/Home/Index?accountId=19");
  var page = Sys.Browser("*").Page("*");

  var table = page.WaitElement("table");
  // You can also use the FindChild method
  // var table = page.FindChild("tagName", "table", 10);
  if (table.Exists)
    // Parses the table
    ParseTable(table);
  else
    Log.Warning("The table is not found.");

}

function ParseTable(ATable)
{

  Log.AppendFolder("Table");

  // Parses the TBODY elements
  for (var i = 0; i < ATable.tBodies.length; i++)
  {
    Log.AppendFolder("TBody " + i);
    ParseTableBody(ATable.tBodies.item(i));
    Log.PopLogFolder();
  }

  Log.PopLogFolder();
}

// Parses TBODY
function ParseTableBody(ABody)
{
  // Goes through rows
  for (var i = 0; i < ABody.rows.length; i++)
  {
    // Obtains a row
    var row = ABody.rows.item(i);
    Log.AppendFolder("Row " + i);
    // Goes through cells
    for (var j = 0; j < row.cells.length; j++)
    {
      // Obtains a cell
      var cell = row.cells.item(j);
      // Posts the cell's text to the log
      Log.Message("Cell " + j + ": " + cell.innerText);
    }
    Log.PopLogFolder();
  }

}