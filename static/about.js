window.unLockPositions = () => {

  let lockCode = $("#lockCode").val()

  if (lockCode !='251233') {    
    alert('识别码错误')
    return
  }

  localStorage.setItem('vip', true)
  location.href = "/position"
}