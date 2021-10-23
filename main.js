const LinksSocialMedia = {
  github: 'LauraSeixas',
  youtube: '',
  facebook: 'lauraseixas88',
  instagram: 'lau.seixasl', 
  twitter: 'lau_seixas', 
}
//dom é o mapeamento do html

function ChangeSocialMediaLinks() { 
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href= `https://${social}.com/${LinksSocialMedia[social]}`

  }
} 

ChangeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(Response => Response.json())
  .then(data => {
    user_name.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  
  })
}

getGitHubProfileInfos()