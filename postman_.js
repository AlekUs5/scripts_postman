//Create_Request
pm.test("Pokemon is created", function () {
    pm.expect(pm.response.text()).to.include("Покемон создан");
});
var response = JSON.parse(responseBody);
pm.collectionVariables.set("pokemon_id", response.id);

// Pre-request Script to Battle Request

pm.sendRequest(pm.environment.get("host_pre"),
function (err, response) {
var jsonData = response.json();
var enemy_id = jsonData[3].id;
pm.collectionVariables.set("enemy_id", enemy_id);
});