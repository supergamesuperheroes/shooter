public var namePlayer : GameObject;
public var scorePlayer  : GameObject;
var url = "http://localhost:3000/scores";
var flagUpdate = false;

function Start() {

	var www : WWW = new WWW (url);

	// Wait for download to complete
	yield www;

	// assign texture
	var scoresAndPlayers : String;
	scoresAndPlayers = www.text;

	if (scoresAndPlayers.length < 2) {
		scoresAndPlayers = PlayerPrefs.GetString("Scores");
	};
	var informationArray : String[] = scoresAndPlayers.Split("/"[0]);

	//PlayerPrefs.SetString("Scores", scoresAndPlayers);

	var spawnPointName= new Vector2(-4, 2.5);
	var spawnPointScore = new Vector2(4, 2.5);
	var scoreObject = GameObject.FindGameObjectWithTag("gameOver");
	var score = scoreObject.GetComponent(gameOver).score;
	var flag = false;
	var k = 0;
	scoresAndPlayers = "";

	for (var i = 0; (i < informationArray.length - 1) && (k < 5); i = i+2) {
    var highScore : int;
    highScore = parseInt(informationArray[i + 1]);
    var cloneName = Instantiate(namePlayer , spawnPointName, Quaternion.identity);
    var cloneScore = Instantiate(scorePlayer , spawnPointScore, Quaternion.identity);
    if (score > highScore && !flag) {
    	scoresAndPlayers = scoresAndPlayers + PlayerPrefs.GetString("Player") + "/";
    	scoresAndPlayers = scoresAndPlayers + score + "/";
    	cloneName.GetComponent(TextMesh).text = PlayerPrefs.GetString("Player");
	    cloneScore.GetComponent(TextMesh).text = score.ToString();
	    flag = true;
	    i = i -2;
    } else {
    	scoresAndPlayers = scoresAndPlayers + informationArray[i] + "/";
    	scoresAndPlayers = scoresAndPlayers + informationArray[i + 1] + "/";
	    cloneName.GetComponent(TextMesh).text = informationArray[i];
	    cloneScore.GetComponent(TextMesh).text = informationArray[i + 1];
    };
    spawnPointName.y = spawnPointName.y -1;
    spawnPointScore.y = spawnPointScore.y -1;
    k = k + 1;
  }

  if (k < 5 && !flag) {
  	cloneName = Instantiate(namePlayer , spawnPointName, Quaternion.identity);
    cloneScore = Instantiate(scorePlayer , spawnPointScore, Quaternion.identity);
    cloneName.GetComponent(TextMesh).text = PlayerPrefs.GetString("Player");
	  cloneScore.GetComponent(TextMesh).text = score.ToString();
		scoresAndPlayers = scoresAndPlayers + PlayerPrefs.GetString("Player") + "/";
    scoresAndPlayers = scoresAndPlayers + score + "/";
	};

  PlayerPrefs.SetString("Scores", scoresAndPlayers);
  yield WaitForSeconds(3);
  flagUpdate = true;
}

function Update() {
	if (Input.anyKey && flagUpdate) {
		Destroy(GameObject.FindGameObjectWithTag("gameOver"));
		Application.LoadLevel(0);
	}
}

