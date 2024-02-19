using System.Data;
using System.Data.SqlClient;
using System.Reflection.Metadata.Ecma335;

namespace EMedicineBe.Models
{
    public class Dal //For database logic
    {
        //For users
        // To Do             Handle null exception for all the data variables...
        public Response register(Users users, SqlConnection connection)
        {
            Response response = new Response();

            SqlCommand cmd = new SqlCommand("sp_register", connection);

            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
            cmd.Parameters.AddWithValue("@LastName", users.LastName);
            cmd.Parameters.AddWithValue("@Password", users.Password);
            cmd.Parameters.AddWithValue("@Email", users.Email);
            //cmd.Parameters.AddWithValue("@Fund", 0);
            cmd.Parameters.AddWithValue("@Type", "Admin");
            //cmd.Parameters.AddWithValue("@Status", "0");

            connection.Open();

            int i = cmd.ExecuteNonQuery();

            connection.Close();

            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "User registered successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User registration failed";
            }

            return response;

        }

        public Response login(Users users, SqlConnection connection)
        {
            SqlDataAdapter adapter = new SqlDataAdapter("sp_login", connection);
            adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
            adapter.SelectCommand.Parameters.AddWithValue("@Email", users.Email);
            adapter.SelectCommand.Parameters.AddWithValue("@Password", users.Password);
            //adapter.SelectCommand.Parameters.AddWithValue("@Type", users.Type);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            Response response = new Response();
            Users user = new Users();
            if (dt.Rows.Count > 0)
            {
                user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
                

                user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                user.LastName = dt.Rows[0]["LastName"] == DBNull.Value ? "" : Convert.ToString(dt.Rows[0]["LastName"]);
                user.Email = Convert.ToString(dt.Rows[0]["Email"]); 
                user.Type = Convert.ToString(dt.Rows[0]["Type"]);
                response.StatusCode = 200;
                response.StatusMessage = "User is valid";
                response.user = user;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User is invalid";
                response.user = null;
            }
            return response;


        }

        public Response viewUser(Users users, SqlConnection connection)
        {
            SqlDataAdapter adapter = new SqlDataAdapter("sp_viewUser", connection);

            adapter.SelectCommand.CommandType = CommandType.StoredProcedure;

            adapter.SelectCommand.Parameters.AddWithValue("@ID", users.ID);

            DataTable dt = new DataTable();

            adapter.Fill(dt);
            Response response = new Response();
            Users user = new Users();
            if (dt.Rows.Count > 0)
            {
                user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
                user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                user.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
                user.Email = Convert.ToString(dt.Rows[0]["Email"]);
                user.Type = Convert.ToString(dt.Rows[0]["Type"]);
                user.Fund = Convert.ToDecimal(dt.Rows[0]["Fund"]);
                user.CreatedOn = Convert.ToDateTime(dt.Rows[0]["CreatedOn"]);
                user.Password = Convert.ToString(dt.Rows[0]["Password"]);
                response.StatusCode = 200;
                response.StatusMessage = "User exists";
                response.user = user;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User does not exist";
                response.user = null;
            }
            return response;

        }

        public Response updateProfile(Users users, SqlConnection connection)
        {

            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_updateProfile", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
            cmd.Parameters.AddWithValue("@LastName", users.LastName);
            cmd.Parameters.AddWithValue("@Password", users.Password);
            cmd.Parameters.AddWithValue("@Email", users.Email);
            connection.Open();

            int i = cmd.ExecuteNonQuery();

            connection.Close();

            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Record Updated Successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Some error occured. Try after sometime";
            }

            return response;

        }

        public Response addToCart(Cart cart, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_AddToCart", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@UserId", cart.UserID);
            cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
            cmd.Parameters.AddWithValue("@Discount", cart.Discount);
            cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
            cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
            cmd.Parameters.AddWithValue("@MedicineId", cart.MedicineID);
            cmd.ExecuteNonQuery();
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Item added Successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Item was not added";
            }

            return response;
        }

        public Response placeOrder(Users user, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_PlaceOrder", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID", user.ID);

            connection.Open();
            cmd.ExecuteNonQuery();
            int i = cmd.ExecuteNonQuery();
            connection.Close();

            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Order Placed Successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Order Could not be placed";
            }

            return response;
        }

        public Response orderList(Users user, SqlConnection connection)
        {
            Response response = new Response();
            List<Orders> listOrders = new List<Orders>();
            SqlDataAdapter adapter = new SqlDataAdapter("sp_OrderList", connection);
            adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
            adapter.SelectCommand.Parameters.AddWithValue("@Type", user.Type);
            adapter.SelectCommand.Parameters.AddWithValue("@ID", user.ID);
            DataTable dt = new DataTable();
            adapter.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {

                    Orders order = new Orders();
                    order.ID = Convert.ToInt32(dt.Rows[i]["ID"]);
                    order.OrderNumber = Convert.ToString(dt.Rows[i]["OrderNumber"]);
                    order.OrderTotal = Convert.ToDecimal(dt.Rows[i]["OrderTotal"]);
                    order.OrderStatus = Convert.ToString(dt.Rows[i]["OrderStatus"]);
                    listOrders.Add(order);

                    if (listOrders.Count > 0)
                    {
                        response.StatusCode = 200;
                        response.StatusMessage = "Order details fetched";
                        response.listOrder = listOrders;
                    }

                    else
                    {
                        response.StatusCode = 100;
                        response.StatusMessage = "Order details not available";
                        response.listOrder = null;
                    };
                }
            }

            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Order details not available";
                response.listOrder = null;
            }
            return response;
        }



        // For admin;

        public Response addUpdateMedicine(Medicines medicines, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_addUpdateMedicine", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Name", medicines.Name);
            cmd.Parameters.AddWithValue("@Manufacturer", medicines.Manufacturer);
            cmd.Parameters.AddWithValue("@UnitPrice", medicines.UnitPrice);
            cmd.Parameters.AddWithValue("@Discount", medicines.Discount);
            cmd.Parameters.AddWithValue("@Quantity", medicines.Quantity);
            cmd.Parameters.AddWithValue("@ExpDate", medicines.ExpDate);
            cmd.Parameters.AddWithValue("@ImageUrl", medicines.ImageUrl);
            cmd.Parameters.AddWithValue("@Status", medicines.Status);
            //cmd.Parameters.AddWithValue("@Type", medicines.Type);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Medicines Added and updated Successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Medicines did not save. Try again ";
            }

            return response;
        }

        public Response userList(SqlConnection connection)
        {
            Response response = new Response();
            List<Users> listUsers = new List<Users>();
            SqlDataAdapter adapter = new SqlDataAdapter("sp_UserList", connection);
            adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
            adapter.SelectCommand.Parameters.AddWithValue("@rowOffset",0);
            adapter.SelectCommand.Parameters.AddWithValue("@fetchNextRows", 8);
            DataTable dt = new DataTable();
            adapter.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {

                    Users user = new Users();
                    user.ID = Convert.ToInt32(dt.Rows[i]["ID"]);
                    user.FirstName = dt.Rows[i]["FirstName"] == DBNull.Value ? "" : Convert.ToString(dt.Rows[i]["FirstName"]);
                    user.LastName = dt.Rows[i]["LastName"] == DBNull.Value ? "" : Convert.ToString(dt.Rows[i]["LastName"]);
                    user.Password = dt.Rows[i]["Password"] == DBNull.Value ? "" : Convert.ToString(dt.Rows[i]["Password"]);
                    user.Email = dt.Rows[i]["Email"] == DBNull.Value ? "" : Convert.ToString(dt.Rows[i]["Email"]);
                    //user.Fund = Convert.ToDecimal(dt.Rows[i]["Fund"]);
                    user.Type = dt.Rows[i]["Type"] == DBNull.Value ? "" : Convert.ToString(dt.Rows[i]["Type"]);
                    //user.Status = Convert.ToInt32(dt.Rows[i]["Status"]);
                    user.CreatedOn = Convert.ToDateTime(dt.Rows[i]["CreatedOn"]);
                    listUsers.Add(user);

                    if (listUsers.Count > 0)
                    {
                        response.StatusCode = 200;
                        response.StatusMessage = "User details fetched";
                        response.listUsers = listUsers;
                    }

                    else
                    {
                        response.StatusCode = 100;
                        response.StatusMessage = "User details not available";
                        response.listUsers = null;
                    };
                }
            }

            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User details not available";
                response.listUsers = null;
            }
            return response;
        }

    }
}

