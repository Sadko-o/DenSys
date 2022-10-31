import React, { Component } from "react";
import AdminHeader from "../../headers/AdminHeader";

class AdminPage extends Component {
  render() {
    return (
      <>
        <AdminHeader></AdminHeader>
        <div class=" sm:py-10 lg:py-16">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Users List
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default AdminPage;
