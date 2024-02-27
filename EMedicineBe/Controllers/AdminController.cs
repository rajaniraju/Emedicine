using EMedicineBe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace EMedicineBe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AdminController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("addMedicine")]

        public Response addMedicine(Medicines medicines)
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.addMedicine(medicines, connection);
            return response;
        }


        [HttpGet]
        [Route("userList")]

        public Response userList()
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.userList(connection);
            return response;
        }

        [HttpGet]
        [Route("medicineList")]

        public Response medicineList()
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.medicineList(connection);
            return response;
        }
        [HttpPost]
        [Route("updateMedicine")]

        public Response updateMedicine(Medicines medicines)
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.updateMedicine(medicines, connection);
            return response;
        }

        [HttpDelete]
        [Route("deleteMedicine")]

        public Response deleteMedicine(Medicines medicines)
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.deleteMedicine(medicines, connection);
            return response;
        }
    }
}

