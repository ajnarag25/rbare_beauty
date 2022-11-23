import styles from "./sidebar.module.css";
const sidebar = () => {
  return (

    <div>
        <div className={styles.sidebar}>
            <img src="./logo.jpg" width="200px" alt="" />
            <br /><br /><br />
            <center>
                <img className={styles.logo} src="./cart.png" width="50px" alt="" />
            </center>
            <br />
            <center>
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#poweredby">Powered By</a>
            </center>
            
        </div>
        <div className={styles.content}>
            <div className={styles.gridcontainer}>
                <div>
                    <img className={styles.rbare} src="./rbare.jpg" width="500" alt="" />
                </div>
                <div className={styles.textcustom1}>
                    <h2>The brighter the lips, </h2>
                    <div className={styles.textcustom2}>
                        <h2>The bright the smile </h2>
                    </div>
                </div>
       
            </div>
            <div className={styles.yellow}></div>

            <h1 className={styles.colorblack}> <b>Products</b> </h1>
            <div className={styles.gridcontainer}>
                <div>
                    <img src="./image1.jpg" width="250" alt="" />
                    <br />
                    <button className={styles.btn}>ADD TO CART</button>
                </div>
                <div>
                    <img src="./image2.jpg" width="250" alt="" />
                    <br />
                    <button className={styles.btn}>ADD TO CART</button>
                </div>
                <div className={styles.item1}><img src="./poster.jpg" width="700" alt="" /></div>  
                <div></div>
                <div>
                    <img src="./image3.jpg" width="250" alt="" />
                    <br />
                    <button className={styles.btn}>ADD TO CART</button>
                </div>
                <div>
                    <img src="./image4.jpg" width="250" alt="" />
                    <br />
                    <button className={styles.btn}>ADD TO CART</button>
                    <br /><br />
                    <h4 className={styles.products}>VIEW ALL PRODUCTS</h4>
                </div>
            </div>
            <br />
            <div className={styles.gridcontainer}>
                <div className={styles.footer}>
                    <p> <img className="a" src="./phone.png" width="40px" height="40px" alt="" /> 09454879874</p>
                </div>
                <div className={styles.footer}>
                    <p> <img className="a" src="./mail.png" width="40px" height="40px" alt="" /> r_barebeauty@gmail.com</p>
                </div>
                <div className={styles.footer}>
                    <p> <img className="a" src="./fb.png" width="40px" height="40px" alt="" /> Raizzy & Bear Products </p>
                </div>

            </div>
        </div>

    </div>


  );
};

export default sidebar;