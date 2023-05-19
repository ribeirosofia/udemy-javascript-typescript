const name = "Joane";

function displayName() {
  console.log(name);
}
function useDisplayName() {
  const name = "Alex";
  displayName();
}

useDisplayName();
