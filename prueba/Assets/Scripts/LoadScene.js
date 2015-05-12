#pragma strict

public var loadingImage : GameObject;

public function LoadScene(scene : int ) {
	loadingImage.SetActive(true);
	Application.LoadLevel(scene);
}