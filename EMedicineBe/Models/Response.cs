namespace EMedicineBe.Models
{
    public class Response
    {
        public int StatusCode { get; set; }

        public string StatusMessage { get; set; }

        public List <Users> listUsers { get; set; }

        public Users user  { get; set; }

        public List <Medicines> listMedicines { get; set; }

        public Medicines medicine { get; set; }

        public List <Cart> listCart { get; set; }

        public  List<Orders> listOrder { get; set; }

        public Orders order { get; set; }

        public List <OrderItems> listorderItems { get; set; }

        public OrderItems orderItem { get; private set; }




    }
}
