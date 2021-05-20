// Add your javascript here
$(function(){
  // Instantiate the object:
  var store = new PersistentObject("settingsStore", {
    defaults: {
      person_name: null,  // no default, but present, so readFromForm will override
      person_surname: null,  // no default, but present, so readFromForm will override
      person_street: null,  // no default, but present, so readFromForm will override
      person_city: null,  // no default, but present, so readFromForm will override
      person_zip: null,  // no default, but present, so readFromForm will override
      person_phone: null,  // no default, but present, so readFromForm will override
      person_email: null,  // no default, but present, so readFromForm will override
    }
  });

  // Write stored settings (or defaults) to form
  store.writeToForm("#settingsForm");

  // Persist form data when [Save] is clicked
  $("#settingsForm").submit(function(event){
    store.readFromForm(this);
    event.preventDefault();
  });

  // --- The following code is used for the demo UI only:

  $("#btnShowData").click(function(){
    alert(localStorage.settingsStore);
  });
  $("#btnShowPO").click(function(){
    alert(JSON.stringify(store._data));
  });
  $("#btnResetData").click(function(){
    store.reset();
  });
  //$("#btnApplyData").click(function(){
  //  store.readFromForm("#settingsForm");
  //});
});