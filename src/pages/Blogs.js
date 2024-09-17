import './blog.css'
import abg1 from './images/abg1.png'


const Blogs=()=>{
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center" id="imgs">
                <div className='row ' id="poo">
                    <div className='col col-sm-12 col-md-12 col-lg-12 position-relative'>
                        <img src={abg1} className="card-img-top " alt="..." />
                        <h1 className='centered-text'>Blogs</h1>
                    </div>
                </div>
            </div><br /><br /><br />
        </div>
    )
}
export default Blogs;