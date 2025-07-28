import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './componants/Header_page.js';
import Footer from './componants/Footer_page.js';
import Middle from './componants/Middle_page.js';

function App() {
  // State to manage dark mode
  
  return (
    <div className="App">

      {/* header */}
      <h1><Header title="vraj's app" /></h1>

      <main className="main-content">

        {/* main page content goes here */}
        <Middle />

      </main>
    <footer class="footer">
      {/* ...footer content here... */}
      <Footer title="vraj's app" />
    </footer>

    </div>
  );
}

export default App;
