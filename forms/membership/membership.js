let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
    
Submit.onclick=function(){
  for (var i = 0; i <= members.length; i++){
    if (inptName.value == members[i]){
      lblMessage1.value = `You are a member!`
    } else {
      lblMessage1.value = `You are NOT a member!`
      members.push(inptName.value)
      console.log(members)
}
}
console.log(lblMessage1)
}

