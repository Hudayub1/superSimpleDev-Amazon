/* Main exercise */ 

const todoList = [{
  name: "hello",
  dueDate: '2025-7-22'
},
{
  name: "wash dish",
  dueDate: '2025-7-22'
},
{
  name: "dd",
  dueDate: '2025-7-22'
}]



function renderTodoList () {
  let todoListHTML = ''
  // when passing Fn to another Fn use Arrow Fn
  todoList.forEach((todoObject, index) => {
  const {name, dueDate} = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate} </div> 
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
      todoListHTML += html;
    
    console.log(todoListHTML)

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        })
      })
})}
  
   
  
renderTodoList();

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo()
})

function addTodo() {
  const inputEl = document.querySelector(".js-name-input")
  const name = inputEl.value;
  const dateInputEl = document.querySelector(".js-due-date-input")
  const dueDate = dateInputEl.value
  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  })
  console.log(todoList)
  inputEl.value = ''
  renderTodoList ()
}




      /* break Exercises */

/*
// 11a
  let nums = [10,20,30]
  nums[2] = 99
  
  console.log(nums)

// 11b
 

  function getLastValueArray(arr) {
    
    const lastVal = arr[arr.length -1]
    
    console.log(lastVal)
  }

  getLastValueArray([1,2,3])


// 11c

function arraySwap(arr) {
  const firstEl = arr[0];
  const lastEl = arr[arr.length - 1];

  arr[0] = lastEl 
  arr[arr.length - 1] = firstEl

  return arr
}
console.log(arraySwap([10,88,66,82]))

// 11d
  let i = 0
  for (let i = 0; i <= 10; i+=2){
    console.log(i) 
  }

// 11e 
  for (let i = 5; i >= 0; i--) {
    console.log(i)
  }

// 11f 
  while (i < 10) {
    i+=2
    console.log(i)
  }
  while (i > 0) {
    i--
    console.log(i)
  }

// 11g
  let arr = [1,2,3]

  for (let i = 0; i < arr.length; i++) {
    const oldArr = arr[i]
    const newArr = oldArr + 1

    console.log(newArr)
  }

// 11h 
function addOne (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1)
  }
  return result
  
}
console.log(addOne([-2, -1, 0, 99]))

// 11i 
  function addNum(arr, num) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
       result.push(arr[i] + num)
     
  }
  return result
}
  console.log(addNum([1,2,3],2))

// 11j
function addArr(arr1, arr2) {
  const result = []
  
  for (let i = 0; i < arr.length; i++) {
     result.push(arr1[i] + arr2[i])
   
}
return result
}
console.log(addArr([1,2,3],[1,2,3]))

// 11k
function countPositive(nums) {
  let count = 0
  
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > 0) {
      count++
    }
  }
  return count
}
console.log(countPositive([1,-2,3]))

// 11L  
function minMax(nums) {
  const result = {
    min: nums[i],
    max: nums[i]
  }
  
  for (let i = 0; i < nums.length; i++) {
   if (nums[i] <) 
  }

  return {`min: ${}, max: ${}`}
}

// 11m

// 11n

      PLEASE DO EXERCISE LATER AGAIN
*/