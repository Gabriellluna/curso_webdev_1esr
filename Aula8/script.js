document.getElementById("btn-buscar").onclick = async () => {
  const username = document.getElementById("input-usuario").value.trim();
  const info = document.getElementById("info-usuario");
  if (!username) {
    info.innerHTML = "<span class=\"text-danger\">Digite um usuário!</span>";
    return;
  }
  info.innerHTML = "Carregando...";
  const response = await fetch(`https://api.github/users/${username}`)

  if (!response.ok) throw new Error("Usuário não encontrado")

  const data = await response.json();

  

}