import Layout from "../components/Layout/Layout.jsx"

const About = () => {
  return (
    <>
      <Layout title={"About us - Ecommer app"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="src\assets\AboutUs.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
              Welcome to OurCompany, your premier destination for high-quality products and exceptional customer service. Since our founding in 20XX, we ve been dedicated to providing customers with a seamless shopping experience and top-notch products that exceed expectations.
            </p>
          </div>
        </div>

      </Layout>
      <img
        src="C:\Users\vikra\Desktop\E-Commerce\client\src\assets\banner.png"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
    </>


  );
};

export default About;