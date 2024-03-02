// JavaScript code
// JavaScript code
const form = document.getElementById('dynamic-form');
const formFieldsContainer = document.getElementById('form-fields');
const addFieldButton = document.getElementById('add-field-button');

let fieldCounter = 0;

addFieldButton.addEventListener('click', () => {
    fieldCounter++;

    const newField = document.createElement('div');
    newField.innerHTML = `
    <div id="field${fieldCounter}">
    <div class="text-end px-8  mt-4">
         <button type="button" value="field${fieldCounter}" id="field${fieldCounter}" onclick="delete_fun(event)" class="border border-gray-400 px-2 py-1 rounded text-[22px] text-red-500 hover:text-red-600">
             <i class="fa-solid fa-trash"></i>
         </button>
    </div>
    <div id="form-fields" class="flex grid grid-cols-3 gap-4  px-8 mt-8">
            <div >
                <label for="select-option" class="text-[15px]">Select an Option:</label>
               <select id="select-option" class="w-full h-[35px] text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer">
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                     <option value="Graduation">Graduation</option>
                     <option value="Post Graduation">Post Graduatiob</option>
                     <option value="Any Other">Any Other</option>
               </select>
            </div>
                   <div class="flex  flex-col">
                      <label class="text-[15px]">Name of School/College</label>
                      <input type="text" id="field${fieldCounter}" name="field${fieldCounter}" placeholder="School Name..." class="w-full h-[35px] text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer"/>
                  </div>
                  <div>
                      <label class="text-[15px]">Board Name</label>
                      <input type="text" id="field${fieldCounter}" name="field${fieldCounter}" placeholder="Board Name..." class="w-full h-[35px]  text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer"/>
                 </div>
                  <div>
                          <label class="text-[15px]">Subjects Name</label>
                         <input type="text" id="field${fieldCounter}" name="field${fieldCounter}" placeholder="Subjects Name..." class="w-full h-[35px]  text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer"/>
                    </div>
                    <div class="flex  flex-col">
                      <label class="text-[15px]">Total Marks</label>
                      <input type="number" id="field${fieldCounter}" name="field${fieldCounter}" placeholder="Total Marks..." class="w-full h-[35px] text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer"/>
                  </div>
                  <div>
                      <label class="text-[15px]">Obtained Marks</label>
                      <input type="number" id="field${fieldCounter}" name="field${fieldCounter}" placeholder="Obtained Marks..." class="w-full h-[35px]  text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer"/>
                 </div>
                  <div>
                          <label class="text-[15px]">Passing Year</label>
                         <input type="text" id="field${fieldCounter}" name="field${fieldCounter}" placeholder="Passing Year..." class="w-full h-[35px]  text-[14px] border border-gray-400 rounded outline-none pl-2 hover:border-[#5D17EB] cursor-pointer"/>
                    </div>
           </div>
           </div>
  `;

    formFieldsContainer.appendChild(newField);
    // ----------------------------------------------------
    // Attach a click event listener to the delete button
    // const deleteButton = newField.querySelector('#');
    // deleteButton.addEventListener('click', (event) => {
    //     console.log(event.target.value);
    //     const fieldIdToDelete = deleteButton.getAttribute('data-field-id');
    //     const fieldToDelete = document.getElementById(`field-${fieldIdToDelete}`);
    //     if (fieldToDelete) {
    //         formFieldsContainer.removeChild(fieldToDelete);
    //     }
    // });
    // -----------------------------------------------------
});

function delete_fun(event) {
    var div_id = event.target.value;
    var div_page = document.getElementById(div_id);
    // var formFieldsContainer = document.getElementById('form-fields');
    console.log(div_id);
    console.log(div_page);
    // div_page.remove();
}
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Handle form submission here
// });
