export const firestoreComment=()=>{  var db = firebase.firestore();
// Add a new document with a generated id.
//averiguar diferencia entre set y add
const comment=document.getElementById("textfirestore")
db.collection("Postcomments").add({
     Comentario:comment.value 
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});}