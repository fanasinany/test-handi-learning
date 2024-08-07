window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear();
date = dd + '/' + mm + '/' + yyyy;
var player = GetPlayer();
var name_person = player.GetVar("Saisiedetexte");
var doc = new jsPDF({
    orientation: 'landscape'
})
var img = new Image;
img.onload = function () {
    doc.addImage(this, 0, 0, 297, 210);
    doc.setFontSize(40);
    doc.setTextColor(0, 0, 0);
    doc.text(name_person, (doc.internal.pageSize.width / 2), 120, null, null, 'center');
    doc.setFontSize(15);
    doc.text(date, (doc.internal.pageSize.width - 80), 196, null, null, 'center');
    doc.save("Certificate.pdf");
};
img.crossOrigin = "";
img.src = "https://i.postimg.cc/J7QCJRrT/crtf.png";
}

};
