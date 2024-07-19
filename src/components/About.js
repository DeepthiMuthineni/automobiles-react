import {Component} from 'react';

class About extends Component{
    render(){
        return (
        <div className="h-100 p-5 text-bg-secondary">
          
            <div data-testid="about-content">
                <div className="container col-xxl-8 px-4 py-5" >
               
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
        <p className="lead">Cars have controls for driving, parking, passenger comfort, and a variety of lamps. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
          <button type="button" className="btn btn-outline-dark btn-lg px-4">Contact US</button>
        </div>
      </div>
    </div>
   
  </div>


  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">BMW</h5>
        <p className="card-text">BMW's signature kidney grille and sporty design make it an iconic presence on the road.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Lamborgini</h5>
        <p className="card-text">Lamborghini's powerful engines and distinctive design make it a symbol of luxury and speed.</p>
      </div>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mercedes</h5>
        <p className="card-text">Mercedes-Benz continues to lead in automotive innovation, with cutting-edge features and a focus on safety and comfort. </p>
      </div>
      
    </div>
  </div>
</div>
            </div>
            </div>
        )
    }
}
export default About;
