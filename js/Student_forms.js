function regformhash(form, sid, uid, email, password, conf, admin){
  //check each field has a value
  var p= document.createElement("input");
  form.appendChild(p);
  p.name="p";
  p.type="hidden";
  p.value=hex_sha512(password.value);
  //
  password.value="";
  conf.value="";
  form.submit();

  return true;
}
