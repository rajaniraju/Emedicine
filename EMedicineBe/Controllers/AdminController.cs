using EMedicineBe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        [Route ("addUpdateMedicine")]

        public Response addUpdateMedicine(Medicines medicines)
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.addUpdateMedicine(medicines, connection);
            return response;
        }


        [HttpGet]
        [Route("userList")]

        public Response userList()
        {
            Response response = new Response();
            Dal dal = new Dal();
            SqlConnection connection= new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            response = dal.userList( connection);
            return response;
        }
    }
}
