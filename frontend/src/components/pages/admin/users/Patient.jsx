export default function Patient() {
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
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="bloodtype"
              >
                Blood type
              </label>
              <select
                class="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                id="bloodtype"
              >
                <option selected class="">
                  Select blood type
                </option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">AB</option>
                <option value="4">O</option>
              </select>
            </div>
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
              for="emergencyContactNumber"
            >
              Emergency Contact Number
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="emergencyContactNumber"
              type="text"
              placeholder="+7-(XXX)-XXX-XX-XX"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email (Optional)
            </label>
            <input
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              type="text"
              placeholder="example@gmail.com"
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
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="bloodtype"
              >
                Martial Status
              </label>
              <select
                class="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                id="bloodtype"
              >
                <option selected class="">
                  Select Martial Status
                </option>
                <option value="1">Married</option>
                <option value="2">Not married</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="dateOfBirth"
            >
              Registration Date
            </label>
            <input
              class=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="dateOfBirth"
              type="date"
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
