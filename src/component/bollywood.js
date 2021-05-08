import React from 'react'
import './../styles/page.css'
import Logo1 from './../images/image3.jpg'
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import About from './about.js'
import Course from './course.js'
import Bollywoodcopy from './bollywoodcopy.js'
function Home(props){
  console.log(props)
return(

<>   
        
 {
 props.courselist.map(item=>(
 <>
  <div className="two">
            <h1>The Siren</h1>
            </div>
   <div className="three">
          <Route>
        <Link to="/" id="fourtysix">Home</Link>
        <Link to="/bollywoodcopy" id="fourtysix">Bollywood</Link>
        <Link to="/technologycopy" id="fourtysix">Technology</Link>
        <Link to="/hollywoodcopy" id="fourtysix">Hollywood</Link>
        <Link to="/fitnesscopy" id="fourtysix">Fitness</Link>
        <Link to="/foodcopy" id="fourtysix">Food</Link>
        </Route>
        </div>
 <div className="main4">
<div className="main3">

<p id="fourteen">Latest Articles</p>

<div className="seven">
<img src={Logo1} id="thirteen"/>
<div id="fifteen">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo1} id="eighteen"/>
<div id="ninteen">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo1} id="twenty"/>
<div id="twentytwo">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo1} id="twentyone"/>
<div id="twentythree">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>


<div id="twentyfour">
  <h1 id="twentyfive">Advertisment</h1>
</div>
<div id="twentyseven">
<div>Top </div>
<div>Posts</div>
</div>
<img src={Logo1} id="twentysix"/>
</div>


<div className="eight">
  <img src={Logo1} id="twentyeight"/>

  <div id="twentynine">
<h3>{item.heading}</h3>
<div id="sixteen">
<p id="eleven">{item.job}</p>
<p id="twelve">{item.date}</p>
</div>
</div>

<div id="thirty">
<img src={Logo1} id="thirtythree"/>
</div>
<div id="thirtyfour">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>


<div id="thirtyone">
<img src={Logo1} id="thirtyfive"/>
</div>
<div id="fourtyone">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>




<div id="thirtytwo">
<img src={Logo1} id="thirtyseven"/>
</div>
<div id="fourtytwo">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>






</div>

</div>
</div>
 </>
))

}

</>
);
}
export default Home;