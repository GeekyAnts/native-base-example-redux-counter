let count= 0;
export default function(state=count, action){
  switch (action.type) {
    case "Increment": count++;
      break;
      case "Decrement": count--;
      break;
  }
  return count;
}
