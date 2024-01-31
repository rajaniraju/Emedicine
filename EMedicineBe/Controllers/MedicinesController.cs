using EMedicineBe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace EMedicineBe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public MedicinesController(IConfiguration configuration)
        {

            _configuration = configuration; 

        }

        [HttpPost]
        [Route("addToCart")]

        public Response addToCart(Cart cart)
        {
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            Response response = dal.addToCart(cart, connection);
            return response;

        }
        [HttpPost]
        [Route("placeOrder")]

        public Response placeOrder(Users user)
        {
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            Response response = dal.placeOrder(user, connection);
            return response;

        }
        [HttpPost]
        [Route("")]

        public Response orderList(Users user)
        {
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            Response response = dal.orderList(user, connection);
            return response;

        }
    }
}
