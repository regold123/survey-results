
function doGet() {
 return HtmlService.createTemplateFromFile('Results').evaluate();
}


function getCities() {
  var spreadsheetId = '1D8scXk10ZWXwZ7yl9hhIpdOC9p77aMzbv-NiGJPnIB0';
  var rangeName = 'A2:A1100';
  var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  if (!values) {
    Logger.log('No data found.');
  } else {
    return values
  }  
}


function getMikvaot() {
  var ssChoices = '1D8scXk10ZWXwZ7yl9hhIpdOC9p77aMzbv-NiGJPnIB0';
//  var ssResults = '13nen7-87aZcZHa2q7hXAg5bO-SO3DDuEBmF1FiAvYpE';
//  var wsResults = ssResults.getSheetByName("Form Responses Sorted");
  var choicesDataRange = 'B2:C1044';
//  var resultsDataRange = 'B2:N';
  var choicesDataTuples = Sheets.Spreadsheets.Values.get(ssChoices, choicesDataRange).values;
//  var resultsDataTuples = Sheets.Spreadsheets.Values.get(wsResults, resultsDataRange).values;
  var cityDict = {};
//  var resultsDict = {};
 
  for(var i = 0; i < choicesDataTuples.length; i++) {  
    var datum1 = choicesDataTuples[i];
      if (!cityDict[datum1[0]]) {
          cityDict[datum1[0]] = [];
      }
    cityDict[datum1[0]].push(datum1[1]);
  }
  return cityDict
  
  
//  for(var j = 0; j < resultsDataTuples.length; j++) {  
//    var datum2 = resultsDataTuples[i];
//      if (!resultsDict[datum2[0]]) {
//          resultsDict[datum2[0]] = [];
//      }
//    resultsDict[datum2[0]].push(datum2[1]);
//  }
//  return resultsDict
}        


function getTableData(){

  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/13nen7-87aZcZHa2q7hXAg5bO-SO3DDuEBmF1FiAvYpE/")
  var wsSorted = ss.getSheetByName("Form Responses Sorted");
  var wsNotSorted = ss.getSheetByName("Form Responses 1");
  var realLastRow = wsNotSorted.getLastRow()-1;
  var data = wsSorted.getRange(2, 2, realLastRow,13).getValues();
  return data;
}