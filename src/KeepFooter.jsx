import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const KeepFooter=()=>{

    return(<>
    <div id="page-container">
    <footer className="footer text-center bg-danger">
  
  <div class="container p-4 pb-0 ">
   
    <section class="mb-4 ">
   
      <a
        class="btn btn-primary btn-floating m-1"
        
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i></a>

     
      <a
        class="btn btn-primary btn-floating m-1"
        
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i></a>

    
      <a
        class="btn btn-primary btn-floating m-1"
       
        href="#!"
        role="button"
        ><i class="fab fa-google"></i></a>

     
      <a
        class="btn btn-primary btn-floating m-1"
       
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i></a>

     
      <a
        class="btn btn-primary btn-floating m-1"
       
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i></a>
  
    </section>
   
  </div>
  

 
  <div class="text-center p-3 text-white" >
  Anuj Keep
    <a class="text-white" href="https://mdbootstrap.com/"> © 2020 Copyright</a>
  </div>
  
</footer>
</div>

    
    </>);

}

export default KeepFooter;