export default function Doctor() {
  return (
    <>
      <div class="w-full max-w-xs">
        <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              class=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              type="text"
              placeholder="Name"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Surname
            </label>
            <input
              class=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="surename"
              type="text"
              placeholder="Surname"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="dateOfBirth"
            >
              Date of Birth
            </label>
            <input
              class=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="dateOfBirth"
              type="date"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="iin">
              IIN
            </label>
            <input
              class=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="dateOfBirth"
              type="text"
              placeholder="xxxxxxxxxxxx"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="userID"
            >
              ID
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="userID"
              type="text"
              placeholder="xxxxxxxxx"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="contactNumber"
            >
              Contact Number
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="contactNumber"
              type="text"
              placeholder="+7-(XXX)-XXX-XX-XX"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="adress"
            >
              Adress
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="adress"
              type="text"
              placeholder="53 Example street, apt. 123"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="departmentID"
            >
              Department ID
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="departmentID"
              type="text"
              placeholder="Department ID"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="speDetailsID"
            >
              Specialization Details ID
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="speDetailsID"
              type="text"
              placeholder="Specialization Details ID"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="experience"
            >
              Experience (in years)
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="experience"
              type="text"
              placeholder="Experience"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="category"
            >
              Category
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="category"
              type="text"
              placeholder="Category"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="priceAppoint"
            >
              Price of the appointment
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="priceAppoint"
              type="text"
              placeholder="Price of the appointment"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="degree"
            >
              Degree/Education
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="degree"
              type="text"
              placeholder="Degree/Education"
            ></input>
          </div>
          <div class="flex justify-center">
            <div class="mb-3 w-96">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="degree"
              >
                Photo of the doctor
              </label>
              <input
                class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
              ></input>
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="homepage"
            >
              Homepage URL (optional)
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="homepage"
              type="text"
              placeholder="Homepage URL"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="rating"
            >
              Rating
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="rating"
              type="number"
              placeholder="Rating"
            ></input>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
