import Layout from "../../components/Layout/Layout";
import AdminMenu from "./AdminMenu";

const Users = () => {
    return (
      <div>
      <Layout title={"Dashboard - All Users"}>
          <div className="row">
              <div className="col-md-3">
                  <AdminMenu />
              </div>
              <div className="col-md-9">
                  <h1>All Users</h1>
              </div>
          </div>
      </Layout>
  </div>
      );
};

export default Users
