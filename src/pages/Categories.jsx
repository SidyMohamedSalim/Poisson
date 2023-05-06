import Header from "../Components/Header";

const Categories = () => {
    return (  
    
    <>
<Header />
    <section className="section category">
   
    <div className="cat-center">
      <div className="cat">
        <img src="./images/cat3.jpg" alt="" />
        <div>
          <p>WOMEN'S WEAR</p>
        </div>
      </div>
      <div className="cat">
        <img src="./images/cat2.jpg" alt="" />
        <div>
          <p>ACCESSORIES</p>
        </div>
      </div>
      <div className="cat">
        <img src="./images/cat1.jpg" alt="" />
        <div>
          <p>MEN'S WEAR</p>
        </div>
      </div>
    </div>
  </section>
  </>
);
}
 
export default Categories;