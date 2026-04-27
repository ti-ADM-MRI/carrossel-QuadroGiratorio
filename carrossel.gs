
function doGet() {
  return HtmlService.createHtmlOutputFromFile('quadroGiratorio')
    .setTitle('Quadro Giratório - Cubo Mágico')
    .setWidth(600)
    .setHeight(600);
}
