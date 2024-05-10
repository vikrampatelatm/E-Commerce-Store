import Layout from "../../components/Layout/Layout.jsx"
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../context/auth.jsx";
import axios from "axios";

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
   

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8080/auth/forget-password',
                data: {
                    email,
                    newpassword,
                    answer
                }
            });
            if (res && res.data.success) {
                alert("Sucessfully login");
                toast.success('Password Reseted Successfully !');
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
  return (
    <>
        <Layout title="Forget - Ecommer App">
            <div className="form-container" style={{ minHeight: "90vh" }}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Forget Password form</h4>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={newpassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your New Password"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="What is Your Favorite sports"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        RESET PASSWORD
                    </button>

                </form>
            </div>
        </Layout>
    </>
  )
}

export default ForgetPassword
