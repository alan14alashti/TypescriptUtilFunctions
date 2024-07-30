// recursive
// function getUnflatten (arr, parentid) {
//     let output = []
//     for(const obj of arr) {
//         if(obj.parentId === parentid) {
//             var children = getUnflatten(arr, obj.id)
//             if(children.length) {
//                   obj.children = children
//             }
//             output.push(obj)
//         }
//     }
//     return output
// }

const getUnflatten = (arr = [], parentId) => {
  let map = {}, node, res = [], i;
  for (i = 0; i < arr.length; i += 1) {
    map[arr[i].id] = i;
    arr[i].children = [];
  };
  for (i = 0; i < arr.length; i += 1) {
    node = arr[i];
    if (node.parentId !== parentId) {
      arr[map[node.parentId]].children.push(node);
    }
    else {
      res.push(node);
    };
  };
  return res;
};

export {getUnflatten}