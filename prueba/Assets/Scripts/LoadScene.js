#pragma strict

public var loadingImage : GameObject;
var userName : String;
var inputField : UnityEngine.UI.InputField;

function startGame () {
	PlayerPrefs.SetString("Player", inputField.text);
	loadingImage.SetActive(true);
	Application.LoadLevel(1);
}