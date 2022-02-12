import React, { Component } from 'react';
let img = [
  "https://media-exp1.licdn.com/dms/image/C5103AQGPrT_USCJP3Q/profile-displayphoto-shrink_800_800/0/1580151203553?e=1626912000&v=beta&t=jPNHNiThRZOempxTBdm2YLeGipUBEHhaYLIUqKZXjVk",
  "https://media-exp1.licdn.com/dms/image/C4E03AQHqqgXobeQCpw/profile-displayphoto-shrink_800_800/0/1597838706514?e=1626912000&v=beta&t=mxoJ6RT4yKNuK4BAGLNxBYAAA1GPzE8gBcHthjeC6Y4",
  "vasu.jpeg",
  "yash.jpeg",
  "sanyam.jpeg"
]
class About extends Component {
    render() {

      return <div>
            <section id="about" className="text-white border-b-2 border-white my-10 h-max">
<p align="center">At Vardhan Estate Website, we understand that people everywhere are searching for a home to call their own. A home is a cherished<br/>memory that lasts forever, where the walls embrace memories, the ceilings shelter love and laughter, where<br/>the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.<br/><br/>

We want to make the journey as joyful as the moment when you finally find the perfect home.<br/>So we begin by partnering with our customers from the start and being there when it matters the most - right<br/>from online search to brokers to home loans to paperwork to finally finding that perfect home. At makaan.com, we help you find joy.</p>
  </section>
  <section id="card" className="bg-transparent">
    <h1 align="center" className="font-bold bg-yellow-500 px-4 py-1 rounded-full shadow text-white mt-20">CODESTERS</h1>
<div className="card-deck mt-20">
  <div className="row">
  <div className="test col-lg-4 mx-auto">
  <div className="card bg-transparent border-0 outline-0">
                  <img className="card-img-top shadow-2xl w-96 h-96 bg-cover" src={img[0]} alt=""/>
  <div className="card-body bg-yellow-500 text-white font-bold rounded-md my-2 shadow-2xl">
     Harshit Goyal<br/>1910991372<br/>React Js
    </div>
  </div>
</div>
<div className="test col-lg-4 mx-auto ">
  <div className="card bg-transparent border-0 outline-0">
                  <img className="card-img-top shadow-2xl w-96 h-96 bg-cover" src={img[1]} alt=""/>
  <div className="card-body bg-yellow-500 text-white font-bold rounded-md my-2 shadow-2xl">
         Prazy Jindal<br/>1910991373<br/>React Js
    </div>
  </div>
</div>
<div className="test col-lg-4 mx-auto">
  <div className="card bg-transparent border-0 outline-0">
                  <img className="card-img-top shadow-2xl w-96 h-96 bg-cover" src={img[2]}/>
  <div className="card-body bg-yellow-500 text-white font-bold rounded-md my-2 shadow-2xl">
        Vasu Sharma<br/>1910991374<br/>Bootstrap,React Js
    </div>
  </div>
</div>
<div className="test col-lg-4 mx-auto">
 <div className="card bg-transparent border-0 outline-0 ">
                  <img className="card-img-top shadow-2xl w-96 h-96 bg-cover" src={img[3]}/>
  <div className="card-body bg-yellow-500 text-white font-bold rounded-md my-2 shadow-2xl">
       Yashdeep Sharma<br/>1910991379<br/>Bootstrap
    </div>
  </div>
</div>
<div className="test col-lg-4 mx-auto">
  <div className="card bg-transparent border-0 outline-0">
                  <img className="card-img-top shadow-2xl w-96 h-96 bg-cover" src={img[4]}/>
  <div className="card-body bg-yellow-500 text-white font-bold rounded-md my-2 shadow-2xl">
       Sanyam<br/>1910991943<br/>Bootstrap
    </div>
  </div>
</div>

</div>
</div>
</section>



<section id="features h-max mt-44 mb-0">
<div className="row">
  <a href="https://instagram.com" className="feature-box col-lg-4 text-white hover:scale-110 transition transform motion-reduce:transform-none">
   <i className="icon fa fa-instagram fa-4x"></i>
   <h3>INSTAGRAM</h3>
 </a>
 <a href="https://facebook.com" className="feature-box col-lg-4 text-white hover:scale-110 transition transform motion-reduce:transform-none">
   <i className="icon2 fa fa-facebook fa-4x"></i>
   <h3>FACEBOOK</h3>
 </a>
 <a href="https://gmail.com" className="feature-box col-lg-4 text-white hover:scale-110 transition transform motion-reduce:transform-none">
   <i className=" icon3 fa fa-envelope fa-4x"></i>
   <h3>EMAIL ID</h3>
 </a>
 </div>
</section>
        </div>
    }
}

export default About;