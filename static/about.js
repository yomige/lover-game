window.unLockPositions = () => {

  let lockCode = $("#lockCode").val()

  if (lockCode !='888996') {    
    alert('识别码错误')
    return
  }

  localStorage.setItem('vip', true)
  location.href = "/position"
}