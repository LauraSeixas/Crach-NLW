const LinksSocialMedia = {
  github = "LauraSeixas",
  instagram = "lau.seixasl",
  youtube = "youtube",
  twitter = "lau_seixas",
  facebook = "lauraseixas88"
}
//dom é o mapeamento do html

function changeSocialMediaLinks() {
  
  for(let li of socialLinks.children) {
    const social = li.getattribute('class')

    li.children[0].href= `https://${social}.com/${LinksSocialMedia[social]}`

  }
} 

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(Response => Response.json())
  .then(data => {
    user_name.textcontent = data.name
    userBio.textcontent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textcontent = data.login
  
  })
}

getGitHubProfileInfos()